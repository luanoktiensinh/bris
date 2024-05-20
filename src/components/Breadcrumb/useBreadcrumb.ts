import {BreadcrumbItem} from "@/components/Breadcrumb/Breadcrumb.type";

export const useBreadcrumb = () => {
	const getPDPBreadcrumbs = (categories: ProductCategory[]): Breadcrumb[] => {
		const currentCategory = categories[0];
		return [
			...(currentCategory.breadcrumbs ?? []),
			{
				category_name: currentCategory.name,
				category_uid: currentCategory.uid,
				category_url_path: currentCategory.url_path
			}
		];
	};
	const toProps = (breadcrumbs: Breadcrumb[], currentName: string, suffix: string) => {
		let props: BreadcrumbItem[] = [];
		if(breadcrumbs && breadcrumbs.length > 0) {
			breadcrumbs.forEach(breadcrumb => {
				props.push({
					label: breadcrumb.category_name,
					url: `/${breadcrumb.category_url_path}${suffix}`
				});
			});
		}
		props.push({
			label: currentName
		});
		return props;
	};
	return {
		toProps,
		getPDPBreadcrumbs
	};
};