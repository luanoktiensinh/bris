import { useMemo } from 'react';
import styles from './Panel.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export const HeaderPanel = () => {
    const leftItems = useMemo(() => (
        [
            { label: '$7 Standard Shipping', img: '/images/icon-panel-standard-shipping.png' },
            { label: 'Free returns', img: '/images/icon-panel-return-nit.png' },
        ]
    ), []);
    const rightItems = useMemo(() => (
        [
            { label: 'Sign up for $10 Off*', url: '/register' },
            { label: 'Store Finde', url: '/store-finder' },
            { label: 'Contact Us', url: '/about-us' },
        ]
    ), []);

    return (
        <div className={styles.root}>
            <div className="container">
                <div className={styles.container}>
                    <div className={styles.left}>
                        {
                            leftItems.map(item => (
                                <div className={styles['flex-center'] + ' ' + styles['left__item']} key={item.label}>
                                    <Image src={item.img} width='22' height='22' alt={item.label}/>
                                    <p>{item.label}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className={styles.right}>
                        {
                            rightItems.map(item => (
                                <Link href={item.url} className={styles['flex-center'] + ' ' + styles['left__item']} key={item.label}>
                                    {item.label}
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};