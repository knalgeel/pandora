import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
    selector: '[pandoraOnClickOutside]',
    standalone: true,
})
export class OnClickOutsideDirective {
    @Output() pandoraOnClickOutside = new EventEmitter<MouseEvent>();

    constructor(private elementRef: ElementRef) { }

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent): void {
        const clickedInside = this.elementRef.nativeElement.contains(event.target);
        if (! clickedInside) {
            this.pandoraOnClickOutside.emit(event);
        }
    }
}