import { SkeletonProductCard } from '@/components/Skeleton';
import styles from './Skeleton.module.scss';
export const SkeletonProductRecommended = () => {
    return <div className={styles.main}>
        <SkeletonProductCard />
        <SkeletonProductCard />
        <SkeletonProductCard />
        <SkeletonProductCard />
    </div>;
};