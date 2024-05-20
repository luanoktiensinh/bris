import {CategoryResponse} from "@/components/pages/Category/Category.type";

export type CategoryControlsProps = {
	data: CategoryResponse,
	page: number,
	setPage: (page: number) => void,
	pageSize: number,
	setPageSize: (pageSize: number) => void,
	sort: string,
	setSort: (sort: string) => void,
	position: 'top' | 'bottom'
}