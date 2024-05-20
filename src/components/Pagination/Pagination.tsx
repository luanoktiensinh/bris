/**
 * Created by duc.luu on 5/15/2024
 */
import styles from "./Pagination.module.scss";
import { PaginationProps } from "@/components/Pagination/Pagination.type";
import { useMemo } from "react";
import { ArrowDoubleRightIcon } from "@/icons/arrow-double-right";
import { ArrowRightIcon } from "@/icons/arrow-right";

export const Pagination = ({ total, page = 1, setPage }: PaginationProps) => {
	const pages = useMemo(() => {
		return [page - 1, page, page + 1].filter(
			(_page) => _page >= 1 && _page <= total,
		);
	}, [page, total]);
	const hasPrev = useMemo(() => {
		return page > 1;
	}, [page]);
	const hasNext = useMemo(() => {
		return page < total;
	}, [page, total]);
	return (
		<div className={styles.main}>
			{hasPrev && (
				<>
					<button className={styles.arrow_prev} onClick={() => setPage(1)}>
						<ArrowDoubleRightIcon />
					</button>
					<button className={styles.arrow_prev} onClick={() => setPage(page - 1)}>
						<ArrowRightIcon />
					</button>
				</>
			)}
			{pages.map((_page) => (
				<button className={page === _page ? styles.active : undefined} key={_page} onClick={() => setPage(_page)}>
					{_page}
				</button>
			))}
			{hasNext && (
				<>
					<button onClick={() => setPage(page + 1)}>
						<ArrowRightIcon />
					</button>
					<button onClick={() => setPage(total)}>
						<ArrowDoubleRightIcon />
					</button>
				</>
			)}
		</div>
	);
};
