import { AccountIcon } from "@/icons/icon-account"
import styles from './Account.module.scss';
export const HeaderActionAccount = () => {
    return <div>
        <button className={styles.btn}>
            <AccountIcon />
        </button>
    </div>
}