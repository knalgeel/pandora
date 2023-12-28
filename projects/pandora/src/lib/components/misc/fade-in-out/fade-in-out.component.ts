import {
    Component, computed, DoCheck,
    ElementRef, signal,
    ViewChild
} from '@angular/core';
import { AutoAnimateDirective } from "../../../directives";
import { HashService } from "../../../services/hash.service";
import { animate, style, transition, trigger } from "@angular/animations";

@Component({
    selector: 'pandora-fade-in-out',
    standalone: true,
    imports: [
        AutoAnimateDirective
    ],
    templateUrl: './fade-in-out.component.html',
    styleUrl: './fade-in-out.component.css',
    animations: [
        trigger('fadeInOut', [
            transition('* => *', [
                style({ opacity: 0 }),
                animate('250ms', style({ opacity: 1 }))
            ]),
            transition(':leave', [
                style({ position: 'absolute', width: '100%', opacity: 1 }),
                animate('250ms', style({ opacity: 0 }))
            ])
        ])
    ]
})
export class FadeInOutComponent implements DoCheck {

    unique = signal<string>('');

    hash = computed(() => {
        const hash = this.hashService.hash(this.unique());
        console.log(hash);
        return hash;
    });

    @ViewChild('content') content: ElementRef<HTMLElement>;

    constructor(
        private readonly hashService: HashService,
    ) {}

    // ----------[ Lifecycle Hooks ]----------

    ngDoCheck() {
        this.unique.set(this.content?.nativeElement.firstChild.textContent.trim() || '');
    }


}
