import { PandoraFilterOptions } from "./filter-item-options";
import { PandoraFilterItemType } from "./flter-type";

export type PandoraFilterItem = {
    key: string,
    label: string,
    default?: any,
    type: PandoraFilterItemType,
    options?: PandoraFilterOptions
};