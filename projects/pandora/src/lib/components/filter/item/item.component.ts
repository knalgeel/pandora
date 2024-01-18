import { Component, Input } from '@angular/core';
import { PandoraFilterOptions } from "../typings/filter-item-options";
import { PandoraFilterItemType } from "../typings/flter-type";
import { InputGroupComponent } from "../../input";
import { FormControl } from "@angular/forms";

@Component({
    selector: 'pandora-filter-item',
    standalone: true,
    imports: [
        InputGroupComponent
    ],
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent {

    @Input({ required: true })
    control: FormControl;

    @Input()
    label: string = '';

    @Input()
    name: string = '';

    @Input()
    type: PandoraFilterItemType;

    @Input()
    options: PandoraFilterOptions = [];

}
