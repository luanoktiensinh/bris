import { Fragment, useMemo } from "react";
import { IProductRecommendedPriceProps } from "./Price.type";
import { Price } from "@/components/Price";
import { useAppSelector } from "@/store/hooks";

export const ProductRecommendedPrice = ({
    price
}: IProductRecommendedPriceProps) => {
    const { locale, currencyCode } = useAppSelector(store => store.global);
    const prices = useMemo(() => {
        let prices: number[];
        if(!Array.isArray(price)) {
            prices = [price];
        }else {
            prices = price;
        }
        return prices
            .map((price, index) => (
                <Fragment key={price}>
                    <Price key={price} money={price} locale={locale || ""} currencyCode={currencyCode || ""}/>
                    {index < prices.length -1 ? ' - ' : ''}
                </Fragment>
            ));
    }, [price, locale, currencyCode]);
    return prices;
};