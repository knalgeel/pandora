import { Component, Input } from '@angular/core';
import { NgIcon } from "@ng-icons/core";
import { animate, style, transition, trigger } from "@angular/animations";
import { Router, RouterLink } from "@angular/router";
import { KeyValuePipe } from "@angular/common";

export type MenuItem = { icon: string; label: string; } & ({ href: string } | { execute: () => void });
export type GroupedMenuItems = { group: string; items: MenuItem[] };

@Component({
    selector: 'pandora-dropdown-menu',
    standalone: true,
    imports: [
        NgIcon,
        RouterLink,
        KeyValuePipe,
    ],
    templateUrl: './dropdown-menu.component.html',
    styleUrl: './dropdown-menu.component.scss',
    animations: [
        trigger('backdropAnimation', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('150ms ease-in', style({ opacity: 1 })),
            ]),
            transition(':leave', [
                style({ opacity: 1 }),
                animate('150ms ease-out', style({ opacity: 0 })),
            ]),
        ]),
        trigger('menuAnimation', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(10px)' }),
                animate('150ms ease-in', style({ opacity: 1, transform: 'translateY(0)' })),
            ]),
            transition(':leave', [
                style({ opacity: 1, transform: 'translateY(0)' }),
                animate('150ms ease-out', style({ opacity: 0, transform: 'translateY(10px)' })),
            ]),
        ])
    ]
})
export class DropdownMenuComponent {

    private _groups: GroupedMenuItems[] = [];

    // ----------[ Input ]----------

    @Input()
    set items(items: MenuItem[] | GroupedMenuItems[]) {
        if (items.length && 'group' in items[0]) {
            this._groups = items as GroupedMenuItems[];
        } else {
            this._groups = [{
                group: '',
                items: items as MenuItem[]
            }];
        }
    }

    @Input()
    active: boolean = false;

    @Input()
    align: 'left' | 'right' = 'left';

    constructor(private readonly router: Router) { }

    // ----------[ Event Handlers ]----------

    onClickMenuItem(event: MouseEvent, item: MenuItem) {
        if ('execute' in item) {
            item.execute();
        } else {
            this.router.navigate([item.href])
        }
    }

    // ----------[ Getters ]----------

    get groups(): GroupedMenuItems[] {
        return this._groups;
    }

}
