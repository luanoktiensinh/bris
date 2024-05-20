import {useCallback} from "react";
import {CategoryVariableObject, FilterObject} from "@/components/pages/Category/Category.type";
import {mapping} from "@/components/pages/Category/Category.const";

export const useCategoryQuery = () => {
	const setQueryFilter = useCallback((query: URLSearchParams, filters: FilterObject) => {
		let keyFilter: keyof typeof filters;
		let itemFilter: string;
		let keyQuery = 'facets';
		for(keyFilter in filters) {
			if(keyFilter === "price") {
				query.set(keyQuery, `${keyFilter}:${filters[keyFilter].join('-')}`);
			} else {
				for(itemFilter of filters[keyFilter]) {
					query[query.has(keyQuery) ? 'append': 'set'](keyQuery, `${keyFilter}:${itemFilter}`);
				}
			}
		}
	}, []);
	const getQuery = useCallback((variables: CategoryVariableObject, searchParam?: URLSearchParams) => {
		const query = new URLSearchParams(searchParam);
		let allKeyQuery = [mapping.currentPage, mapping.sort, mapping.pageSize, 'facets'];
		allKeyQuery.forEach(keyQuery => {
			query.delete(keyQuery);
		});
		let key: keyof typeof variables;
		for(key in variables) {
			if(key == "filters") {
				setQueryFilter(query, variables[key]);
			} else {
				query.set(mapping[key], variables[key] + '');
			}
		}
		return query;
	}, [setQueryFilter]);
	return {
		getQuery
	};
};