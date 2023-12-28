import { Component, Input } from '@angular/core';
import { NgComponentOutlet } from "@angular/common";
import { IDynamicComponent } from "./typings/dynamic-component";

@Component({
    selector: 'pandora-dynamic',
    standalone: true,
    imports: [
        NgComponentOutlet
    ],
    templateUrl: './dynamic.component.html',
    styleUrl: './dynamic.component.css'
})
export class DynamicComponent {

    @Input({ required: true })
    component: IDynamicComponent;

}
