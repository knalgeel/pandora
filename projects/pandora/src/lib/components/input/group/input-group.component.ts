import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { InputGroupType } from "./typings/input-group-type";
import { AutoAnimateDirective } from "../../../directives";
import { IOption, Option } from "./typings/option";

@Component({
    selector: 'pandora-input-group',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, AutoAnimateDirective, AutoAnimateDirective],
    templateUrl: './input-group.component.html',
    styleUrls: ['./input-group.component.scss'],
})
export class InputGroupComponent implements OnInit {

    private _options: IOption[] = [];
    private _value: string;

    // ---------- Input ----------

    @Input({ required: true })
    control: FormControl;

    @Input()
    label: string = '';

    @Input()
    description: string = '';

    @Input()
    type: InputGroupType = 'text';

    @Input()
    name: string = '';

    @Input()
    placeholder: string = '';

    @Input()
    set options(options: Option[]) {
        this._options = options.map(option => {
            if (typeof option === 'string') {
                return { label: option, value: option }
            }
            return option;
        });
    }

    // ---------- Lifecycle hooks ----------

    ngOnInit() {
        this._value = this.control.value;
    }

    // ---------- Event handlers ----------

    onChange(event: Event) {
        const target = event.target as HTMLInputElement;
        const value = target.value;
        this._value = value;
        this.control.setValue(value);
    }

    // ---------- Getters ----------

    get options(): IOption[] {
        return this._options;
    }

    get value(): string {
        return this._value;
    }

    get invalid(): boolean {
        return this.control.invalid && this.control.touched;
    }

    get error(): string {
        return 'ToDo: implement error message';
    }

}
