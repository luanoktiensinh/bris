/**
 * Created by duc.luu on 5/15/2024
 */
import styles from "./PriceRange.module.scss";
import { PriceRangePros } from "@/components/PriceRange/PriceRange.type";
import {ChangeEvent, useCallback, useEffect, useMemo, useState} from "react";
import {useHelpers} from "@/app/helpers";

export const PriceRange = ({
	min = 1,
	max = 5000,
	valueMax = max,
	valueMin = min,
	onChange,
}: PriceRangePros) => {
	const { numBetween } = useHelpers();
	const [ defaultValues, setDefaultValues ] = useState([valueMin, valueMax]);
	const onInputChange = useCallback((e: ChangeEvent<HTMLInputElement>, type: 'min' | 'max') => {
		const isMin = type === 'min';
		let value = parseFloat(e.target.value);
		const strValue = numBetween(value, isMin ? min : defaultValues[0], isMin ? defaultValues[1] : max);
		setDefaultValues([isMin ? strValue : defaultValues[0], isMin ? defaultValues[1]: strValue]);
	}, [min, max, defaultValues, numBetween]);
	const triggerChange = useCallback(() => {
		onChange(defaultValues);
	}, [defaultValues, onChange]);
	useEffect(() => {
		setDefaultValues([valueMin, valueMax]);
	}, [valueMin, valueMax]);
	return (
		<div className={styles.main}>
			<div className={styles.inputs}>
				<div className={styles.dots}>
					<div
						className={styles.dot}
						style={{ left: `${(defaultValues[0] / max) * 100}%` }}
					/>
					<div
						className={styles.dot}
						style={{ left: `${(defaultValues[1] / max) * 100}%` }}
					/>
				</div>
				<input
					type="range"
					min={min}
					max={max}
					step={1}
					value={defaultValues[0]}
					onChange={e => onInputChange(e, 'min')}
					onMouseUp={triggerChange}
					onTouchEnd={triggerChange}
					onBlur={triggerChange}
				/>
				<input
					type="range"
					min={min}
					max={max}
					step={1}
					value={defaultValues[1]}
					onChange={e => onInputChange(e, 'max')}
					onMouseUp={triggerChange}
					onTouchEnd={triggerChange}
					onBlur={triggerChange}
				/>
			</div>
			<div className={styles.values}>
				<div className={styles.value_min}>
					Min ($)
					<span>{defaultValues[0]}</span>
				</div>
				<span className={styles.to}>To</span>
				<div className={styles.value_max}>
					Max ($)
					<span>{defaultValues[1]}</span>
				</div>
			</div>
		</div>
	);
};
