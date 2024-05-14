'use client';
import { SearchIcon } from '@/icons/search';
import styles from '../Search.module.scss';
import { ISearch, IItemSuggestion, ISearchPopupProps } from '../Search.type';
import Link from 'next/link';
import dynamic from "next/dynamic";

const SearchSuggestionProduct = dynamic(() => import(/* webpackChunkName: "search-suggestion-product" */"../SearchSuggestionProduct").then(mod => mod.SearchSuggestionProduct));

export const SearchPopup = ({ productSuggestion, brandsSuggestion, categorySuggestion, keywordsSuggestion }: ISearchPopupProps) => {

    return (
        <div className={`${styles['search-popup']}`}>
            <div className="row">
                <div className="col-5">
                        {
                            keywordsSuggestion.length > 0 ?
                            <div className={`${styles['search-suggestion']}`}>
                                <div className={`${styles['search-suggestion-title']}`}>
                                    Popular Searches
                                </div>
                                <ul>
                                    {
                                        keywordsSuggestion.map((item: IItemSuggestion, index: number) => (
                                            <li key={index} className={`${styles['search-suggestion-item']}`}>
                                                <SearchIcon />
                                                <Link href={item.url}>
                                                    { item.term }
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div> : <></>
                        }

                        {
                            categorySuggestion.length > 0 ?
                                <div className={`${styles['search-suggestion']}`}>
                                    <div className={`${styles['search-suggestion-title']}`}>
                                        Category
                                    </div>
                                    <ul>
                                        {
                                            categorySuggestion.map((item: IItemSuggestion, index: number) => (
                                                <li key={index} className={`${styles['search-suggestion-item']}`}>
                                                    <Link href={item.url}>
                                                        { item.term }
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div> : <></>
                        }

                        {
                            brandsSuggestion.length > 0 ?
                                <div className={`${styles['search-suggestion']}`}>
                                    <div className={`${styles['search-suggestion-title']}`}>
                                        Brands
                                    </div>
                                    <ul>
                                        {
                                            brandsSuggestion.map((item: IItemSuggestion, index: number) => (
                                                <li key={index} className={`${styles['search-suggestion-item']}`}>
                                                    <Link href={item.url}>
                                                        { item.term }
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul> 
                                </div> : <></>
                        }
                </div>
                <div className={`col-7 ${styles['search-suggestion-product']}`}>
                    {
                        productSuggestion.length > 0 ?
                            <div className="container">
                                <div className={`${styles['search-suggestion-title']}`}>
                                    Popular Products
                                </div>
                                <SearchSuggestionProduct products={productSuggestion} />

                                <Link href="#" className={styles["btn-see-all"]}>See all Results</Link>
                            </div>
                            : <></>
                    }
                </div>
            </div>
        </div>
    );
};

export default SearchPopup;