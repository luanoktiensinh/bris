import { MegaMenuContainer } from "./Container/Container";
import { useMegaMenu } from "./useMegaMenu";

export const MegaMenu = async () => {
    const { getData } = useMegaMenu();
    const data = await getData();
    return <MegaMenuContainer data={data} />;
};