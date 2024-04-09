import { Component, HostBinding, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITableField } from "../typings/table-field";
import { ITableHeader, TableHeader } from "./typings/table-header";

@Component({
    selector: '[pandora-table-header]',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {

    private _header!: ITableHeader;

    @HostBinding('class')
    get class(): string {
        return this._header.class || '';
    }

    @HostListener('click')
    onClick() {
        if (this._header.onClick) {
            this._header.onClick();
        }
    }

    @Input({ required: true })
    set header(header: TableHeader) {
        if (typeof header === 'string') {
            this._header = {
                text: header,
            }
        } else {
            this._header = header;
        }
    }

    get header(): ITableHeader {
        return this._header;
    }

}
