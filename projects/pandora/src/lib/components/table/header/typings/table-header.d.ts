export interface ITableHeader {
    text: string;
    class?: string;
    onClick?: () => void;
}

export type TableHeader = ITableHeader | string;
