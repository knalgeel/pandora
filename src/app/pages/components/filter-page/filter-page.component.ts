import { Component } from '@angular/core';
import { PandoraFilterItem } from "../../../../../projects/pandora/src/lib/components/filter/typings/filter-item";

@Component({
    selector: 'app-filter-page',
    templateUrl: './filter-page.component.html',
    styleUrl: './filter-page.component.scss'
})
export class FilterPageComponent {

    items: PandoraFilterItem[] = [
        {
            key: 'text',
            label: 'Text filter',
            type: 'text',
        },
        {
            key: 'checkbox',
            label: 'Checkbox filter',
            type: 'checkbox',
            options: [
                { label: 'Value 1', value: 1 },
                { label: 'Value 2', value: 2 },
                { label: 'Value 3', value: 3 },
            ]
        },
        {
            key: 'radio',
            label: 'Radio filter',
            type: 'radio',
            options: [
                { label: 'Value 1', value: 1 },
                { label: 'Value 2', value: 2 },
                { label: 'Value 3', value: 3 },
            ]
        }
    ];

    onFilter($event: Record<string, any>) {
        console.log($event);
    }

}
