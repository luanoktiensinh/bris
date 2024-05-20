import {useCallback} from "react";
import {
	CategoryVariable,
	CategoryVariableFilter,
	CategoryVariableObject,
	CategoryVariableSort,
	FilterObject, UseQueryVariablesProps
} from "@/components/pages/Category/Category.type";
import {cloneDeep} from "lodash";

export const useQueryVariables = ({
	defaultFilters = {},
	gridPerPage
}: UseQueryVariablesProps) => {
	const formatSort = useCallback((sort: string): CategoryVariableSort => {
		const sortSplit = sort.split("|");
		return {
			[sortSplit[0]]: sortSplit[1],
		};
	}, []);
	const cleanFilters = useCallback((filters: FilterObject) => {
		let keyFilter;
		for (keyFilter in filters) {
			if (!filters[keyFilter]?.length) {
				delete filters[keyFilter];
			}
		}
		return filters;
	}, []);
	const cleanVariables = useCallback(
		(variables: CategoryVariableObject) => {
			variables = cloneDeep(variables);
			if (variables.currentPage == 1) {
				delete variables.currentPage;
			}
			if (variables.pageSize == gridPerPage) {
				delete variables.pageSize;
			}
			if (!variables.sort) {
				delete variables.sort;
			}
			return variables;
		},
		[gridPerPage],
	);
	const mergeFilters = useCallback(
		(filters: FilterObject) => {
			const _filters = cloneDeep(filters);
			let keyDefaultFilter: string;
			for (keyDefaultFilter in defaultFilters) {
				if (_filters[keyDefaultFilter]?.length > 0) {
					_filters[keyDefaultFilter] = Array.from(
						new Set([
							..._filters[keyDefaultFilter],
							...defaultFilters[keyDefaultFilter],
						]),
					);
				} else {
					_filters[keyDefaultFilter] =
						defaultFilters[keyDefaultFilter];
				}
			}
			return cleanFilters(_filters);
		},
		[defaultFilters, cleanFilters],
	);
	const formatFilterVariables = useCallback(
		(filters: FilterObject) => {
			filters = mergeFilters(filters);
			let filterVariables: CategoryVariableFilter = {};
			let keyFilter: string;
			for (keyFilter in filters) {
				if (keyFilter === "price") {
					const prices = filters[keyFilter];
					filterVariables[keyFilter] = {
						from: prices[0],
						to: prices[1],
					};
				} else {
					filterVariables[keyFilter] = {
						in: filters[keyFilter],
					};
				}
			}
			return filterVariables;
		},
		[mergeFilters],
	);
	const formatVariables = useCallback(
		(variables: CategoryVariableObject) => {
			variables = cleanVariables(variables);
			const variableQuery: CategoryVariable = {
				...(variables.currentPage ? { currentPage: variables.currentPage } : {}),
				...(variables.sort ? { sort: formatSort(variables.sort) } : {}),
				...(variables.pageSize ? { pageSize: variables.pageSize } : {}),
				filters: formatFilterVariables(variables.filters),
			};
			return {variables, variableQuery};
		},
		[formatSort, formatFilterVariables, cleanVariables],
	);
	return {
		formatVariables,
	};
};