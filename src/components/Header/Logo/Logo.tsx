
import { useStoreConfig } from "@/hooks/storeConfig/useStoreConfig"
import Image from "next/image";
import Link from "next/link";
import styles from './Logo.module.scss';
import { ILogo } from "./Logo.type";

export const Logo = async({
    classes
}: ILogo) => {
    const { getStoreConfig } = useStoreConfig();
    const { data, error } = await getStoreConfig();
    
    return <Link className={classes ?? ''} href="/">
        <Image
            className={styles.logo}
            src={error ? '/images/logo.png' : `/media/logo/${data.storeConfig.header_logo_src}`}
            width={200}
            height={50}
            alt="Briscoes logo"
            priority={true}
        />
    </Link>
}