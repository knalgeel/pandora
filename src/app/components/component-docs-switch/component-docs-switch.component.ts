import { Component } from '@angular/core';
import { animate, style, transition, trigger } from "@angular/animations";

@Component({
    selector: 'app-component-docs-switch',
    templateUrl: './component-docs-switch.component.html',
    styleUrl: './component-docs-switch.component.scss',
    animations: [
        trigger('fadeAnimation', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('150ms ease-in', style({ opacity: 1 })),
            ]),
            transition(':leave', [
                style({ opacity: 1, position: 'absolute', width: '100%' }),
                animate('50ms', style({ opacity: 0 })),
            ]),
        ]),
    ]
})
export class ComponentDocsSwitchComponent {

    state: 'component' | 'documentation' = 'component';

    setState(state: 'component' | 'documentation') {
        this.state = state;
    }

}
