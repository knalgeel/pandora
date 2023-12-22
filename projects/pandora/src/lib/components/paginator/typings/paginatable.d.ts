import { Paginator } from "./paginator";
import { Observable } from "rxjs";

export interface PaginatableFetchPageParams {
    page: number;
}

export interface Paginatable<T> {

    items: T[];

    pageSize: number;

    fetchPage(params: PaginatableFetchPageParams): Observable<Paginator<T>>;

}
