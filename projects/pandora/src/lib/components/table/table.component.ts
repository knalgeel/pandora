import {
    ChangeDetectorRef,
    Component,
    computed,
    ElementRef,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
    ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITableField } from "./typings/table-field";
import { HeaderComponent } from "./header/header.component";
import { ColumnComponent } from "./column/column.component";
import { AutoAnimateDirective } from "../../directives/auto-animate.directive";
import { PlaceholderColumnComponent } from "./placeholder-column/placeholder-column.component";

@Component({
    selector: 'app-table',
    standalone: true,
    imports: [CommonModule, HeaderComponent, ColumnComponent, AutoAnimateDirective, PlaceholderColumnComponent],
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})
export class TableComponent<T extends { id: string }> implements OnChanges {

    highlight: number = 2;

    readonly sortedFields = computed(() =>
        Object.entries<ITableField>(this.fields)
            .sort(([, a], [, b]) => a.order - b.order)
            .map(([key, value]) => ({ ...value, key }))
    );

    // ----------[ Input ]----------

    @Input({ required: true })
    fields!: Record<string, ITableField<T>>;

    @Input()
    items: T[] = [];

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

    // ----------[ Getters ]----------

    get count(): number {
        return this.items.length;
    }

}
