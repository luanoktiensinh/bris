import styles from './Skeleton.module.scss';
export const SkeletonProductCard = () => {
    return <div className={styles.main}>
        <div className={styles.skeleton + ' ' + styles['skeleton-body']}></div>
        <div className={styles.skeleton + ' ' + styles['skeleton-text']}></div>
        <div className={styles.skeleton + ' ' + styles['skeleton-text__body']}></div>
        <div className={styles.skeleton + ' ' + styles['skeleton-button']}></div>
    </div>;
};