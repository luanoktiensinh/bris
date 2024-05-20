import {CategoryProductItemProps} from "@/components/pages/Category/ProductItem/ProductItem.type";
import styles from './ProductItem.module.scss';
import Link from "next/link";
import {useCallback, useMemo} from "react";
import Image from "next/image";
import {FullPrice} from "@/components/Price";
import {useAppDispatch} from "@/store/hooks";
import {openModal} from "@/store/features/globalModal/GlobalModalSlide";
import {PRODUCT_RECOMMENDED} from "@/components/GlobalModal/GlobalModal.const";
import {Rating} from "@/components/Rating";
import {VariantPreview} from "@/components/Product/VariantPreview";

export const CategoryProductItem = ({ data, priority }: CategoryProductItemProps) => {
    const dispatch = useAppDispatch();
    const url = useMemo(() => '/' + data.url_key + data.url_suffix, [data]);
    const showQuickView = useCallback(() => {
        dispatch(openModal({
            type: PRODUCT_RECOMMENDED,
            props: {
                sku: data.sku
            }
        }));
    }, [data , dispatch]);
    return <div className={styles.main}>
        <div className={styles.head}>
            <Link href={url} className={styles.image}>
                { data.badges.length > 0 && <div className={styles.badges}>
                    {
                        data.badges.map(badge => (
                            <div key={badge.label} className={styles.badge}>{badge.label}</div>
                        ))
                    }
                </div> }
                <Image
                    src={data.thumbnail.url}
                    alt={data.name}
                    fill
					priority={priority || undefined}
                    sizes="(min-width: 992px) 250px, (min-width: 768px) 33.3vw, 50vw"
                />
            </Link>
            <div className={styles.quick_view}>
             <button onClick={showQuickView}>Quick view</button>
            </div>
        </div>
        <Link className={styles.title} href={url} dangerouslySetInnerHTML={{__html: data.name}}/>
        <Rating reviewCount={data.review_count} rating={data.rating_summary} />
		{
			data.configurable_options?.length ? <VariantPreview classes={styles.variants} options={data.configurable_options} /> : ''
		}
        <div className={styles.price}>
            <FullPrice price_range={data.price_range} inCategory />
        </div>
    </div>;
};