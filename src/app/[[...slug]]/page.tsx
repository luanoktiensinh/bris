import { CMSPage } from "@/components/pages/CMS";
import { CategoryPage } from "@/components/pages/Category";
import { ProductDetailPage } from "@/components/pages/Product";
import {
	getSEOField,
	resolveRoute,
	useResolveRoute,
} from "@/hooks/resolveURL/useResolveURL";
import { getClient } from "@/lib/apolloClient";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
	IPDPPage,
	IPLPPage,
} from "@/hooks/resolveURL/resolveURL.type";
import { useStoreConfig } from "@/hooks/storeConfig/useStoreConfig";
import {Breadcrumb} from "@/components/Breadcrumb";
import {useBreadcrumb} from "@/components/Breadcrumb/useBreadcrumb";

interface IPage {
	params: {
		slug: string[];
	};
	searchParams?: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ params }: IPage): Promise<Metadata> {
	const client = getClient();
	const { slug } = params;
	const { data, error } = await resolveRoute(client, slug?.join("/") || "/");
	return error || !data.route ? {} : getSEOField(data);
}

const Page = async ({ params, searchParams }: IPage) => {
	const { slug } = params;
	const { resolve } = useResolveRoute(slug?.join("/") || "/");
	const { getPDPBreadcrumbs, toProps } = useBreadcrumb();
	const { getStoreConfig } = useStoreConfig();
	const { data, error } = await resolve();
	const { data: configData } = await getStoreConfig();
	if (error || !data.route) return notFound();

	//Breadcrumb
	let breadcrumbs: Breadcrumb[] | undefined;
	let currentName: string = "";
	if(data.route.type !== "CMS_PAGE") {
		currentName = (data.route as IPDPPage | IPLPPage).name;
		breadcrumbs = data.route.type === "CATEGORY"
			? (data.route as IPLPPage).breadcrumbs
			: getPDPBreadcrumbs((data.route as IPDPPage).categories);
	}
	return (
		<>
			<div className="container">
				{data.route.type !== "CMS_PAGE" && <Breadcrumb items={toProps(breadcrumbs ?? [], currentName, configData.storeConfig.category_url_suffix)} /> }
			</div>
			{data.route.type === "CMS_PAGE" ? (
				<CMSPage {...data.route} />
			) : data.route.type === "CATEGORY" ? (
				<CategoryPage
					data={data.route as IPLPPage}
					searchParams={searchParams}
					gridPerPage={configData.storeConfig.grid_per_page}
				/>
			) : (
				data.route.type === "PRODUCT" && (
					<ProductDetailPage data={data.route as IPDPPage} />
				)
			)}
		</>
	);
};
export default Page;
