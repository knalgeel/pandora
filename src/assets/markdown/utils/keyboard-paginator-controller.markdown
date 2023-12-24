## KeyboardPaginatorController

The `KeyboardPaginatorController` is a utility class that facilitates keyboard navigation for pagination. It listens for keyboard events and triggers pagination actions accordingly. This chapter will guide you on integrating and using the `KeyboardPaginatorController` in your application.

### Integration

Start by importing the `KeyboardPaginatorController`

```typescript
import { KeyboardPaginatorController } from "@knalgeel/pandora";
```

Instantiate the `KeyboardPaginatorController` by passing a paginator instance to its constructor:

```typescript
const myPaginator: Paginator<any> = // ... your paginator instance
const keyboardController = new KeyboardPaginatorController(myPaginator);
```

### Activation

To activate the keyboard controls, call the `init` method:

```typescript
keyboardController.init();
```

This will set up the necessary event listeners for keyboard navigation.

### Keyboard Navigation

Once activated, the `KeyboardPaginatorController` listens for the following keyboard events:

- Pressing the `ArrowLeft` key triggers the `previous` method of the paginator, navigating to the previous page.
- Pressing the `ArrowRight` key triggers the `next` method of the paginator, navigating to the next page.

### Event Handling

The controller intelligently ignores keyboard events if they originate from input fields like `INPUT`, `TEXTAREA`, or `SELECT`, ensuring that normal text entry and selection are not disrupted.

### Cleanup

When the controller is no longer needed, or before you destroy the component it's used in, call the `destroy` method:

```typescript
keyboardController.destroy();
```

This will remove the event listeners and prevent potential memory leaks.