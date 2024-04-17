import { getClient } from "@/lib/apolloClient";
import tempImg1 from "@/images/pane-img1.jpg";
import tempImg2 from "@/images/pane-img2.jpg";
import tempImg3 from "@/images/pane-img3.jpg";
import tempImg4 from "@/images/pane-img4.jpg";
import tempImgMobile1 from "@/images/pane-img-mobile1.webp";
import tempImgMobile2 from "@/images/pane-img-mobile2.webp";
import tempImgMobile3 from "@/images/pane-img-mobile3.webp";
import tempImgMobile4 from "@/images/pane-img-mobile4.webp";

export const useHeroCarousel = () => {
    const tempData = {
        "carousel_id": "hero-carousel-home",
        "title": "Featured Heroes",
        "items": [
            {
                "id": 1,
                "name": "Spider-Man",
                "image_url": tempImg1,
                "image_url_mobile": tempImgMobile1,
                "description": "The friendly neighborhood Spider-Man!"
            },
            {
                "id": 2,
                "name": "Spider-Man 2",
                "image_url": tempImg2,
                "image_url_mobile": tempImgMobile2,
                "description": "Genius, billionaire, playboy, philanthropist."
            },
            {
                "id": 3,
                "name": "Spider-Man 3",
                "image_url": tempImg3,
                "image_url_mobile": tempImgMobile3,
                "description": "Amazonian warrior princess and one of the world's greatest superheroes."
            },
            {
                "id": 2,
                "name": "Spider-Man 4",
                "image_url": tempImg4,
                "image_url_mobile": tempImgMobile4,
                "description": "Come get some!"
            }
        ]
    }
    // const client = getClient();
    const getData = () => {
        // const { data } = await client.query({
        //     query: {}
        // });
        return tempData;
    }
    return {
        getData
    }
}