'use client';
import styles from './SocialsSharing.module.scss';
import { FacebookF } from '@/icons/facebook-f';
import { Twitter } from '@/icons/twitter';
import { Hyperlink } from '@/icons/hyperlink';
import { Email } from '@/icons/email';
import { Pinterest } from '@/icons/pinterest';


import Link from "next/link";
export const SocialsSharing = () => {
    return (
        <ul className={styles["social-sharing"]}>
            <li key="facebook" className={styles["social-sharing__icon"]}>
                <Link href="#">
                    <FacebookF />
                </Link>
            </li>
            <li key="Email" className={styles["social-sharing__icon"]}>
                <Link href="#">
                    <Email />
                </Link>
            </li>
            <li key="Twitter" className={styles["social-sharing__icon"]}>
                <Link href="#">
                    <Twitter />
                </Link>
            </li>
            <li key="Pinterest" className={styles["social-sharing__icon"]}>
                <Link href="#">
                    <Pinterest />
                </Link>
            </li>
            <li key="Hyperlink" className={styles["social-sharing__icon"]}>
                <Link href="#">
                    <Hyperlink />
                </Link>
            </li>
        </ul>
    );
};
