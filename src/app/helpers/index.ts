export const useHelpers = () => {
    const numBetween = (value: number, min: number = -Infinity, max: number = Infinity) => (
        Math.min(max, Math.max(min, value))
    );
    const generateUniqueId = () => {
        return Date.now().toString(36) + Math.random().toString(36).slice(2);
    };
    return {
        numBetween,
        generateUniqueId
    };
};