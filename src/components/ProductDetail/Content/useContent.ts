import {useCallback, useMemo, useState} from "react";
import {UseProductDetailContentProps, VariantSelected} from "@/components/ProductDetail/Content/Content.type";

export const useRecommendedProductContent = ({
    variants = []
}: UseProductDetailContentProps) => {
    const [ selected, setSelected ] = useState<VariantSelected>({});
    const getCurrentVariant = useCallback((templateSelected: VariantSelected, isIncludes = false) => {
        return variants.find(variant => (
            Object.keys(templateSelected).length === variant.attributes.length &&
            variant.attributes[isIncludes ? 'some' : 'every'](attr => templateSelected[attr.code ?? ''] === attr.uid)
        ));
    }, [variants]);
    const currentVariant = useMemo(() => getCurrentVariant(selected), [selected, getCurrentVariant]);
    const selectOption = useCallback((code: string, uid: string) => {
        const tempSelected = {...selected, ...{ [code]: uid }};
        const currentVariant = getCurrentVariant(tempSelected, true);
        if(!currentVariant) {
            setSelected({
                [code]: uid,
            });
        }
        else {
            setSelected({
                ...selected,
                [code]: uid,
            });
        }
    }, [selected, getCurrentVariant]);
    return {
        selected,
        selectOption,
        currentVariant,
    };
};