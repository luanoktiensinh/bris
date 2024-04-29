import { useProductGrid } from "./useProductGrid";
import styles from './ProductGrid.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import { ProductsResponse, IProduct } from './Product.type';

const ProductGrid = async () => {
    const { getProductGridData } = useProductGrid();
    const responseData: ProductsResponse = await getProductGridData();
    const ITEM_PER_ROW = 5;
    
    return (
        <div className="container">
            <h4 className={styles.title}>{responseData.data.title}</h4>
            <div className={`${styles[`product-col-${ITEM_PER_ROW}`]} row`} >
                {
                    responseData.data.products.map((item: IProduct) => (
                        <div className={styles["product-tile"]} key={item.id}>
                            <Link className={styles["product-inner"]} href={item.url}>
                                <div className={styles.label}>
                                    {
                                        item.labels?.map((label: string, index: number) => (
                                            <span key={index}>{label}</span>
                                        ))
                                    }
                                </div>
                                <div className={styles.image}>
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={150}
                                        height={150}
                                        priority={false}
                                    />
                                    {
                                        item.imageHover &&
                                            <Image
                                                className={styles["image-hover"]}
                                                src={item.imageHover}
                                                alt={item.name}
                                                width={150}
                                                height={150}
                                                priority={false}
                                            />
                                    }
                                </div>
                                <div>
                                    <div className={styles["product-name"]}>{item.name}</div>
                                    <div>
                                        <div className={styles["original-price"]}>{item.price.original}</div>
                                        <div className={styles["discount-price"]}>{item.price.discount}</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ProductGrid;