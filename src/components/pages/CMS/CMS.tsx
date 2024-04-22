import { IRoute } from "@/hooks/resolveURL/resolveURL.type";
import { HeroCarousel } from "@/components/HeroCarousel";

export const CMSPage = ({
    content, bottom_content
}: IRoute) => {
    return (
        <>
            <HeroCarousel />
            <div dangerouslySetInnerHTML={{__html: content}}></div>
            <div dangerouslySetInnerHTML={{__html: bottom_content}}></div>
        </>
    )
}