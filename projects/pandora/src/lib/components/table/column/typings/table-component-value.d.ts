import { ClassType } from "../../../../../core/services/typings/class-type";

export type TableComponentValue<T extends ClassType = any> = string | number | undefined | null | {
    component: T;
    inputs: { [P in keyof InstanceType<T>]?: InstanceType<T>[P] }
}
