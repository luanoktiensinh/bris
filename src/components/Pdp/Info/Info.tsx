"use client";
import { useMemo, useState, useEffect  } from "react";
import Image from "next/image";
import styles from './Info.module.scss';

import { Price } from "@/components/Price";
import { useAppSelector } from "@/store/hooks";

export const ImageViewer = ({
    product
}: any) => {

    const { locale, currencyCode } = useAppSelector(store => store.global);
    
    return (
        <>
            <h1 className={styles['title']}>{ product?.name }</h1>
                <div>
                    <div className={styles["original-price"]}>
                        Was <Price money={product.price_range.maximum_price?.regular_price?.value || 0} locale={locale} currencyCode={currencyCode} />
                    </div>
                    <div className={styles["discount-price"]}>
                        Now <Price money={product.price_range.maximum_price?.final_price?.value || 0} locale={locale} currencyCode={currencyCode} />
                    </div>
                </div>
        </>
    );
};

export default ImageViewer;