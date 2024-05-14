'use client';
import styles from './SearchSuggestionProduct.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Price } from "@/components/Price";

import { IProduct, ISearchSuggestionProductProps } from './SearchSuggestionProduct.type';
import { useAppSelector } from "@/store/hooks";

const SearchSuggestionProduct = ({ products } : ISearchSuggestionProductProps) => {
    const { locale, currencyCode } = useAppSelector(store => store.global);

    return (
        <div>
            <div className={`row`} >
                {
                    products.map((item: IProduct) => (
                        <div className={styles["product-tile"]} key={item.id}>
                            <Link className={styles["product-inner"]} href={item.url_key}>
                                <div className={styles.label}>
                                    {
                                        item.labels?.map((label: string, index: number) => (
                                            <span key={index}>{label} <br/></span>
                                        ))
                                    }
                                </div>
                                <div className={styles.image}>
                                    <Image
                                        src={item.small_image.url ?? '/'}
                                        alt={item.name}
                                        width={150}
                                        height={150}
                                        priority={false}
                                    />
                                </div>
                                <div>
                                    <div className={styles["product-name"]}>{item.name}</div>
                                    <div>
                                        <div className={styles["original-price"]}>
                                            Was <Price money={item.price_range.maximum_price?.regular_price?.value || 0} locale={locale} currencyCode={currencyCode} />
                                        </div>
                                        <div className={styles["discount-price"]}>
                                            Now <Price money={item.price_range.maximum_price?.final_price?.value || 0} locale={locale} currencyCode={currencyCode} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default SearchSuggestionProduct;