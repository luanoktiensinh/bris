import { useMegaMenu } from "./useMegaMenu";
const MegaMenu = async () => {
    const { getData } = useMegaMenu();
    const data = await getData();
    return <div>
        {JSON.stringify(data)}
    </div>

}
export default MegaMenu;