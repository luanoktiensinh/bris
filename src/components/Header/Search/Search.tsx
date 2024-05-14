'use client';
import { SearchIcon } from '@/icons/search';
import styles from './Search.module.scss';
import { ISearch } from './Search.type';
import { useSearch } from "./useSearch";
import { debounce } from "lodash";
import { lazy } from 'react';

const SearchPopup = lazy(() => import(/* webpackChunkName: "search-popup" */ "./SearchPopup").then(mod => ({default: mod.SearchPopup})));

export const HeaderSearch = ({
    classes
}: ISearch) => {
    const { openPopup, setOpenPopup, productSuggestion, brandsSuggestion, categorySuggestion, keywordsSuggestion, setSearchTerm, searchTerm } = useSearch();

    return (
        <div className={`${styles['input-container']} ${classes ?? ''}`}>
            <input
                className={styles.input} 
                type="text"
                placeholder="What are you looking for?"
                autoComplete="off"
                onChange={debounce((e) => setSearchTerm(e.target.value), 250)}
                onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                    setOpenPopup(true);
                }}
                onBlur={() => setOpenPopup(false)}
            />
            <button className={styles['input-icon']} title="search">
                <SearchIcon />
            </button>
            {
                openPopup ? <SearchPopup productSuggestion={productSuggestion} brandsSuggestion={brandsSuggestion} categorySuggestion={categorySuggestion} keywordsSuggestion={keywordsSuggestion} /> : <></>
            }
        </div>
    );
};