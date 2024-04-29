"use client";

import Image from "next/image";
import Link from "next/link";
import { ILogoContainer } from "./Logo.type";
import styles from './Logo.module.scss';
import { useRef } from "react";
import { setCurrencyCode, setLocale } from "@/store/features/global/GlobalSlide";
import { useAppDispatch } from "@/store/hooks";

export const LogoContainer = ({
    data,
    error,
    classes
}: ILogoContainer) => {
    const dispatch = useAppDispatch();
    const init = useRef(false);
    if(!init.current) {
        dispatch(setLocale(data.storeConfig?.locale));
        dispatch(setCurrencyCode(data.currency?.base_currency_code));
        init.current = true;
    }
    return (
        <Link className={classes ?? ''} href="/">
            <Image
                className={styles.logo}
                src={error ? '/images/logo.png' : `/media/logo/${data.storeConfig?.header_logo_src}`}
                width={200}
                height={50}
                alt="Briscoes logo"
                priority={true}
            />
        </Link>
    );
};