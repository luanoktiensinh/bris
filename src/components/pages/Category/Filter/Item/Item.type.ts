import {Aggregation} from "@/components/pages/Category/Category.type";

export type CategoryFilterItemProps = {
    facet: Aggregation,
    value: string[],
    setValue: (value: string[]) => void,
	defaultExpanded?: boolean,
};