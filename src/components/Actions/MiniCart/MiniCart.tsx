import styles from './MiniCart.module.scss';
import { ShoppingCartIcon } from "@/icons/icon-shopping-cart";
export const HeaderActionMiniCart = () => {
    return <div>
        <button className={styles.btn}>
            <ShoppingCartIcon />
        </button>
    </div>
}