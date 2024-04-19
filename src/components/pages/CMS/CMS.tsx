import { IRoute } from "@/hooks/resolveURL/resolveURL.type";

export const CMSPage = ({
    content, bottom_content
}: IRoute) => {
    return (
        <>
            <div dangerouslySetInnerHTML={{__html: content}}></div>
            <div dangerouslySetInnerHTML={{__html: bottom_content}}></div>
        </>
    )
}