import { AccountIcon } from "@/icons/icon-account";
import styles from './Account.module.scss';
export const HeaderActionAccount = () => {
    return <div>
        <button className={styles.btn} title="account">
            <AccountIcon />
        </button>
    </div>;
};