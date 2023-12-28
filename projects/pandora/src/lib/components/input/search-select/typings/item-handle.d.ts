import { DynamicComponentFn } from "../../../dynamic/typings/dynamic-component";

type ItemHandle<T> = DynamicComponentFn<T> | ((item: T) => string | number);