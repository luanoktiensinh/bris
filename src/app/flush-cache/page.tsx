'use server'
import { revalidateTag } from "next/cache"

const Revalidate = async () => {
    revalidateTag('apollo');
}
export default Revalidate;