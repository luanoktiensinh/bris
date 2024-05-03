"use client";
import { useAppSelector } from '@/store/hooks';
import { Loading } from '../Loading';
import styles from './GlobalLoading.module.scss';
export const GlobalLoading = () => {
    const { loading } = useAppSelector(state => state.global);
    if(!loading) return null;
    return <div className={styles.main}>
        <Loading />
    </div>;
};