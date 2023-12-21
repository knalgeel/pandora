import { TableHeader } from "../header/typings/table-header";
import { TableColumn } from "../column/typings/table-column";

export interface ITableField<T = any> {
    header: TableHeader;
    column: TableColumn<T>;
    order: number;
}
