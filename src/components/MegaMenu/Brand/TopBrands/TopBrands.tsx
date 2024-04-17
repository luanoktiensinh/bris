import Link from 'next/link';
import styles from './TopBrands.module.scss';
import Image from 'next/image';
const brands = [
    { src: '/images/brands/breville.jpg', alt: 'breville' },
    { src: '/images/brands/delonghi.jpg', alt: 'delonghi' },
    { src: '/images/brands/goldair.jpg', alt: 'goldair' },
    { src: '/images/brands/jamie-oliver.jpg', alt: 'jamie oliver' },
    { src: '/images/brands/kitchen-aid.jpg', alt: 'kitchen aid' },
    { src: '/images/brands/panasonic.jpg', alt: 'panasonic' },
    { src: '/images/brands/nespresso.jpg', alt: 'nespresso' },
    { src: '/images/brands/samsung.jpg', alt: 'samsung' }
]
export const TopBrands = () => {
    return <div className={styles.main}>
        <div className={styles.overlay}></div>
        <h3 className={styles.title}>Our Top Brands</h3>
        <div className={styles.list}>
            {
                brands.map(brand => (
                    <Link href="/" key={brand.src} className={styles.item}>
                        <Image src={brand.src} width={169} height={103} alt={brand.alt}/>
                    </Link>
                ))
            }
        </div>
    </div>;
}