import {
    ComponentRef,
    Directive,
    ElementRef,
    HostBinding,
    HostListener,
    Input,
    ViewContainerRef
} from '@angular/core';
import { DropdownMenuComponent, GroupedMenuItems, MenuItem } from "../components/dropdown-menu/dropdown-menu.component";

@Directive({
    selector: '[pandoraDropdown]',
    standalone: true
})
export class DropdownDirective {

    private active: boolean = false;
    private menuComponentRef: ComponentRef<DropdownMenuComponent> = null;

    // ----------[ Input ]----------

    @Input()
    pandoraDropdown: MenuItem[] | GroupedMenuItems[] = [];

    @Input()
    pandoraDropdownAlign: 'left' | 'right' = 'left';

    constructor(
        private elementRef: ElementRef,
        private viewContainerRef: ViewContainerRef,
    ) { }

    // ----------[ Bindings ]----------

    @HostBinding('class')
    get class(): string {
        return this.active ? 'relative' : 'relative cursor-pointer';
    }

    // ----------[ Event Handlers ]----------

    @HostListener('click')
    onClick() {
        if (! this.active) {
            this.open();
        } else {
            this.close();
        }
    }

    @HostListener('document:click', ['$event'])
    onClickDocument(event: MouseEvent) {
        if (! this.active) return;
        if (! this.viewContainerRef.element.nativeElement.contains(event.target)) {
            this.close();
        }
    }

    // ----------[ Methods ]----------

    private open() {
        this.createMenuComponent()
        this.active = true;
    }

    private close() {
        this.destroyMenuComponent();
        this.active = false;
    }

    private createMenuComponent() {
        const componentRef = this.viewContainerRef.createComponent(DropdownMenuComponent);
        componentRef.instance.items = this.pandoraDropdown;
        componentRef.instance.align = this.pandoraDropdownAlign;
        componentRef.instance.active = true;

        this.elementRef.nativeElement.appendChild(componentRef.location.nativeElement);

        this.menuComponentRef = componentRef;
    }

    private destroyMenuComponent() {
        const ref = this.menuComponentRef;
        ref.instance.active = false;
        setTimeout(() => ref.destroy(), 250);

        this.menuComponentRef = null;
    }

}
