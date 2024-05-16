import tempImg1 from "@/images/instagram/insta1.jpg";
import tempImg2 from "@/images/instagram/insta2.jpg";
import tempImg3 from "@/images/instagram/insta3.jpg";
import tempImg4 from "@/images/instagram/insta4.jpg";

export const useImageByIntagram = () => {
    const tempData = {
        "title": "Shop Instagram",
        "items": [
            {
                "id": 1,
                "name": "Spider-Man",
                "image_url": tempImg1
            },
            {
                "id": 2,
                "name": "Spider-Man 2",
                "image_url": tempImg2
            },
            {
                "id": 3,
                "name": "Spider-Man 3",
                "image_url": tempImg3
            },
            {
                "id": 2,
                "name": "Spider-Man 4",
                "image_url": tempImg4
            }
        ]
    };
    // const client = getClient();
    const getData = () => {
        // const { data } = await client.query({
        //     query: {}
        // });
        return tempData;
    };
    return {
        getData
    };
};