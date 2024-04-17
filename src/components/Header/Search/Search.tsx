import { SearchIcon } from '@/icons/search';
import styles from './Search.module.scss';
import { ISearch } from './Search.type';

export const HeaderSearch = ({
    classes
}: ISearch) => {
    return <div className={`${styles['input-container']} ${classes ?? ''}`}>
        <input
            className={styles.input}
            type="text"
            placeholder="What are you looking for?"
            autoComplete="off"
        />
        <button className={styles['input-icon']} title="search">
            <SearchIcon />
        </button>
    </div>
}