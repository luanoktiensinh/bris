import { CategorySortProps } from "@/components/pages/Category/Sort/Sort.type";
import { useCategorySort } from "@/components/pages/Category/Sort/useSort";

export const CategorySort = ({
	sort,
	sorts,
	isSearchPage,
	setSort,
}: CategorySortProps) => {
	const { sortItems } = useCategorySort({ sorts, isSearchPage });
	return (
		<select
			className="select"
			value={sort}
			onChange={(e) => setSort(e.target.value)}
		>
			{sortItems.map((item) => {
				const value = item.attribute + "|" + item.sortDirection;
				return (
					<option
						key={value}
						value={value}
					>
						Sort by: {item.text}
					</option>
				);
			})}
		</select>
	);
};
