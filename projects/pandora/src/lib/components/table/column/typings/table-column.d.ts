import { TableComponentValue } from "./table-component-value";

export interface ITableColumn<T = any> {
    handle: (item: T) => TableComponentValue;
    class?: string;
}

export type TableColumn<T = any> = ITableColumn<T> | ((item: T) => TableComponentValue);
