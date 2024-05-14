import dynamic from "next/dynamic";
import { useProductGrid } from "./useCommonProductList";
import { ProductsResponse } from '../ProductGrid/Product.type';
import styles from './ProductGrid.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import { ProductGrid } from '@/components/ProductGrid';
// const ProductGrid = dynamic(() => import("@/components/ProductGrid").then(mod => mod.ProductGrid));
export interface Price {
    original: string;
    discount?: string;
}
export interface IProduct {
    id: number;
    name: string;
    price: Price;
    image: string;
    imageHover?: string;
    url: string;
    labels?: string[];
}

const CommonProductList = async () => {
    const { getProductGridData } = useProductGrid();
    const productsResponse: ProductsResponse = await getProductGridData();

    return (
        <div className="container">
            <div>
            {
                productsResponse.data.title ?
                    <h4 className={styles.title}>{productsResponse.data.title}</h4> : ""
            }
                <div className={`${styles[`product-col-5`]} row`}>
                    {
                        productsResponse.data.products.map((item: IProduct) => (
                            <div className={styles["product-tile"]} key={item.id}>
                                <Link className={styles["product-inner"]} href={item.url}>
                                    <div className={styles.label}>
                                        {
                                            item.labels?.map((label: string, index: number) => (
                                                <span key={index}>{label}</span>
                                            ))
                                        }
                                    </div>
                                    <div className={styles.image}>
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={150}
                                            height={150}
                                            priority={false}
                                        />
                                        {
                                            item.imageHover &&
                                                <Image
                                                    className={styles["image-hover"]}
                                                    src={item.imageHover}
                                                    alt={item.name}
                                                    width={150}
                                                    height={150}
                                                    priority={false}
                                                />
                                        }
                                    </div>
                                    <div>
                                        <div className={styles["product-name"]}>{item.name}</div>
                                        <div>
                                            <div className={styles["original-price"]}>{item.price.original}</div>
                                            <div className={styles["discount-price"]}>{item.price.discount}</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default CommonProductList;