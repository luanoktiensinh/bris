import { useResolveRoute } from "@/hooks/resolveURL/useResolveURL";
import { notFound } from "next/navigation";

interface IPage {
    params: {
        slug: string[]
    }
}
const Page = async ({ params }: IPage) => {
    // const { slug } = params;
    // const { resolve } = useResolveRoute(slug?.join('/') || '/');
    // const { data, error } = await resolve();
    // if(error || !data.route)
        // return notFound();
    return (
        <>
        </>
    )
}
export default Page;