export interface IDynamicComponent {
    type: any;
    inputs?: any;
}

export type DynamicComponentFn<T> = (data: T) => IDynamicComponent;