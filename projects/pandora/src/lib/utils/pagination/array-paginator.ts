import { Signal } from "@angular/core";
import { Paginator } from "./typings/paginator";

export class ArrayPaginator<T> implements Paginator<T> {

    private readonly _items: Signal<T[]>;

    private _currentPage: number = 1;

    private _loading: boolean = false;

    constructor(items: Signal<T[]>) {
        this._items = items;
    }

    // ----------[ Methods ]----------

    public goto(page: number) {
        this._currentPage = page;
    }

    public next() {
        this.goto(this._currentPage + 1);
    }

    public previous() {
        this.goto(this._currentPage - 1);
    }

    // ----------[ Getters ]----------

    get all(): T[] {
        return this._items();
    }

    get currentPage(): number {
        return this._currentPage;
    }

    get loading(): boolean {
        return this._loading;
    }

    get lastPage(): number {
        return Math.ceil(this.all.length / 10);
    }

    get total(): number {
        return this.all.length;
    }

    get items(): T[] {
        return this.all.slice((this._currentPage - 1) * 10, this._currentPage * 10);
    }

}
