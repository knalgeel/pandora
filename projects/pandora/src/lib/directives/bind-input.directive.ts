import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[bindInput]',
    standalone: true
})
export class BindInputDirective implements OnInit {

    @Input()
    bindInput: Record<string, any>;

    constructor(
        private readonly el: ElementRef,
        private readonly renderer: Renderer2
    ) {}

    ngOnInit() {
        for (const prop in this.bindInput) {
            if (this.bindInput.hasOwnProperty(prop)) {
                this.renderer.setProperty(this.el.nativeElement, prop, this.bindInput[prop]);
            }
        }
    }


}
