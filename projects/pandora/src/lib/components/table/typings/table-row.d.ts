export interface ITableRow<T> {
    class?: string;
    onClick?: (item: T) => void;
}