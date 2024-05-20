import {Aggregation, FilterObject} from "@/components/pages/Category/Category.type";

export type CategoryFilterProps = {
    facets: Aggregation[],
    filter: FilterObject,
    setFilters: (filter: FilterObject) => void
}