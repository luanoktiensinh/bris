import { StaticImageData } from "next/image";

export interface IImageByIntagramItemDetailsProps {
    index: number,
    items: {
        id: number;
        name: string;
        image_url: StaticImageData;
        descriptions: string;
    }[];
}