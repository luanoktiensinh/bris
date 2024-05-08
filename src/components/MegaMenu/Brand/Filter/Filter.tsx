import { useEffect, useState } from 'react';
import styles from './Filter.module.scss';
import { SearchIcon } from '@/icons/search';
import { useFilter } from './useFilter';
import { Loading } from '@/components/Loading';
import { debounce } from 'lodash';
import Link from 'next/link';
const CHARS = 'abcdefghijklmnopqrstuvwxyz'.split('');
export const BrandFilter = () => {
    const [ charSelected, setCharSelected ] = useState(CHARS[0]);
    const { getBrands, data, loading, aborterRef, setAborterRef } = useFilter();
    
    const [ search, setSearch ] = useState(charSelected);
    useEffect(() => {
        setSearch(charSelected);
    }, [charSelected]);
    useEffect(() => {
        // getBrands({variables: { search }});
        return () => {
            aborterRef.abort();
            setAborterRef(new AbortController());
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);
    
    return (
        <>
            <div className={styles.input__container}>
                <SearchIcon className={styles.input__icon}/>
                <input
                    className={styles.input}
                    placeholder='Search Brands'
                    onChange={debounce(($event) => setSearch($event.target.value), 150)}
                /> 
            </div>
            <div className={styles.chars}>
                {
                    CHARS.map(char => (
                        <button
                            key={char}
                            className={charSelected === char ? styles.char__active : styles.char}
                            onClick={() => setCharSelected(char)}
                        >
                            {char}
                        </button>
                    ))
                }
            </div>
            {search && <div className={styles.result}>
                {
                    loading ? <div className={styles.loading}><Loading /></div> : ( data && (<>
                        <div className={styles.result__title}>
                            { search }
                        </div>
                        { data.searchBrand.items.map((item) => (
                            <Link
                                className={styles.result__link}
                                key={item.id}
                                href={item.url_key}
                            >
                                {item.name}
                            </Link>
                        )) }
                    </>
                    ))
                }
            </div> }
        </>
    );
};