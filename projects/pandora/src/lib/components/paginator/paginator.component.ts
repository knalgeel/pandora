import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from "../buttons/button/button.component";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { heroChevronLeftMini, heroChevronRightMini } from "@ng-icons/heroicons/mini";
import { Paginator } from "../../utils/pagination/typings/paginator";

@Component({
    selector: 'app-paginator',
    standalone: true,
    imports: [
        ButtonComponent,
        NgIcon
    ],
    templateUrl: './paginator.component.html',
    styleUrl: './paginator.component.scss',
    providers: [
        provideIcons({
            heroChevronRightMini,
            heroChevronLeftMini,
        })
    ]
})
export class PaginatorComponent<T> {

    // ----------[ Input ]----------

    @Input()
    paginator: Paginator<T>;

    // ----------[ Methods ]----------

    next(): void {
        this.paginator.next();
    }

    previous(): void {
        this.paginator.previous();
    }

    // ----------[ Getters ]----------

    get currentPage(): number {
        return this.paginator.currentPage;
    }

    get lastPage(): number {
        return this.paginator.lastPage;
    }

    get total(): number {
        return this.paginator.total;
    }

}
