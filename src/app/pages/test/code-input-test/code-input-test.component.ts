import { Component } from '@angular/core';

@Component({
  selector: 'app-code-input-test',
  templateUrl: './code-input-test.component.html',
  styleUrl: './code-input-test.component.scss'
})
export class CodeInputTestComponent {

    count: number = 6;

    filled: boolean = false;

    onFilled(value: string) {
        this.filled = true;
        setTimeout(() => this.filled = false, 2000);
    }

}
