## Field Definition

To effectively use the Pandora Table component, understanding how to configure table fields is crucial. Each field in
the table is defined by an `ITableField` object, which includes the header, column, and order.

### `ITableField<T>` Interface

Each table field is an object that conforms to the `ITableField<T>` interface. Here is a breakdown of its properties:

#### `header: TableHeader`

The `header` property defines the appearance and content of the column header. It can be either a string or an object of
type `ITableHeader`.

- **As String**: Simply the text to be displayed in the header.
- **As Object**: Allows for more customization, including `text` and an optional `class` for custom styling.

#### `column: TableColumn<T>`

The `column` property defines how each cell in the column will render data. It can be a function or an object of
type `ITableColumn<T>`.

- **As Function**: A function that takes an item of type `T` and returns
  a `TableComponentValue`. This function is used to dynamically render the content of each cell.
- **As Object**: Offers more customization for each cell, including a `handle` function and an
  optional `class` for custom styling.

#### `order: number`

Specifies the order in which the columns should appear. Lower numbers will appear first.
