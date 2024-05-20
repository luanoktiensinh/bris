"use client";
import {CategoryContainerProps} from "@/components/pages/Category/Container/Container.type";
import {useCategory} from "@/components/pages/Category/useCategory";
import {CategoryFilter} from "@/components/pages/Category/Filter";
import {useAppDispatch} from "@/store/hooks";
import {useEffect, useMemo, useState} from "react";
import {setLoading} from "@/store/features/global/GlobalSlide";
import {
	CategoryResponse,
	CategoryVariableObject,
	FilterObject
} from "@/components/pages/Category/Category.type";
import {PAGE_SIZE_DEFAULT} from "@/const/category";
import styles from "./Container.module.scss";
import {CategoryProductItem} from "@/components/pages/Category/ProductItem";
import {useDidMountEffect} from "@/hooks/useDidMountEffect";
import {CategoryControls} from "@/components/pages/Category/Control";

export const CategoryContainer = ({
    uid, data: serverData, inSearchPage, filters: serverFilters
}: CategoryContainerProps) => {
    const dispatch = useAppDispatch();
    const defaultFilters = useMemo<FilterObject>(() => ({
        category_uid: [uid]
    }), [uid]);
    const { data: clientData, loading, fetch, called, previousData } = useCategory({defaultFilters });
    const data = useMemo(() => {
		return called ? (loading ? (previousData || serverData) : clientData as CategoryResponse) : serverData;
	}, [called, loading, previousData, serverData, clientData]);
	const [ showControls, setShowControls ] = useState(false);
	const [ showFilters, setShowFilters ] = useState(false);
    const [ filters, setFilters ] = useState<FilterObject>(serverFilters?.filters ?? {});
    const [ sort, setSort ] = useState(serverFilters?.sort ?? '');
    const [ page, setPage ] = useState(serverFilters?.currentPage ?? 1);
    const [ pageSize, setPageSize ] = useState(serverFilters?.pageSize ?? PAGE_SIZE_DEFAULT);
    const payload = useMemo<CategoryVariableObject>(() => {
        return {
            sort,
			currentPage: page,
            pageSize,
            filters
        };
    }, [filters, page, pageSize, sort]);
    const facets = useMemo(() => {
		return data.products.aggregations.filter(facet => inSearchPage || facet.attribute_code !== 'category_uid');
	}, [data.products.aggregations, inSearchPage]);
	useEffect(() => {
        dispatch(setLoading(loading));
    }, [dispatch, loading]);
	useDidMountEffect(() => {
		if(page === 1) {
			void fetch(payload);
		} else {
			setPage(1);
		}

	}, [filters, sort, pageSize, fetch]);
    useDidMountEffect(() => {
        void fetch(payload);
    }, [page, fetch]);
    return (
		<div className={styles.main}>
			<div className={styles.btns}>
				<button onClick={() => setShowFilters(!showFilters)}>Filter</button>
				<button onClick={() => setShowControls(!showControls)}>Sort</button>
			</div>
			<div className="row">
				<div className={showFilters ? styles.filters : styles.filters_hide}>
					{ data && <CategoryFilter facets={facets} filter={filters} setFilters={setFilters} /> }
					<div className={styles.close}>
						<button onClick={() => setShowFilters(false)}>Close</button>
					</div>
				</div>
				<div className="col-9">
					{
						data && (<>
							<div className={styles.header}>
								<div
									className={styles.total_count}>{data.products.total_count} result{data.products.total_count !== 1 && 's'}</div>
								<div className={showControls ? undefined : 'mobile-hidden'}>
									<CategoryControls {...{data, page, setPage, sort, setSort, pageSize, setPageSize}} position="top" />
								</div>
							</div>
							<div className={styles.products}>
								{
									data.products.items.map((item, index) => (
										<CategoryProductItem key={item.uid} data={item} priority={index < 4}/>
									))
								}
							</div>
							<CategoryControls {...{data, page, setPage, sort, setSort, pageSize, setPageSize}} position="bottom" />
						</>)
					}
				</div>
			</div>
		</div>
    );
};