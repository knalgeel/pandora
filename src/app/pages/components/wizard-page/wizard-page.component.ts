import { Component } from '@angular/core';
import { IWizardStep } from "../../../../../projects/pandora/src/lib/components/wizard/typings/wizard-step";
import { Step1Component } from "./step-1/step-1.component";
import { Step2Component } from "./step-2/step-2.component";

interface IWizardContext {
    item: {
        name: string;
    }
}

@Component({
    selector: 'app-wizard-page',
    templateUrl: './wizard-page.component.html',
    styleUrl: './wizard-page.component.scss'
})
export class WizardPageComponent {

    wizardContext: IWizardContext = {
        item: {
            name: 'test',
        }
    }

    wizardSteps: IWizardStep<IWizardContext>[] = [
        {
            name: 'Step 1',
            componentFn: context => ({
                type: Step1Component,
                inputs: {
                    context,
                }
            }),
        },
        {
            name: 'Step 2',
            componentFn: context => ({
                type: Step2Component,
                inputs: {
                    context,
                }
            }),
        },
        {
            name: 'Step 3',
            componentFn: context => ({
                type: Step1Component,
                inputs: {
                    context,
                }
            }),
        }
    ];

}
