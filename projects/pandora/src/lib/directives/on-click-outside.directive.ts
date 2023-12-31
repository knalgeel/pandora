import { Directive, ElementRef, Output, EventEmitter, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[pandoraOnClickOutside]',
    standalone: true,
})
export class OnClickOutsideDirective {
    @Input() pandoraOnClickOutside: (event: MouseEvent) => void = () => {};

    constructor(private elementRef: ElementRef) { }

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent): void {
        const clickedInside = this.elementRef.nativeElement.contains(event.target);
        if (! clickedInside) {
            this.pandoraOnClickOutside(event);
        }
    }
}