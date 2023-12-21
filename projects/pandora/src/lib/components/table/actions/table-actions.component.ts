import { Component, ElementRef, HostListener, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITableAction } from "./typings/action";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { heroEllipsisVertical } from "@ng-icons/heroicons/outline";
import { AutoAnimateDirective } from "../../../directives/auto-animate.directive";
import { animate, style, transition, trigger } from "@angular/animations";
import { DropdownDirective } from "../../../directives/dropdown.directive";

@Component({
    selector: 'app-table-actions',
    standalone: true,
    imports: [
        CommonModule,
        NgIcon,
        AutoAnimateDirective,
        DropdownDirective,
    ],
    providers: [provideIcons({ heroEllipsisVertical })],
    templateUrl: './table-actions.component.html',
    styleUrl: './table-actions.component.scss',
})
export class TableActionsComponent {

    // ----------[ Input ]----------

    @Input({ required: true })
    actions: ITableAction[] = [];


}
