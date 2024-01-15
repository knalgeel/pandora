export interface GraphqlPaginatorResult<T> {
    pageInfo: {
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        startCursor?: string;
        endCursor?: string;
    };
    totalCount: number;
    nodes: T[];
}
