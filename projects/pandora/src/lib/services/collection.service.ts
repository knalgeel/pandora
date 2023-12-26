import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CollectionService<T> {

    public readonly added = new EventEmitter<T>();
    public readonly removed = new EventEmitter<T>();

    public readonly items: T[] = [];

    public add(item: T): void {
        this.items.push(item);

        this.added.emit(item);
    }

    public remove(item: T): void {
        const index = this.items.indexOf(item);

        if (index > -1) {
            this.items.splice(index, 1);

            this.removed.emit(item);
        }
    }

    public pop(): T | undefined {
        const item = this.items[this.items.length - 1];

        if (item) {
            this.remove(item);
        }

        return item;
    }

    public has(item: T): boolean {
        return this.items.includes(item);
    }

}
