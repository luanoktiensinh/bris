
import styles from './Footer.module.scss';
import { IFooterBlock } from './Footer.type';
import { useFooter } from "./useFooter";
import { FooterColumn } from './Footertem';
import { Subscribe } from "./Subscribe";
import Link from 'next/link';
import Image from 'next/image';
import cureKidImg from "@/images/curekids_white.png";
import {getTranslations} from 'next-intl/server';

export const Footer = async () => {
    const { getData } = useFooter();
    const footerData = await getData();
    const t = await getTranslations('');
    return (
        <footer className={styles.footer}>
            <Subscribe />
            <div className={styles["footer-content"]}>
                <div className={`container ${styles["container"]}`}>
                    {
                        footerData.footers.map((item : IFooterBlock, index) => (
                            <FooterColumn key={item.title} item={item}/>
                        ))
                    }
                    <ul className={styles["footer-nav"]}>
                        <li className={styles["footer-nav-item"]}>
                            <span className={`${styles["footer-nav-link"]}`}>{t('footer.weProudlySupport')}</span>
                            <Link href="/cure-kids/" className={styles["footer-logo"]}>
                                <Image src={cureKidImg.src} alt="CureKids.png" width="268" height="56" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles["footer-bottom"]}>
                <div className={`container ${styles["container"]}`}>
                    <span className={styles["copyright"]}>{t('footer.copyRight')}</span>
                    <span>|</span>
                    <Link href='#'>{t('footer.privacy')}</Link>
                    <span>|</span>
                    <Link href='#'>{t('footer.termAndConditions')}</Link>
                </div>
            </div>
        </footer>
    );
};
