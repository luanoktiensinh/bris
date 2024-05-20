import {
	CategoryResponse,
	CategoryVariable,
	CategoryVariableObject,
	UseCategoryProps,
} from "@/components/pages/Category/Category.type";
import { GQL_GET_CATEGORY } from "@/components/pages/Category/Category.gql";
import { useLazyQuery } from "@apollo/client";
import { useCallback } from "react";
import { useAppSelector } from "@/store/hooks";
import { useCategoryQuery } from "@/components/pages/Category/useCategoryQuery";
import {useQueryVariables} from "@/components/pages/Category/useQueryVariables";

export const useCategory = ({ defaultFilters = {} }: UseCategoryProps) => {
	const { gridPerPage } = useAppSelector((state) => state.global);
	const { getQuery } = useCategoryQuery();
	const { formatVariables } = useQueryVariables({
		gridPerPage,
		defaultFilters
	});
	const [queryCategory, { data, loading, error, called, previousData }] = useLazyQuery<
		CategoryResponse,
		CategoryVariable
	>(GQL_GET_CATEGORY, {
		variables: {
			filters: {},
		},
	});
	const pushQuery = useCallback(
		(variables: CategoryVariableObject) => {
			const query = getQuery(variables);
			window.history.pushState(null, "", `?${query.toString()}`);
		},
		[getQuery],
	);
	const fetch = useCallback(
		(variables: CategoryVariableObject) => {
			const { variables: formatedVariables, variableQuery } = formatVariables(variables);
			pushQuery(formatedVariables);
			void queryCategory({
				variables: variableQuery,
			});
		},
		[
			queryCategory,
			formatVariables,
			pushQuery,
		],
	);
	return {
		called,
		previousData,
		data,
		loading,
		error,
		fetch
	};
};
