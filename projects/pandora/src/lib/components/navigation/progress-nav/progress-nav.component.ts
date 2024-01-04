import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
export class ProgressNavComponent implements OnInit, OnChanges {

    // ----------[ Inputs ]----------

    @Input()
    variant: 'circles' | 'bullets' = 'circles';

    @Input()
    steps: IStep[] = [];

    @Input()
    stepIndex: number = 0;

    // ----------[ Lifecycle Hooks ]----------

    ngOnInit() {
        this.updateSteps()
    }

    ngOnChanges() {
        this.updateSteps();
    }

    // ----------[ Methods ]----------

    private updateSteps() {
        this.steps.forEach((step, i) => {
            if (i < this.stepIndex) {
                step.status = 'complete';
            } else if (this.stepIndex === i) {
                step.status = 'current';
            } else {
                step.status = 'upcoming';
            }
        });
    }
}
