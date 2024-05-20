import {useCallback, useMemo} from "react";
import { UseCategorySortProps} from "@/components/pages/Category/Sort/Sort.type";
import {useAppSelector} from "@/store/hooks";

const defaultSortMethods = [
    {
        id: 'sortItem.relevance',
        text: 'Best Match',
        attribute: 'relevance',
        sortDirection: 'DESC'
    },
    {
        id: 'sortItem.priceDesc',
        text: 'Price: High to Low',
        attribute: 'price',
        sortDirection: 'DESC'
    },
    {
        id: 'sortItem.priceAsc',
        text: 'Price: Low to High',
        attribute: 'price',
        sortDirection: 'ASC'
    }
];
const defaultSortPosition = {
    id: 'sortItem.position',
    text: 'Position',
    attribute: 'position',
    sortDirection: 'ASC'
};
export const useCategorySort = ({
    isSearchPage,
    sorts
}:UseCategorySortProps) => {
    const { locale } = useAppSelector(state => state.global);
    const orderSortingList = useCallback(
        (list: ReturnType<typeof getSortMethodsFromConfig>) => {
            return list.sort((a, b) => {
                return a.text.localeCompare(b.text, locale, {
                    sensitivity: 'base'
                });
            });
        },
        [locale]
    );
    const getLabelSortMethod = (sortName: string, sortLabel: string, sortOrder: string) => {
        switch(sortName) {
            case "name":
                return `Product ${sortOrder === "ASC" ? " (A-Z)" : " (Z-A)"}`;
            case "product_published_on":
                return `${sortOrder === "ASC" ? "Oldest" : "Latest"}`;
            default:
                return sortLabel;
        }
    };
    const getSortMethodsFromConfig = useCallback(() => {
        const listSortMethods: {
            id: string,
            text: string,
            attribute: string,
            sortDirection: string
        }[] = [];
        if(sorts.options.length > 0) {
            sorts.options.forEach(method => {
                const { value, label } = method;
                if (value !== 'price' && value !== 'position') {
                    listSortMethods.push({
                        id: `sortItem.${value}`,
                        text: getLabelSortMethod(value, label, "ASC"),
                        attribute: value,
                        sortDirection: 'ASC'
                    });
                    if(value === "name" || value === "product_published_on") {
                        listSortMethods.push({
                            id: `sortItem.${value}`,
                            text: getLabelSortMethod(value, label, "DESC"),
                            attribute: value,
                            sortDirection: 'DESC'
                        });
                    }
                }
            });
        }
        return listSortMethods;
    }, [sorts]);
    const sortItems = useMemo(() => {
        const sorts = [...defaultSortMethods];
        if(!isSearchPage) {
            sorts.push(defaultSortPosition);
        }
        const sortFromConfig = getSortMethodsFromConfig();
        return sortFromConfig.length ? orderSortingList(
                [sortFromConfig, sorts].flat()
            ) : sorts;
    }, [isSearchPage, getSortMethodsFromConfig, orderSortingList]);
    return {
        sortItems
    };
};