/**
 * Created by duc.luu on 5/16/2024
 */
import styles from './Control.module.scss';
import {CategorySort} from "@/components/pages/Category/Sort/Sort";
import {CategoryPageSize} from "@/components/pages/Category/Size";
import {Pagination} from "@/components/Pagination";
import {CategoryControlsProps} from "@/components/pages/Category/Control/Control.type";

export const CategoryControls = ({ data, page, pageSize, setPage, setPageSize, sort, setSort, position }: CategoryControlsProps) => {
	return <div className={styles.controls + ' ' + styles[position]}>
		<CategorySort sorts={data.products.sort_fields} sort={sort} setSort={setSort}/>
		<CategoryPageSize pageSize={pageSize} setPageSize={setPageSize}/>
		<div className={styles.pagination}>
			<Pagination total={data.products.page_info.total_pages} page={page} setPage={setPage}/>
		</div>
	</div>;
};