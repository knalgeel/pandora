import { BehaviorSubject, finalize, first, Observable, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { GraphqlPaginatorResult } from './typings/graphql-paginator-result';
import { GraphqlPaginatorParams } from './typings/graphql-paginator-params';
import { Paginator } from './typings/paginator';

export abstract class AbstractGraphQlPaginator<T> implements Paginator<T> {

    private readonly _destroyed = new Subject<void>();
    private readonly _currentPage = new BehaviorSubject<number>(1);
    private readonly _loading = new BehaviorSubject<boolean>(false);

    private _pageSize: number;
    private _total = 0;
    private _items: T[] = [];

    public readonly currentPage$: Observable<number> = this._currentPage.asObservable();
    public readonly loading$: Observable<boolean> = this._loading.asObservable();

    // ----------[ Setup ]----------

    constructor(pageSize: number = 10) {
        this._pageSize = pageSize;
    }

    public init() {
        this.setupCurrentPageSubscription();
        return this.loading$;
    }

    public destroy(): void {
        this._destroyed.next();
        this._destroyed.complete();
    }

    private setupCurrentPageSubscription() {
        this.currentPage$.pipe(
            takeUntil(this._destroyed),
            tap(() => this._loading.next(true)),
            switchMap(page => this.fetchPage(page)),
            tap(result => this.handleResult(result)),
            tap(() => this._loading.next(false)),
        ).subscribe();
    }

    // ----------[ Abstract Methods ]----------

    protected abstract fetch(params: GraphqlPaginatorParams): Observable<GraphqlPaginatorResult<T>>;

    // ----------[ Methods ]----------

    public goto(page: number) {
        this._currentPage.next(page);
        return this.loading$;
    }

    public next(): void {
        if (this.currentPage < this.lastPage) {
            this.goto(this.currentPage + 1);
        }
    }

    public previous(): void {
        if (this.currentPage > 1) {
            this.goto(this.currentPage - 1);
        }
    }

    private fetchPage(page: number) {
        return this.fetch({
            after: this.calculateCursor(page),
            first: this._pageSize
        })
    }

    private calculateCursor(page: number): string | null {
        return page === 1 ? null : btoa(((page - 1) * this._pageSize - 1).toString());
    }

    private handleResult(result: GraphqlPaginatorResult<T>): void {
        this._items = result.nodes;
        this._total = result.totalCount;
    }

    // ----------[ Getters ]----------

    get currentPage(): number {
        return this._currentPage.value;
    }

    get lastPage(): number {
        return Math.ceil(this._total / this._pageSize);
    }

    get total(): number {
        return this._total;
    }

    get items(): T[] {
        return this._items;
    }

    get loading(): boolean {
        return this._loading.value;
    }
}

export class GraphQlPaginator<T> extends AbstractGraphQlPaginator<T> {

    constructor(
        private readonly _fetch: (params: GraphqlPaginatorParams) => Observable<GraphqlPaginatorResult<T>>,
        pageSize: number = 10
    ) {
        super(pageSize);
    }

    protected override fetch(params: GraphqlPaginatorParams): Observable<GraphqlPaginatorResult<T>> {
        return this._fetch(params);
    }
    
}
