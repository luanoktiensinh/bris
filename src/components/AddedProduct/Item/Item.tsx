import { AddedProductItemProps } from "./Item.type";
import styles from './Item.module.scss';
import Link from "next/link";
import Image from "next/image";
export const AddedProductItem = ({
    data
}: AddedProductItemProps) => {
    return <div className={styles.main}>
        <Link href={data.product.url_key}>
            <Image
                className={styles.image}
                src={data.product.thumbnail.url}
                alt={data.product.name}
                width={0}
                height={0}
                sizes="60px"
                style={{
                    width: '100%',
                    height: 'auto',
                }}  
            />
        </Link>
        <div>
            <Link className={styles.title} href={data.product.url_key} dangerouslySetInnerHTML={{__html: data.product.name}}/>
            <div className={styles.qty}>
                Qty: {data.quantity}
            </div>
        </div>
    </div>;
}