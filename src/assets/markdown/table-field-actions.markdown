## Adding Actions to Table Rows

Actions in a table row provide interactive features like editing or deleting an item. These actions are defined using the `ITableAction` interface and implemented using a special `TableActionsComponent`.

### Defining Actions

Actions are defined using the `ITableAction` interface:

- `icon`: Specifies the icon for the action.
- `label`: Text label for the action.
- `execute`: A function that will be executed when the action is triggered.

### Configuring Action Column

Include an `actions` field in your table configuration. This field uses the `TableActionsComponent` to render the actions. For each row, you can specify different actions.

Example of action field configuration:

- `header`: Set as an empty string as it's not needed for actions.
- `column`: Returns an object with `component` set to `TableActionsComponent` and `inputs` containing the actions.
