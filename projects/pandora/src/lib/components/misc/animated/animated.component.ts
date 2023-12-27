import {
    ChangeDetectorRef,
    Component, computed, DoCheck,
    ElementRef, signal,
    ViewChild
} from '@angular/core';
import { AutoAnimateDirective } from "../../../directives";
import { HashService } from "../../../services/hash.service";

@Component({
    selector: 'pandora-animated',
    standalone: true,
    imports: [
        AutoAnimateDirective
    ],
    templateUrl: './animated.component.html',
    styleUrl: './animated.component.css'
})
export class AnimatedComponent implements DoCheck {

    innerHTML = signal<string>('');

    hash = computed(() => this.hashService.hash(this.innerHTML()));

    @ViewChild('content') content: ElementRef<HTMLElement>;

    constructor(
        private readonly hashService: HashService,
    ) {}

    // ----------[ Lifecycle Hooks ]----------

    ngDoCheck() {
        this.innerHTML.set(this.content?.nativeElement.innerHTML || '')
    }

}
