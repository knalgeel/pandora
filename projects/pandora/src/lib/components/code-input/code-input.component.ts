import { Component, Input, OnInit } from '@angular/core';
import { NgClass } from "@angular/common";

@Component({
    selector: 'app-code-input',
    standalone: true,
    imports: [
        NgClass
    ],
    templateUrl: './code-input.component.html',
    styleUrls: ['./code-input.component.scss']
})
export class CodeInputComponent implements OnInit {

    values: string[] = [];

    // ---------- [Inputs ] ----------

    @Input()
    count: number = 6;

    // ---------- [ Lifecycle Hooks ] ----------

    ngOnInit() {
        this.values = new Array(this.count).fill('');
    }

    // ---------- [ Event Handlers ] ----------

    protected onInput(event: Event, index: number) {
        event.preventDefault();

        const target = event.target as HTMLInputElement;
        const value = target.value;

        this.values[index] = value;

        this.handleFocus(value, index, target);
    }

    protected onKeyDown(event: KeyboardEvent, index: number) {
        if (event.code !== 'Backspace') {
            return;
        }

        if (this.values[index] === '' && index > 0) {
            event.preventDefault();
            const target = event.target as HTMLInputElement;
            this.focusOnPrevious(target);
        }
    }

    protected onPaste(event: ClipboardEvent, index: number) {
        event.preventDefault();

        const pastedData = event.clipboardData?.getData('text').slice(0, this.count) || '';
        const characters = pastedData.split('');

        characters.forEach((char, i) => {
            i = index + i;
            if (i < this.count) {
                this.values[i] = char;
            }
        });

        const target = event.target as HTMLInputElement;

        target.blur();
    }

    private handleFocus(value: string, index: number, target: HTMLInputElement)
    {
        if (this.shouldFocusOnPrevious(value, index)) {
            this.focusOnPrevious(target);
            return;
        }

        if (this.shouldFocusOnNext(value, index)) {
            this.focusOnNext(target);
            return;
        }

        if (target.parentElement) {
            setTimeout(() => target.focus(), 0);
        }
    }

    private focusOnPrevious(target: HTMLInputElement) {
        const previousInput = target.previousElementSibling as HTMLInputElement;
        previousInput.focus();
    }

    private focusOnNext(target: HTMLInputElement) {
        const nextInput = target.nextElementSibling as HTMLInputElement;
        nextInput.focus();
    }

    private shouldFocusOnPrevious(value: string, index: number) {
        return value.length === 0 && index > 0;
    }

    private shouldFocusOnNext(value: string, index: number) {
        return value.length === 1 && index < this.count - 1;
    }

    // ---------- [ Getters ] ----------

    get class() {
        return `code-input--count-${ this.count }`;
    }

}
