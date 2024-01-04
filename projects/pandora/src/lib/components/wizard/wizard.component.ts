import { Component, computed, Input, signal } from '@angular/core';
import { IWizardStep } from "./typings/wizard-step";
import { DynamicComponent } from "../dynamic";
import { IDynamicComponent } from "../dynamic/typings/dynamic-component";
import { ProgressNavComponent } from "../navigation";
import { IStep } from "../navigation/progress-nav/typings/step";


@Component({
    selector: 'pandora-wizard',
    standalone: true,
    imports: [
        DynamicComponent,
        ProgressNavComponent
    ],
    templateUrl: './wizard.component.html',
    styleUrl: './wizard.component.css'
})
export class WizardComponent<T> {

    currentStepIndex = signal<number>(0);

    currentStep = computed<IWizardStep>(() => this.steps[this.currentStepIndex()]);

    currentStepComponent = computed<IDynamicComponent>(() =>
        this.currentStep()?.componentFn({
            next: () => this.next(),
            previous: () => this.previous(),
            context: this.context,
        })
    );

    progressNavSteps = computed<IStep[]>(() => this.steps.map(step => ({
        name: step.name,
    })));

    // ----------[ Inputs ]----------

    @Input()
    steps: IWizardStep<T>[] = [];

    @Input({ required: true })
    context: T;

    // ----------[ Methods ]----------

    public next() {
        if (this.currentStepIndex() >= this.steps.length) {
            return;
        }

        this.currentStepIndex.update(i => i + 1);
    }

    public previous() {
        if (this.currentStepIndex() <= 0) {
            return;
        }

        this.currentStepIndex.update(i => i - 1);
    }

}
