'use client';
import Image from 'next/image';
import { useImageByIntagram } from './useImageByIntagram';
import { InstagramIcon } from '@/icons/instagram-icon';
import styles from './ImageByIntagram.module.scss';

const ImageByIntagram = () => {
    const { getData } = useImageByIntagram();
    const data = getData();
    return (
        <div className={styles["shop-instagram"]}>
            <div className="container">
                <h3 className={styles["shop-instagram__title"]}>{data.title}</h3>
                <ul className={styles["instagram-images"]}>
                    {data?.items?.map((item, index) => (
                        <li key={index} className={styles["instagram-image__item"]}>
                            <Image
                                src={item.image_url}
                                alt={item.name}
                                priority={false}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}
                            />
                            <span className={styles["instagram-icon"]}><InstagramIcon /></span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ImageByIntagram;