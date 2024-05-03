import { IProductRecommended } from "./ProductRecommended.type";

export const product: IProductRecommended[] =  [
    {
        id: 1,
        url: '#',
        title: 'Hampton & Mason Perfection Non Stick Frypan 20cm',
        price: 36.99,
        image: '/images/product/product_1.jpg',
        sku: "100000004"
    },
    {
        id: 2,
        url: '#',
        title: 'Hilton Comfort Science Cotton Medium Pillow',
        price: 27.99,
        image: '/images/product/product_2.jpg',
        attributes: [
            {
                label: 'Colour',
                name: 'color',
                items: [
                    {
                        label: 'Black',
                        value: '#000'
                    },
                    {
                        label: 'Blue',
                        value: 'blue'
                    },
                    {
                        label: 'Green',
                        value: 'green'
                    }
                ]
            }
        ],
        sku: "100000003"
    },
    {
        id: 3,
        url: '#',
        title: 'Hampton & Mason 26cm Frypan',
        price: [20, 39.99],
        image: '/images/product/product_3.jpg'
    },
    {
        id: 4,
        url: '#',
        title: 'Hampton & Mason Everyday Sienna Cutlery Set 24pc',
        price: 30,
        image: '/images/product/product_4.jpg',
        attributes: [
            {
                label: 'Colour',
                name: 'color',
                items: [
                    {
                        label: 'Black',
                        value: '#000'
                    },
                    {
                        label: 'Blue',
                        value: 'blue'
                    },
                    {
                        label: 'Green',
                        value: 'green'
                    },
                    {
                        label: 'Darkgreen',
                        value: 'darkgreen'
                    },
                    {
                        label: 'Gray',
                        value: 'gray'
                    },
                    {
                        label: 'Greenyellow',
                        value: 'greenyellow'
                    },

                ]
            },
            {
                label: 'Size',
                name: 'size',
                items: [
                    { label: 'LSG', value: 'LSG' },
                    { label: 'S', value: 'S' },
                    { label: 'M', value: 'M' },
                    { label: 'L', value: 'L' },
                ]
            }
        ]
    },
    {
        id: 5,
        url: '#',
        title: 'Royal Doulton Stirling Fitted Sheet',
        price: 39.99,
        image: '/images/product/product_2.jpg'
    }
];