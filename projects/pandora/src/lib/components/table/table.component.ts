import {
    Component,
    ElementRef,
    Input,
    OnChanges,
    ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITableField } from "./typings/table-field";
import { HeaderComponent } from "./header/header.component";
import { ColumnComponent } from "./column/column.component";
import { AutoAnimateDirective } from "../../directives/auto-animate.directive";
import { PlaceholderColumnComponent } from "./placeholder-column/placeholder-column.component";
import { TableFieldRecord } from "./typings/table-field-record";
import { ITableRow } from "./typings/table-row";

@Component({
    selector: 'pandora-table',
    standalone: true,
    imports: [CommonModule, HeaderComponent, ColumnComponent, AutoAnimateDirective, PlaceholderColumnComponent],
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})
export class TableComponent<T extends { id: string }> implements OnChanges {

    private _fields: ITableField<T>[] = [];

    // ----------[ Input ]----------

    @Input({ required: true })
    set fields(fields: TableFieldRecord<T>) {
        this._fields = this.convertFieldRecordToArray(fields)
    }

    @Input()
    items: T[] = [];

    @Input()
    row: ITableRow<T>;

    // ----------[ Refs ]----------

    @ViewChild('table', { static: true }) table: ElementRef;
    @ViewChild('thead', { static: true }) thead: ElementRef;
    @ViewChild('tbody', { static: true }) tbody: ElementRef;

    // ----------[ Lifecycle Hooks ]----------

    ngOnChanges() {
        // Prevents 'jumps' when the table is empty
        if (this.items.length === 0) {
            this.table.nativeElement.style.overflow = 'hidden';
        } else {
            this.table.nativeElement.style.overflow = 'auto';
        }
    }

    // ----------[ Event Handlers ]----------

    protected onClickRow(item: T) {
        this.row?.onClick?.(item);
    }

    // ----------[ Methods ]----------

    private convertFieldRecordToArray(fields: TableFieldRecord<T>) {
        return Object.entries<ITableField>(fields)
            .sort(([, a], [, b]) => a.order - b.order)
            .map(([key, value]) => ({ ...value, key }));
    }

    // ----------[ Getters ]----------

    get count(): number {
        return this.items.length;
    }

    get fields(): Array<ITableField<T>> {
        return this._fields;
    }
}
