export interface IInputPros {
    value?: number | string,
    type: 'text' | 'number',
    min?: number,
    max?: number,
    step?: number,
    placeholder?: string,
    onChange?: (value: number | string) => void,
    btnRight?: boolean,
    changeWhenBlur?: boolean
}