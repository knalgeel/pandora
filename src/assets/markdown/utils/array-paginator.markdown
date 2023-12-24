## ArrayPaginator

The `ArrayPaginator` class is a versatile utility for implementing pagination in Angular applications. It's designed to
paginate arrays of items and provides simple navigation between pages. This section will guide you on how to use
the `ArrayPaginator` class effectively.

### Initialization

First, import the `ArrayPaginator` class along with the necessary dependencies:

```typescript
import { Signal } from "@angular/core";
import { ArrayPaginator } from "@knalgeel/pandora";
```

Create an instance of `ArrayPaginator` by passing an array of items wrapped in a `Signal` to its constructor:

```typescript
let items: Signal<T[]> = new Signal<T[]>(yourDataArray);
let paginator = new ArrayPaginator<T>(items);
```

### Navigation

The paginator provides simple methods to navigate through the pages:

- `goto(pageNumber: number)`: Navigate to a specific page.
- `next()`: Move to the next page.
- `previous()`: Go back to the previous page.

Example usage:

```typescript
paginator.goto(3); // Navigates to page 3
paginator.next();  // Navigates to the next page
paginator.previous(); // Goes back to the previous page
```

### Accessing Data

You can access various properties to manage and display pagination data:

- `currentPage`: Returns the current page number.
- `lastPage`: Retrieves the last page number.
- `total`: Provides the total number of items.
- `loading`: Indicates if the paginator is in the process of loading data.
- `items`: Fetches the items on the current page.

### Customization

The `ArrayPaginator` class can be further customized to suit specific needs. For instance, you can modify the number of
items per page or add more sophisticated logic for loading states.
