import { CategoryFilterItemProps } from "@/components/pages/Category/Filter/Item/Item.type";
import styles from "./Item.module.scss";
import { ArrowRightIcon } from "@/icons/arrow-right";
import { ChangeEvent, useCallback, useState } from "react";
import { TickIcon } from "@/icons/tick";
import { PriceRange } from "@/components/PriceRange";
import { CloseIcon } from "@/icons/close";

const LIMIT = 5;

export const CategoryFilterItem = ({
	facet,
	value,
	setValue,
	defaultExpanded
}: CategoryFilterItemProps) => {
	const [expand, setExpand] = useState<boolean>(!!defaultExpanded);
	const [showMore, setShowMore] = useState<boolean>(false);
	const onChange = useCallback(
		(_value: string) => {
			if (value.includes(_value)) {
				setValue(value.filter((v) => v !== _value));
			} else {
				setValue([...value, _value]);
			}
		},
		[value, setValue],
	);
	const onChangeEvent = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			let inputValue = e.target.value;
			onChange(inputValue);
		},
		[onChange],
	);
	const onPriceRangeChange = useCallback(
		(value: number[]) => {
			setValue(value.map((v) => v + ""));
		},
		[setValue],
	);
	return (
		<div className={expand ? styles.main_expanded : styles.main}>
			<button
				className={styles.title}
				type="button"
				onClick={() => setExpand(!expand)}
			>
				<span dangerouslySetInnerHTML={{ __html: facet.label }} />
				<ArrowRightIcon />
			</button>
			<div className={styles.list}>
				{value.length > 0 && (
					<button className={styles.clear} type="button" onClick={() => setValue([])}>
						<CloseIcon /> clear
					</button>
				)}
				{facet.attribute_code === "price" ? (
					<PriceRange
						valueMin={parseInt(value[0] || "1")}
						valueMax={parseInt(value[1] || "5000")}
						min={1}
						max={5000}
						onChange={onPriceRangeChange}
					/>
				) : (
					<>
						{facet.options
							.slice(0, showMore ? Infinity : LIMIT)
							.map((option) => (
								<label
									key={option.value}
									className={styles.item}
								>
									<div className={styles.input}>
										<input
											type="checkbox"
											name={facet.attribute_code}
											value={option.value}
											checked={value.includes(
												option.value,
											)}
											onChange={onChangeEvent}
										/>
										<div className={styles.checkmark}></div>
										<TickIcon />
									</div>
									<span
										className={styles.label}
										dangerouslySetInnerHTML={{
											__html: option.label,
										}}
									/>
									<span>{option.count}</span>
								</label>
							))}
						{facet.options.length > LIMIT && (
							<button
								className={styles.more}
								onClick={() => setShowMore(!showMore)}
								type="button"
							>
								{showMore ? "less" : "more"}
							</button>
						)}
					</>
				)}
			</div>
		</div>
	);
};
