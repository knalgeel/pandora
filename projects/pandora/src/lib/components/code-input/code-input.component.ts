import { Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { NgClass } from "@angular/common";
import { AutoFocusDirective } from "../../directives";

@Component({
    selector: 'pandora-code-input',
    standalone: true,
    imports: [
        NgClass,
        AutoFocusDirective
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

    @Input()
    autofocus = false;

    // ---------- [ Outputs ] ----------

    @Output()
    filled = new EventEmitter<string>();

    // ---------- [ Refs ] ----------

    @ViewChildren('input') input: QueryList<ElementRef<HTMLInputElement>>;

    // ---------- [ Event Handlers ] ----------

    protected onInput(event: Event, index: number) {
        event.preventDefault();

        const target = event.target as HTMLInputElement;
        const cursorPosition = target.selectionStart || 0;
        const value = target.value[cursorPosition - 1] || '';

        target.value = value;

        this.values[index] = value;

        this.handleFocus(value, index);

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
            this.focusOnIndex(index - 1);
            this.values[index - 1] = '';
        }
    }

    protected onPaste(event: ClipboardEvent, index: number) {
        event.preventDefault();

        const pastedData = event.clipboardData?.getData('text').slice(0, this.digits) || '';
        const characters = pastedData.split('').splice(0, this.digits - index);

        characters.forEach((char, i) => {
            this.values[index + i] = char;
        });

        this.focusOnIndex(index + characters.length - 1);

        if (this.isFilled) {
            setTimeout(() => this.emitEvent());
        }
    }

    // ---------- [ Methods ] ----------

    public focus() {
        this.focusOnIndex(0);
    }

    public clear() {
        this.values = new Array(this.digits).fill('');
    }

    private handleFocus(value: string, index: number) {
        if (value.length === 0 && index > 0) {
            this.focusOnIndex(index - 1);
        } else if (value.length === 1 && index < this.digits - 1) {
            this.focusOnIndex(index + 1);
        }
    }

    private focusOnIndex(index: number) {
        this.input.get(index).nativeElement.focus();
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
