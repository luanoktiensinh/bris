import { TickIcon } from '@/icons/tick';
import styles from './AddedProduct.module.scss';
import Link from 'next/link';
import { useAppSelector } from '@/store/hooks';
import { Price } from '../Price';
import { ArrowRightIcon } from '@/icons/arrow-right';
import { AddedProductProps } from './AddedProduct.type';
import { useMemo } from 'react';
import { AddedProductItem } from './Item';
export const AddedProduct = ({
    uid
}: AddedProductProps) => {
    const { data } = useAppSelector(state => state.miniCart);
    const { locale } = useAppSelector(state => state.global);
    const items = useMemo(() => {
        return data?.items.filter(item => item.product.sku === uid);
    }, [uid, data]);

    return <div className={styles.main}>
        <div className={styles.header}>
            <TickIcon className={styles.tick}/>
            Added to your cart
            {data && <Link href={'/cart'} className={styles.cart}>
                Cart ({data.total_quantity}): 
                <Price
                    money={data.prices.subtotal_including_tax.value}
                    currencyCode={data.prices.subtotal_including_tax.currency}
                    locale={locale}
                />
                <ArrowRightIcon />
            </Link>}
        </div>
        {
            !!items?.length && (
                <div className={styles.list}>
                    {
                        items.map(item => <AddedProductItem key={item.uid} data={item}/>)
                    }
                </div>
            )
        }
    </div>;
};