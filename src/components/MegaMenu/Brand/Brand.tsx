import { useMemo } from 'react';
import { MegaMenuFooter } from '../Footer';
import styles from './Brand.module.scss';
import { IMegaMenuItemBrandsProps } from './Brand.type';
import { BrandFilter } from './Filter';
import { TopBrands } from './TopBrands';
export const MegaMenuBrand = ({
    footer_icons,
}: IMegaMenuItemBrandsProps) => {
    
    return (
        <div className={styles.main}>
            <div className="container">
                <h3 className={styles.title}>Brands</h3>
                <div className="row">
                    <div className={"col-8 " + styles.left}>
                        <BrandFilter />
                    </div>
                    <div className={"col-4 " + styles.right}>
                        <TopBrands />
                    </div>
                </div>
                <div className={styles.spacing}/>
                {footer_icons && <MegaMenuFooter
                    items={footer_icons}
                />}
            </div>
        </div>
       
    );
};