
import { useStoreConfig } from "@/hooks/storeConfig/useStoreConfig";
import { ILogo } from "./Logo.type";
import { LogoContainer } from "./Container";

export const Logo = async({
    classes
}: ILogo) => {
    const { getStoreConfig } = useStoreConfig();
    const { data, error } = await getStoreConfig();
    return <LogoContainer classes={classes} data={data} error={error}/>;
};