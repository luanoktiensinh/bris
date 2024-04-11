'use client'
import { useQuery } from "@apollo/client";
import { useMegaMenu } from "./useMegaMenu";
const MegaMenuLocal = async () => {
    const { getData } = useMegaMenu();
    const data = await getData();
    return <div>
        {JSON.stringify(data)}
    </div>
}
export default MegaMenuLocal;