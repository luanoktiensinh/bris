import Link from 'next/link';
import styles from './Banner.module.scss';
export const HeaderBanner = () => {
    return <div className={styles.root}>
        <div className="container">
            GET $10 OFF YOUR FIRST ORDER OVER $50!* <Link href='/register'>SIGN UP NOW</Link>
        </div>
    </div>;
};