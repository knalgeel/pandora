export interface Paginator<T> {
    readonly currentPage: number;
    readonly lastPage: number;
    readonly total: number;
    readonly items: T[];
    init: () => void;
    destroy: () => void;
    goto: (page: number, onFinished?: () => void) => void;
    next: () => void;
    previous: () => void;
}
