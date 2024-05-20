/**
 * Created by duc.luu on 5/15/2024
 */
import styles from './Rating.module.scss';
import {RatingProps} from "@/components/Rating/Rating.type";
import {StartIcon} from "@/icons/star";
import {useHelpers} from "@/app/helpers";

export const Rating = ({ rating, reviewCount }: RatingProps) => {
    const { numBetween } = useHelpers();
    return <div className={styles.main}>
        {
            Array.from({length: 5}).map((_, i) => (
                <StartIcon key={i} percent={numBetween(rating - i, 0, 1)}/>
            ))
        }
        <span className={styles.review_count}>({reviewCount})</span>
    </div>;
};