import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgClass } from "@angular/common";

@Component({
    selector: 'pandora-code-input',
    standalone: true,
    imports: [
        NgClass
    ],
    templateUrl: './code-input.component.html',
    styleUrls: ['./code-input.component.scss']
})
export class CodeInputComponent {

    values: string[] = [];

    // ---------- [Inputs ] ----------

    @Input()
    set digits(count: number) {
        this.values = new Array(count).fill('');
    }

    // ---------- [ Outputs ] ----------

    @Output()
    filled = new EventEmitter<string>();

    // ---------- [ Event Handlers ] ----------

    protected onInput(event: Event, index: number) {
        event.preventDefault();

        const target = event.target as HTMLInputElement;
        const value = target.value;

        this.values[index] = value;

        this.handleFocus(value, index, target);

        if (this.isFilled) {
            target.blur();
            setTimeout(() => this.emitEvent());
        }
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

        const pastedData = event.clipboardData?.getData('text').slice(0, this.digits) || '';
        const characters = pastedData.split('');

        characters.forEach((char, i) => {
            i = index + i;
            if (i < this.digits) {
                this.values[i] = char;
            }
        });

        const target = event.target as HTMLInputElement;

        target.blur();
    }

    // ---------- [ Methods ] ----------

    public clear() {
        this.values = new Array(this.digits).fill('');
    }

    private handleFocus(value: string, index: number, target: HTMLInputElement) {
        if (this.shouldFocusOnPrevious(value, index)) {
            this.focusOnPrevious(target);
            return;
        }

        if (this.shouldFocusOnNext(value, index)) {
            this.focusOnNext(target);
            return;
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
        return value.length === 1 && index < this.digits - 1;
    }

    private emitEvent() {
        this.filled.emit(this.values.join(''));
    }

    // ---------- [ Getters ] ----------

    get class() {
        return `code-input--count-${ this.digits }`;
    }

    get isFilled() {
        return this.values.every(value => value.length === 1);
    }

    get digits() {
        return this.values.length;
    }
}
