export interface Paginator<T> {
    readonly currentPage: number;
    readonly lastPage: number;
    readonly total: number;
    readonly items: T[];
    goto: (page: number, onFinished?: () => void) => void;
    next: () => void;
    previous: () => void;
}
