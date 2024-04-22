
import styles from './Footer.module.scss';
import { IFooterBlock } from './Footer.type';
import { useFooter } from "./useFooter"
import { FooterColumn } from './Footertem';
import { Subscribe } from "./Subscribe";

export const Footer = async () => {
    const { getData } = useFooter();
    const footerData = await getData();
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
                            <span className={`${styles["footer-nav-link"]}`}>We Proudly Support</span>
                            <a href="/cure-kids/" className={styles["footer-logo"]}><img src="https://www.briscoes.co.nz/globalassets/globalblocks/footer/charities/curekids_white.png" alt="CureKids.png" width="268" height="56" /></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles["footer-bottom"]}>
                <div className={`container ${styles["container"]}`}>
                    <span className={styles["copyright"]}>Copyright © 2024 Briscoes.  All Rights Reserved.</span>
                    <span>|</span>
                    <a href='#'>Privacy</a>
                    <span>|</span>
                    <a href='#'>Terms & Conditions</a>
                </div>
            </div>
        </footer>
    )
}
