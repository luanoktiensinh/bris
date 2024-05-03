import styles from './Skeleton.module.scss';
import { SkeletonProductCardProps } from './Skeleton.type';
export const SkeletonProductCard = ({
    small
}: SkeletonProductCardProps) => {
    return <div className={`${styles.main} ${small ? styles.small : ''}`}>
        <div className={styles.skeleton + ' ' + styles['skeleton-body']}></div>
        <div className={styles.skeleton + ' ' + styles['skeleton-text']}></div>
        <div className={styles.skeleton + ' ' + styles['skeleton-text__body']}></div>
        <div className={styles.skeleton + ' ' + styles['skeleton-button']}></div>
    </div>;
};