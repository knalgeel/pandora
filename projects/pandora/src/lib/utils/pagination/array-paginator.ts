import { Signal } from "@angular/core";
import { Paginator } from "./typings/paginator";

export class ArrayPaginator<T> implements Paginator<T> {

    private readonly _items: Signal<T[]>;

    private _currentPage: number = 1;

    constructor(items: Signal<T[]>) {
        this._items = items;
    }

    // ----------[ Methods ]----------

    public goto(page: number, onFinished?: () => void): void {
        this._currentPage = page;
        onFinished?.();
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
