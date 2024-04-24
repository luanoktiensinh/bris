import { useCallback, useMemo } from "react";
import { IMegaMenuItem } from "../../MegaMenu.type";

export const useMegaMenuItemDetail = (items: IMegaMenuItem[]) => {
    const limitNumberWithinRange = useCallback((num: number | string, min: number, max: number) => {
        const MIN = min ?? 1;
        const MAX = max ?? 20;
        const parsed = parseInt(num + '');
        return Math.min(Math.max(parsed, MIN), MAX);
    }, []);
    const _items = useMemo(() => {
        const totalItems = items.reduce((acc, cur) => {
            acc += 1 + (cur.children?.length ?? 0);
            return acc;
        }, 0);
        const limitCol = Math.max(Math.ceil(totalItems / 3), 10);
        const result = [[] as IMegaMenuItem[], [] as IMegaMenuItem[], [] as IMegaMenuItem[]];
        let currentCount = 0;
        let index;
        items.forEach(item => {
            currentCount += 1 + (item.children?.length ?? 0);
            index = limitNumberWithinRange(Math.ceil(currentCount / limitCol) - 1, 0, 2);
            result[index]?.push(item);
        });
        return result;
    }, [items, limitNumberWithinRange]);
    return {
        items: _items
    };
};