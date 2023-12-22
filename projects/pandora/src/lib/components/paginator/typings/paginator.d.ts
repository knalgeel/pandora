export interface Paginator<T> {
    items: T[];
    total: number;
    pageSize: number;
    currentPage: number;
    lastPage: number;
}
