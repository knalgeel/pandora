import { Component, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITableColumn, TableColumn } from "./typings/table-column";
import { GenericComponent } from "../../generic/generic.component";
import { BindInputDirective } from "../../../directives/bind-input.directive";

@Component({
    selector: '[app-table-column]',
    standalone: true,
    imports: [CommonModule, BindInputDirective, GenericComponent],
    templateUrl: './column.component.html',
    styleUrl: './column.component.scss',
})
export class ColumnComponent<T = any> implements OnInit {

    private _column!: ITableColumn;

    @Input()
    item?: T;

    @Input()
    set column(column: TableColumn) {
        if (typeof column === 'function') {
            this._column = {
                handle: column,
            }
        } else {
            this._column = column;
        }
    }

    constructor(private readonly element: ElementRef) {}


    // ----------[ Lifecycle Hooks ]----------

    ngOnInit() {
        this.element.nativeElement.style.width = this.element.nativeElement.offsetWidth + 'px';
        this.element.nativeElement.style.height = this.element.nativeElement.offsetHeight + 'px';
    }

    // ----------[ Getters ]----------

    @HostBinding('class')
    get class(): string {
        return this._column.class || '';
    }

    get column(): ITableColumn {
        return this._column;
    }

    get value(): any {
        return this.column.handle(this.item);
    }

    get isComponent(): boolean {
        return typeof this.value === 'object' && this.value?.component;
    }

}
