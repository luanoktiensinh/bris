import { WishlistIcon } from '@/icons/icon-wishlist';
import styles from './Wishlist.module.scss';
import Link from 'next/link';
export const HeaderActionWishlist = () => {
    return <Link className={styles.btn} href="/wishlist">
            <WishlistIcon />
        </Link>
}