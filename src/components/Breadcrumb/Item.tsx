import { BreadcrumbItemProps } from "@/components/Breadcrumb/Breadcrumb.type";
import Link from "next/link";
import styles from './Breadcrumb.module.scss';

export const BreadcrumbItem = ({ item, position }: BreadcrumbItemProps) => {
	return item.url ? (
		<li
			className={styles.item}
			itemProp="itemListElement"
			itemScope
			itemType="https://schema.org/ListItem"
		>
			<Link itemProp="item" href={item.url}>
				<span itemProp="name">{item.label}</span>
			</Link>
			<meta itemProp="position" content={position + ''} />
		</li>
	) : <li className={styles.item}>{item.label}</li>;
};
