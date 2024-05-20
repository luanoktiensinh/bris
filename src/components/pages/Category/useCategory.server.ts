import {
	CategoryResponse, CategoryVariableObject, FilterObject,
	UseCategoryServerProps
} from "@/components/pages/Category/Category.type";
import {GQL_GET_CATEGORY} from "@/components/pages/Category/Category.gql";
import {getClient} from "@/lib/apolloClient";
import {useCallback, useMemo} from "react";
import {mapping} from "@/components/pages/Category/Category.const";
import {useQueryVariables} from "@/components/pages/Category/useQueryVariables";

export const useServerCategory = ({ uid, searchParams, gridPerPage = 24 }: UseCategoryServerProps) => {
    const client = getClient();
	const { formatVariables } = useQueryVariables({
		gridPerPage,
		defaultFilters: {
			category_uid: [uid]
		}
	});
	const getVariableFilters = useCallback((facets: string | string[] = []) => {
		const filters: FilterObject = {};
		(Array.isArray(facets) ? facets : [facets]).forEach(facet => {
			const facetSplit = facet.split(':');
			const key = facetSplit[0];
			if(key === 'price') {
				filters[key] = facetSplit[1].split('-');
			} else {
				filters[key] = filters[key] ?? [];
				filters[key].push(facetSplit[1]);
			}
		});
		return filters;
	}, []);
	const variablesObject = useMemo(() => {
		const variables: CategoryVariableObject = {
			currentPage: parseInt(searchParams?.[mapping.currentPage] as string ?? '1'),
			sort: searchParams?.[mapping.sort] as string ?? '',
			pageSize: parseInt(searchParams?.[mapping.pageSize] as string ?? gridPerPage),
			filters: getVariableFilters(searchParams?.['facets'])
		};
		return variables;
	}, [searchParams, getVariableFilters, gridPerPage]);
	const variables = useMemo(() => {
		return formatVariables(variablesObject);
	}, [formatVariables, variablesObject]);
    const getCategory = async (): Promise<CategoryResponse> => {
        const { data } = await client.query({
            query: GQL_GET_CATEGORY,
			variables: variables.variableQuery
        });
        return data;
    };
    return {
		variables,
        getCategory
    };
};