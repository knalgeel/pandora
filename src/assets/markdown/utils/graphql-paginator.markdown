## GraphQlPaginator

The `GraphQlPaginator` class is an advanced utility designed for pagination in applications using GraphQL. It efficiently handles the loading of paginated data and provides a reactive interface for managing the pagination state. This chapter will guide you through the process of using the `GraphQlPaginator` class.

### Initial Setup

Begin by importing the `GraphQlPaginator` along with its dependencies:

```typescript
import { BehaviorSubject, Observable } from 'rxjs';
import { GraphqlPaginatorResult, GraphqlPaginatorParams, GraphQlPaginator } from '@knalgeel/pandora';
```

Create a subclass of `GraphQlPaginator` and implement the `fetch` method to define how data is retrieved:

```typescript
export class MyGraphQlPaginator<T> extends GraphQlPaginator<T> {
    protected fetch(params: GraphqlPaginatorParams): Observable<GraphqlPaginatorResult<T>> {
        // Implement data fetching logic here
    }
}
```

Instantiate the paginator with a specified page size:

```typescript
const paginator = new MyGraphQlPaginator<T>(10); // 10 items per page
paginator.init(); // Initialize the paginator
```

### Managing Pagination

Use the following methods to control pagination:

- `goto(pageNumber: number)`: Navigate to a specific page.
- `next()`: Move to the next page, if available.
- `previous()`: Go back to the previous page, if available.

Example usage:

```typescript
paginator.goto(2); // Navigate to page 2
paginator.next();  // Move to the next page
paginator.previous(); // Return to the previous page
```

### Reactive Interface

`GraphQlPaginator` provides reactive properties to observe and react to pagination changes:

- `currentPage$`: An `Observable` of the current page number.
- `loading$`: An `Observable` indicating the loading status.

These observables can be used to create dynamic UI components that react to pagination changes.

### Accessing Data

Access pagination data using the following getters:

- `currentPage`: Current page number.
- `lastPage`: The last page number based on total items and page size.
- `total`: Total number of items.
- `items`: The items on the current page.
- `loading`: Indicates if data is currently being loaded.

### Cleanup

Call the `destroy` method when the paginator is no longer needed to clean up subscriptions:

```typescript
paginator.destroy();
```