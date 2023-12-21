import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindInputDirective } from "../../directives/bind-input.directive";


@Component({
    selector: 'app-generic',
    standalone: true,
    imports: [CommonModule, BindInputDirective],
    templateUrl: './generic.component.html',
    styleUrl: './generic.component.scss'
})
export class GenericComponent {

    @Input()
    component: any;

    @Input()
    inputs: any;

}
