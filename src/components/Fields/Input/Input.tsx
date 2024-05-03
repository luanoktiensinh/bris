import { IInputPros } from "./Input.type";
import styles from './Input.module.scss';
import { lazy, useCallback, useMemo } from "react";
import { useHelpers } from "@/app/helpers";
import { debounce } from "lodash";
const MinusIcon = lazy(() => import('@/icons/minus').then(mod => ({default: mod.MinusIcon})));
const PlusIcon = lazy(() => import('@/icons/plus').then(mod => ({default: mod.PlusIcon})));
export const Input = ({
    type, max, min, step, value, btnRight, 
    changeWhenBlur, 
    onChange
}: IInputPros) => {
    const { numBetween } = useHelpers();
    const numValue = useMemo(() => parseFloat((value ?? 0) + ''), [value]);
    const numMin = useMemo(() => parseFloat((min ?? -Infinity) + ''), [min]);
    const numMax = useMemo(() => parseFloat((max ?? Infinity) + ''), [max]);
    const numStep = useMemo(() => parseFloat((step ?? 1) + ''), [step]);
    const stateBtn = useMemo(() => {
        if(type !== "number") return {};
        const numValue = parseFloat(value ? `${value}` :'0');
        return {
            minus: numValue > (numMin),
            plus: numValue < (numMax),
        };
    }, [type, numMin, numMax, value]);
    const onChangeInput = useCallback((value: string | number) => {
        if(onChange) {
            if(type === "text") {
                onChange(value);
            }else {
                let numValue = parseFloat(value + '');
                numValue = numBetween(isNaN(numValue) ? 0 : numValue, numMin, numMax);
                onChange(numValue);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onChange, type, numMax, numMin]);
    
    return (
        <div className={`${styles.main} ${btnRight ? styles.btn_right : ''}`}>
            <input
                key={value}
                className={styles.input}
                type={type}
                defaultValue={value}
                min={min ?? undefined}
                max={max ?? undefined}
                step={step ?? undefined}
                onChange={debounce((e) => onChangeInput(e.target.value), 250)}
            />
            {
                type === 'number' && (<>
                    <button
                        className={styles.minus}
                        disabled={!(stateBtn.minus || undefined)}
                        onClick={() => onChangeInput(numValue - numStep)}
                    >
                        <MinusIcon />
                    </button>
                    <button
                        className={styles.plus}
                        disabled={!(stateBtn.plus || undefined)}
                        onClick={() => onChangeInput(numValue + numStep)}
                    >
                        <PlusIcon />
                    </button>
                </>)
            }
        </div>
    );
};