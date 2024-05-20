/**
 * Created by duc.luu on 5/17/2024
 */
import styles from "./Breadcrumb.module.scss";
import { BreadcrumbProps } from "@/components/Breadcrumb/Breadcrumb.type";
import { useMemo } from "react";
import { BreadcrumbItem } from "@/components/Breadcrumb/Item";

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
	const allItems = useMemo(
		() => [
			{ label: "Briscoes", url: "/" },
			...items,
		],
		[items],
	);
	return (
		<ul className={styles.list} itemScope itemType="https://schema.org/BreadcrumbList">
			{allItems.map((item, index) => (
				<BreadcrumbItem
					key={item.url + item.label}
					item={item}
					position={index + 1}
				/>
			))}
		</ul>
	);
};
