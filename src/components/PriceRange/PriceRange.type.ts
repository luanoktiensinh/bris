export type PriceRangePros = {
	min: number,
	max: number,
	valueMin?: number,
	valueMax?: number,
	onChange: (value: number[]) => void,
};