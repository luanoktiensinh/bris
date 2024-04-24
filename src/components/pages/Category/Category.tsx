import { IRoute } from "@/hooks/resolveURL/resolveURL.type";

export const CategoryPage = ({
    content
}: IRoute) => {
    return (
        <div dangerouslySetInnerHTML={{__html: content || ''}}></div>
    );
};