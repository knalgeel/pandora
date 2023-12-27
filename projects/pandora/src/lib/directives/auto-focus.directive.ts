import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[pandoraAutoFocus]',
    standalone: true
})
export class AutoFocusDirective implements OnInit {

    @Input()
    pandoraAutoFocus: boolean = true;

    constructor(private readonly element: ElementRef) { }

    ngOnInit(): void {
        if (this.pandoraAutoFocus) {
            this.element.nativeElement.focus();
        }
    }

}
