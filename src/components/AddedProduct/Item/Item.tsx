import { AddedProductItemProps } from "./Item.type";
import styles from './Item.module.scss';
import Link from "next/link";
import Image from "next/image";
import {useCart} from "@/hooks/cart/useCart";
import {useMemo} from "react";
export const AddedProductItem = ({
    data
}: AddedProductItemProps) => {
    const { getCurrentProduct } = useCart();
    const currentProduct = useMemo(() => getCurrentProduct(data), [data]);
    const url = useMemo(() => `/${currentProduct.product.url_key}${currentProduct.product.url_suffix}`, [currentProduct]);
    return <div className={styles.main}>
        <Link href={url} className={styles.image}>
            <Image
                src={currentProduct.product.thumbnail.url}
                alt={data.product.name}
                width={0}
                height={0}
                sizes="60px"
                fill
            />
        </Link>
        <div>
            <Link className={styles.title} href={url} dangerouslySetInnerHTML={{__html: data.product.name}}/>
            <div className={styles.qty}>
                Qty: {data.quantity}
            </div>
        </div>
    </div>;
};