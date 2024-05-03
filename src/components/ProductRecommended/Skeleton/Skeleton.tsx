import { SkeletonProductCard } from '@/components/Skeleton';
import styles from './Skeleton.module.scss';
import { SkeletonProps } from './Skeleton.type';
export const SkeletonProductRecommended = ({
    inMiniCart
}: SkeletonProps) => {
    return <div className={inMiniCart ? styles.main_incart : styles.main}>
        <SkeletonProductCard small={inMiniCart} />
        <SkeletonProductCard small={inMiniCart}/>
        <SkeletonProductCard small={inMiniCart}/>
        {!inMiniCart && <SkeletonProductCard />}
    </div>;
};