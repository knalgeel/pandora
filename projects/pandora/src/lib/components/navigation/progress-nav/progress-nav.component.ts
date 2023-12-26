import { Component } from '@angular/core';
import { NgClass } from "@angular/common";
import { NgIcon } from "@ng-icons/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'pandora-progress-nav',
    standalone: true,
    imports: [
        NgClass,
        NgIcon,
        RouterLink
    ],
    templateUrl: './progress-nav.component.html',
    styleUrl: './progress-nav.component.css'
})
export class ProgressNavComponent {
    steps = [
        { name: 'Step 1', href: '#', status: 'complete' },
        { name: 'Step 2', href: '#', status: 'complete' },
        { name: 'Step 3', href: '#', status: 'current' },
        { name: 'Step 4', href: '#', status: 'upcoming' },
        { name: 'Step 5', href: '#', status: 'upcoming' }
    ];
}
