import { Component, computed, EventEmitter, Input, OnInit, Output, signal, Signal } from '@angular/core';
import { PandoraFilterItem } from "./typings/filter-item";
import { ItemComponent } from "./item/item.component";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";


@Component({
    selector: 'pandora-filter',
    standalone: true,
    imports: [
        ItemComponent
    ],
    templateUrl: './filter.component.html',
    styleUrl: './filter.component.scss'
})
export class FilterComponent<T> implements OnInit {

    form: FormGroup<any>;

    // ----------[ Input ]----------

    @Input({ required: true, transform: (items: PandoraFilterItem[]) => signal(items) })
    items: Signal<(PandoraFilterItem & T)[]> = signal([]);

    // ----------[ Output ]----------

    @Output()
    filter = new EventEmitter<Record<string, any>>();

    // ----------[ Computed ]----------

    constructor(private readonly formBuilder: FormBuilder) {}

    // ----------[ Lifecycle Hooks ]----------

    ngOnInit() {
        this.form = this.createForm();
        this.form.valueChanges.subscribe(value => {
            this.filter.emit(value);
        });
    }

    // ----------[ API ]----------

    public control(key: string) {
        return this.form.get(key) as FormControl;
    }

    // ----------[ Methods ]----------

    private createForm() {
        const group: Record<string, any> = {};

        this.items().forEach(item => {
            group[item.key] = new FormControl(item.default);
        });

        return this.formBuilder.group(group);
    }
}
