export interface Paginator<T> {
    readonly currentPage: number;
    readonly lastPage: number;
    readonly total: number;
    readonly items: T[];
    readonly loading: boolean;

    goto: (page: number) => void;
    next: () => void;
    previous: () => void;
}
