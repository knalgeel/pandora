import { ITableField } from "./table-field";

export interface ITable<T = any> {
    fields: Record<string, ITableField<T>>;
    items: T[] | (() => T[]);
}
