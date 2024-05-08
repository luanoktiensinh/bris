import {Fragment, useCallback, useMemo} from "react";
import { IProductRecommendedPriceProps } from "./Price.type";
import { Price } from "@/components/Price";
import { useAppSelector } from "@/store/hooks";
import {isEqual} from "lodash";
import styles from './Price.module.scss';
export const ProductRecommendedPrice = ({
    price_range, small
}: IProductRecommendedPriceProps) => {
    const { locale, currencyCode } = useAppSelector(store => store.global);
    const getPrice = useCallback((type: "final_price" | "regular_price") => {
        return Array.from(new Set(
            [
                price_range.minimum_price?.[type]?.value,
                price_range.maximum_price?.[type]?.value,
            ]
        )).filter(Boolean);
    }, [price_range]);
    const prices = useMemo(() => {
        const wasPrice = getPrice("regular_price");
        const nowPrice = getPrice("final_price");
        return {
            now: nowPrice,
            ...(isEqual(wasPrice, nowPrice) ? {} : {
                was: wasPrice
            })
        };
    }, [getPrice]);
    const renderPrice = useCallback((type: 'was' | 'now') => {
        const currentPrice = prices[type];
        if(Array.isArray(currentPrice) && currentPrice.length) {
            return <>
                {type}&nbsp;
                {
                    currentPrice.map((price, index) => (
                        <Fragment key={price}>
                            <Price money={price ?? 0} locale={locale} currencyCode={currencyCode} />
                            {
                                index < currentPrice.length - 1 ? ' - ' : ''
                            }
                        </Fragment>
                    ))
                }
            </>;
        }
    }, [prices, locale, currencyCode]);
    const priceTypes = useMemo<(keyof typeof prices)[]>(() => (['was', 'now']), []);
    return <div className={`${styles.main} ${small ? styles.small : ''}`}>
        {
            priceTypes
                .filter(key => prices[key] !== undefined)
                .map((key) => (
                    <div key={key} className={key === 'was' ? styles.price : styles.price_now}>
                        {renderPrice(key)}
                    </div>
                ))
        }
    </div>;
    // const prices = useMemo(() => {
    //     let prices: number[];
    //     if(!Array.isArray(price)) {
    //         prices = [price];
    //     }else {
    //         prices = price;
    //     }
    //     return prices
    //         .map((price, index) => (
    //             <Fragment key={price}>
    //                 <Price key={price} money={price} locale={locale || ""} currencyCode={currencyCode || ""}/>
    //                 {index < prices.length -1 ? ' - ' : ''}
    //             </Fragment>
    //         ));
    // }, [price, locale, currencyCode]);
};