import { IRoute } from "@/hooks/resolveURL/resolveURL.type";

export const ProductDetailPage = ({
    content
}: IRoute) => {
    return (
        <div dangerouslySetInnerHTML={{__html: content || ''}}></div>
    );
};