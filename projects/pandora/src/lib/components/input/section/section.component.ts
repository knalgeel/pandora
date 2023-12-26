import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIcon } from "@ng-icons/core";
import { AutoAnimateDirective } from "../../../directives";

@Component({
    selector: 'pandora-input-section',
    standalone: true,
    imports: [CommonModule, AutoAnimateDirective, NgIcon],
    templateUrl: './section.component.html',
    styleUrl: './section.component.scss'
})
export class SectionComponent {

    show = signal<boolean>(true);

    toggle() {
        this.show.update((show) => ! show);
    }

}
