import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../card/card.component";
import { CardHeadingComponent } from "../card/heading/card-heading.component";
import { AutoAnimateDirective } from "../../directives/auto-animate.directive";
import { animate, style, transition, trigger } from "@angular/animations";

@Component({
    selector: 'app-modal',
    standalone: true,
    imports: [CommonModule, CardComponent, CardHeadingComponent, AutoAnimateDirective],
    templateUrl: './modal.component.html',
    styleUrl: './modal.component.scss',
    animations: [
        trigger('backdropAnimation', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('150ms ease-in', style({ opacity: .75 })),
            ]),
            transition(':leave', [
                style({ opacity: .75 }),
                animate('150ms ease-out', style({ opacity: 0 })),
            ]),
        ]),
        trigger('contentAnimation', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(-50%)' }),
                animate('150ms ease-in', style({ opacity: 1, transform: 'translateY(0)' })),
            ]),
            transition(':leave', [
                style({ opacity: 1, transform: 'translateY(0)' }),
                animate('150ms ease-out', style({ opacity: 0, transform: 'translateY(-50%)' })),
            ]),
        ]),
    ]
})
export class ModalComponent implements OnInit, OnDestroy {
    @Input() show: boolean = false;
    @Input() size: string = 'md';
    @Input() closeable: boolean = true;
    @Output() close = new EventEmitter<void>();
    @Output() updateShow = new EventEmitter<boolean>();

    ngOnInit() {
        document.addEventListener('keydown', this.closeOnEscape);
    }

    ngOnDestroy() {
        document.removeEventListener('keydown', this.closeOnEscape);
        document.body.style.removeProperty('overflow');
    }

    closeOnEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && this.show) {
            this.closeModal();
        }
    };

    closeModal() {
        if (this.closeable) {
            this.close.emit();
            this.updateShow.emit(this.show);
        }
    }

    getMaxWidthClass(): string {
        const sizeClasses: { [key: string]: string } = {
            'xs': 'sm:max-w-xs',
            'sm': 'sm:max-w-sm',
            'md': 'sm:max-w-md',
            'lg': 'sm:max-w-lg',
            'xl': 'sm:max-w-xl',
            '2xl': 'sm:max-w-2xl',
            '3xl': 'sm:max-w-3xl',
            '4xl': 'sm:max-w-4xl',
            '5xl': 'sm:max-w-5xl',
            '6xl': 'sm:max-w-6xl',
            '7xl': 'sm:max-w-7xl'
        };

        return sizeClasses[this.size] || sizeClasses['md'];
    }

}
