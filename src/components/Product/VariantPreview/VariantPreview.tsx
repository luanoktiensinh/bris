/**
 * Created by duc.luu on 5/17/2024
 */
import styles from "./VariantPreview.module.scss";
import { VariantPreviewProps } from "@/components/Product/VariantPreview/VariantPreview.type";
import { useMemo } from "react";
import Image from "next/image";
import { LIMIT_VARIANTS_PREVIEW } from "@/const/category";

export const VariantPreview = ({ options, classes }: VariantPreviewProps) => {
	const optionColor = useMemo(
		() => options.find((option) => option.attribute_code === "color"),
		[options],
	);
	if (!optionColor) return null;
	return (
		<div className={`${styles.main} ${classes ?? ''}`}>
			{optionColor.values
				.slice(0, LIMIT_VARIANTS_PREVIEW)
				.map((option, index) => (
				<div
					key={option.swatch_data.value}
					className={`${styles.item} ${option.swatch_data.value === "#ffffff" ? styles.border : ""}`}
					style={
						!option.swatch_data.thumbnail
							? { backgroundColor: option.swatch_data.value }
							: undefined
					}
				>
					{option.swatch_data.thumbnail && (
						<Image
							src={option.swatch_data.thumbnail}
							alt={option.label}
							width={20}
							height={20}
						/>
					)}
				</div>
			))}
			{optionColor.values.length > LIMIT_VARIANTS_PREVIEW && (
				<div className={`${styles.item} ${styles.border}`}>
					<span>+{optionColor.values.length - LIMIT_VARIANTS_PREVIEW}</span>
				</div>
			)}
		</div>
	);
};
