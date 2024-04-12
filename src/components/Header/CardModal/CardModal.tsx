import { ICardModal } from "./CardModal.type"
import styles from './CardModal.module.scss';
import Image from "next/image";
export const CardModal = ({
    icon, title, value, classes
}: ICardModal) => {
    return <div className={`${styles.main} ${classes ?? ''}`}>
        <button className={styles.btn}>
            <Image src={icon} alt={title} width={24} height={16} />
            <div>
                <p className={styles.title}>{title}</p>
                <p className={styles.value}>{value}</p>
            </div>
        </button>
    </div>
}