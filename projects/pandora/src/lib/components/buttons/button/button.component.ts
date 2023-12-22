import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonVariant } from "./typings/button-variant";
import { ButtonSize } from "./typings/button-size";

@Component({
    selector: 'button[app-button]',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

    @Input() variant: ButtonVariant = 'primary';
    @Input() size: ButtonSize = 'md';

    @HostBinding('class')
    get class() {
        return `app-button app-button--${ this.variant } app-button--${ this.size }`;
    }

}
