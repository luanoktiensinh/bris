import Image from 'next/image';
import styles from './Footer.module.scss';
import Link from 'next/link';
import { IMegaMenuFooterProps } from './Footer.type';
export const MegaMenuFooter = ({
    items
}: IMegaMenuFooterProps) => {
    return (
        <div className={styles.footer}>
            {
                items.map(footer_icon => (
                    <Link href={footer_icon.link} className={styles.footer__item} key={footer_icon.name}>
                        <Image src={footer_icon.image} width={22} height={20} alt={footer_icon.name}/>
                        <span>{footer_icon.name}</span>
                    </Link>
                ))
            }
            
        </div>
    );
};