import styles from './Loading.module.scss';
import { ILoadingProps } from './Loading.type';
export const Loading = ({
    center, small
}: ILoadingProps) => {
    return (
        <div className={`${center ? styles.center : styles.spinner} ${small ? styles.small : ''}`}>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    )
}