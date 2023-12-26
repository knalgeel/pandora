import { Component, ViewChild } from '@angular/core';
import { CodeInputComponent } from "../../../../../projects/pandora/src/lib/components/code-input";

@Component({
  selector: 'app-code-input-test',
  templateUrl: './code-input-test.component.html',
  styleUrl: './code-input-test.component.scss'
})
export class CodeInputTestComponent {

    @ViewChild('codeInput') codeInput: CodeInputComponent;

    count: number = 6;

    filled: boolean = false;

    onFilled(value: string) {
        this.filled = true;
        this.codeInput.clear();
    }

}
