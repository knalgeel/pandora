import { Component, Input } from '@angular/core';
import { NgClass } from "@angular/common";
import { NgIcon } from "@ng-icons/core";
import { RouterLink } from "@angular/router";
import { IStep } from "./typings/step";
import { AutoAnimateDirective } from "../../../directives";

@Component({
    selector: 'pandora-progress-nav',
    standalone: true,
    imports: [
        NgClass,
        NgIcon,
        RouterLink,
        AutoAnimateDirective
    ],
    templateUrl: './progress-nav.component.html',
    styleUrl: './progress-nav.component.css'
})
export class ProgressNavComponent {

    @Input()
    steps: IStep[] = [];

    @Input()
    set stepIndex(index: number) {
        this.steps.forEach((step, i) => {
            if (i < index) {
                step.status = 'complete';
            } else if (index === i) {
                step.status = 'current';
            } else {
                step.status = 'upcoming';
            }
        });
    }

}
