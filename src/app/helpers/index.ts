export const useHelpers = () => {
    const numBetween = (value: number, min: number = -Infinity, max: number = Infinity) => (
        Math.min(max, Math.max(min, value))
    );
    return {
        numBetween
    };
};