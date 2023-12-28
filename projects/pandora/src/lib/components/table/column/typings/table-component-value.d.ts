export type ClassType = new (...args: any[]) => any;

export type TableComponentValue<T extends ClassType = any> = string | number | undefined | null | {
    component: T;
    inputs: { [P in keyof InstanceType<T>]?: InstanceType<T>[P] }
}
