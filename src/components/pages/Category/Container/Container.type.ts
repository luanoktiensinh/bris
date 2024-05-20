import {CategoryResponse, CategoryVariableObject} from "@/components/pages/Category/Category.type";

export type CategoryContainerProps = {
    uid: string,
	inSearchPage?: boolean,
    data: CategoryResponse,
	filters?: CategoryVariableObject
}