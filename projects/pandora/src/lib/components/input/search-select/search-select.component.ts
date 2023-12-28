import { Component, computed, EventEmitter, Input, Output, Signal, signal } from '@angular/core';
import {
    debounceTime, distinctUntilChanged, Observable,
    of,
    switchMap,
    tap
} from "rxjs";
import { FormsModule } from "@angular/forms";
import { toObservable, toSignal } from "@angular/core/rxjs-interop";
import { AutoAnimateDirective } from "../../../directives";
import { SpinnerComponent } from "../../misc/spinner/spinner.component";
import { DynamicComponent } from "../../dynamic";
import { SearchSelectItemComponent } from "./item/search-select-item.component";
import { ItemHandle } from "./typings/item-handle";
import { ItemPlaceholder } from "./typings/item-placeholder";


@Component({
    selector: 'pandora-search-select',
    standalone: true,
    imports: [
        FormsModule,
        AutoAnimateDirective,
        SpinnerComponent,
        DynamicComponent,
        SearchSelectItemComponent,
    ],
    templateUrl: './search-select.component.html',
    styleUrl: './search-select.component.scss'
})
export class SearchSelectComponent<T = any> {

    readonly query = signal<string>('');
    readonly query$ = toObservable(this.query).pipe(
        tap(query => query.length === 0 && this.active.set(false)),
        debounceTime(250),
        distinctUntilChanged(),
    );

    readonly active = signal<boolean>(false);
    readonly loading = signal<boolean>(false);

    readonly options: Signal<T[]> = toSignal(this.query$.pipe(
        switchMap(query => query.length > 0
            ? of(null).pipe(
                tap(() => this.loading.set(true)),
                switchMap(() => this.search(query)),
                tap(() => this.loading.set(false)),
                tap(() => this.active.set(true)),
            )
            : of([]).pipe()
        ),
    ));

    readonly selectedItem = signal<T>(null);

    // ----------[ Computed ]----------

    readonly placeholder = computed(() => {
        const selected = this.selectedItem();
        if (! selected) return '';
        return this.itemPlaceholder(selected);
    });

    // ----------[ Inputs ]----------

    @Input({ required: true })
    search: (query: string) => Observable<T[]>;

    @Input({ required: true })
    itemHandle: ItemHandle<T>;

    @Input({ required: true })
    itemPlaceholder: ItemPlaceholder<T>

    // ----------[ Outputs ]----------

    @Output()
    readonly select = new EventEmitter<T>();

    // ----------[ Event Handlers ]----------

    onClickListItem(event: MouseEvent, item: T) {
        event.stopPropagation();
        this.selectItem(item);
    }

    // ----------[ Methods ]----------

    reset() {
        this.query.set('');
        this.active.set(false);
        this.loading.set(false);
    }

    selectItem(item: T) {
        this.selectedItem.set(item);
        this.select.emit(item);
        this.reset();
    }

    // ----------[ Getters ]----------

    get isEmpty() {
        return this.options().length === 0;
    }
}
