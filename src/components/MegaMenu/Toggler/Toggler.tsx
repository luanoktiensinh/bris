'use client'

import { useState } from 'react';
import styles from './Toggler.module.scss';
export const MegaMenuToggler = () => {
    const [ isActive, setIsActive ] = useState(false);
    return <button className={isActive ? styles.main_active : styles.main} onClick={() => setIsActive(!isActive)}>
        <span className={styles.line}/>
        <span className={styles.line}/>
        <span className={styles.line}/>
    </button>
}