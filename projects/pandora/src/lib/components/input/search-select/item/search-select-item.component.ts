import { Component, computed, Input } from '@angular/core';
import { ItemHandle } from "../typings/item-handle";
import { IDynamicComponent } from "../../../dynamic/typings/dynamic-component";
import { DynamicComponent } from "../../../dynamic/dynamic.component";
import { animate, style, transition, trigger } from "@angular/animations";

@Component({
    selector: 'pandora-search-select-item',
    standalone: true,
    imports: [
        DynamicComponent
    ],
    templateUrl: './search-select-item.component.html',
    styleUrls: ['./search-select-item.component.css'],
    animations: [
        trigger('fadeInAnimation', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('500ms ease', style({ opacity: 1 }))
            ]),
            transition(':leave', [
                animate('500ms ease', style({ opacity: 0 }))
            ])
        ]),
    ]
})
export class SearchSelectItemComponent<T> {

    // ----------[ Inputs ]----------

    @Input({ required: true })
    item: T;

    @Input({ required: true })
    handle: ItemHandle<any>

    // ----------[ Computed ]----------

    _value = computed(() => this.handle(this.item));

    // ----------[ Getters ]----------

    get value() {
        return this._value();
    }

    get isComponent() {
        return typeof this.value === 'object' && this.value.hasOwnProperty('type');
    }

    get dynamicComponent() {
        return this.isComponent ? this.value as IDynamicComponent : null;
    }
}
