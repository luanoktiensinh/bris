'use client'
import { useQuery } from "@apollo/client";
import { GET_MEGAMENU_GQL } from "./MegaMenu.gql";
const MegaMenuLocal = () => {
    const { data, loading } = useQuery(GET_MEGAMENU_GQL);
    if(loading) return 'Loading';
    return <div>
        {JSON.stringify(data)}
    </div>
}
export default MegaMenuLocal;