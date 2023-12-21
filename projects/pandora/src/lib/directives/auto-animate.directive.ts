import {
    Directive,
    AfterViewInit,
    ElementRef,
    Input,
} from "@angular/core"
import autoAnimate, { AutoAnimateOptions } from "@formkit/auto-animate";

@Directive({
    selector: '[autoAnimate]',
    standalone: true
})
export class AutoAnimateDirective implements AfterViewInit {

    @Input() autoAnimate?: Partial<AutoAnimateOptions> | '';

    constructor(private el: ElementRef) {}

    ngAfterViewInit(): void {
        autoAnimate(this.el.nativeElement, this.autoAnimate || {
            duration: 150,
        })
    }

}
