import { AfterViewInit, Component, ElementRef, HostBinding, OnInit } from '@angular/core';

@Component({
    selector: 'td[app-table-placeholder-column]',
    standalone: true,
    imports: [],
    templateUrl: './placeholder-column.component.html',
    styleUrl: './placeholder-column.component.scss'
})
export class PlaceholderColumnComponent implements AfterViewInit {


    // ----------[ Bindings ]----------

    @HostBinding('class')
    get class(): string {
        return 'px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500 text-center';
    }

    @HostBinding('attr.colspan')
    get colspan(): number {
        return 100;
    }

    constructor(private readonly element: ElementRef) {}

    // ----------[ Lifecycle Hooks ]----------

    ngAfterViewInit() {
        this.element.nativeElement.style.width = this.element.nativeElement.offsetWidth + 'px';
        this.element.nativeElement.style.height = this.element.nativeElement.offsetHeight + 'px';
    }

}
