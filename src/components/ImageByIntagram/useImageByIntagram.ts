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
                "image_url": tempImg1,
                "descriptions": "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            },
            {
                "id": 2,
                "name": "Spider-Man 2",
                "image_url": tempImg2,
                "descriptions": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            },
            {
                "id": 3,
                "name": "Spider-Man 3",
                "image_url": tempImg3,
                "descriptions": "It has survived not only five centuries"
            },
            {
                "id": 4,
                "name": "Spider-Man 4",
                "image_url": tempImg4,
                "descriptions": "It was popularised in the 1960s with the release"
            },
            {
                "id": 5,
                "name": "Spider-Man",
                "image_url": tempImg1,
                "descriptions": "Contrary to popular belief, Lorem Ipsum is not simply random text"
            },
            {
                "id": 6,
                "name": "Spider-Man 2",
                "image_url": tempImg2,
                "descriptions": "The standard chunk of Lorem Ipsum used since the 1500s"
            },
            {
                "id": 7,
                "name": "Spider-Man 3",
                "image_url": tempImg3,
                "descriptions": "There are many variations of passages of Lorem Ipsum available"
            },
            {
                "id": 8,
                "name": "Spider-Man 4",
                "image_url": tempImg4,
                "descriptions": "Many desktop publishing packages and web page editors"
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