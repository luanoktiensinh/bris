import {CategoryVariableSort, SortFields} from "@/components/pages/Category/Category.type";

export type CategorySortProps = {
    isSearchPage?: boolean,
    sort: string,
    sorts: SortFields,
    setSort: (sort: string) => void
}
export type UseCategorySortProps = {
    sorts: SortFields,
    isSearchPage?: boolean
};