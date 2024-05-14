import { CMSPage } from "@/components/pages/CMS";
import { CategoryPage } from "@/components/pages/Category";
import { ProductDetailPage } from "@/components/pages/Product";
import { resolveRoute, useResolveRoute } from "@/hooks/resolveURL/useResolveURL";
import { getClient } from "@/lib/apolloClient";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface IPage {
    params: {
        slug: string[]
    }
}

export async function generateMetadata(
    { params }: IPage
): Promise<Metadata> {
    // const client = getClient();
    const { slug } = params;
    const { data, error } = await resolveRoute();
    return error || !data.route ? {} : {
        title: data.route.meta_title || data.route.title,
        description: data.route.meta_description,
        keywords: data.route.meta_keywords,
    };
}

const Page = async ({ params }: IPage) => {
    const { slug } = params;
    const { resolve } = useResolveRoute(slug?.join('/') || '/');
    const { data, error } = await resolve();
    if(error || !data.route)
        return notFound();
    return <>
        {
            data.route.type === "CMS_PAGE" ?
                <CMSPage {...data.route} /> :
                (
                    data.route.type === "CATEGORY" ? <CategoryPage {...data.route}/> : <ProductDetailPage {...data.route} />
                )

        }
    </>;
};
export default Page;