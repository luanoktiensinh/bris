import { ProductsResponse } from '../ProductGrid/Product.type';

export const useProductGrid = () => {
    const getProductGridData = () => {
        return new Promise<ProductsResponse>((resolve, reject) => {
            resolve({
                data: {
                    "title": "Hot Home Deals This Week",
                    "products": [
                        {
                            "id": 1,
                            "name": "Ninja Air Fryer Max AF160ANZ",
                            "price": {
                                "original": "Was $449.99",
                                "discount": "Now $199.99"
                            },
                            "image": "/images/productimages/briscoes/1088842_00/1088842_00_default_1.jpg",
                            "imageHover": "/images/productimages/briscoes/1088842_00/1088842_00_default_2.jpg",
                            "url": "/product/1088842/ninja-air-fryer-max-af160anz/",
                            "labels": ["HOT PRICE"]
                        },
                        {
                            "id": 2,
                            "name": "Hilton 350gsm Wool Duvet Inner",
                            "price": {
                                "original": "Was $189.99 - $299.99",
                                "discount": "Now $74.99 - $119.99"
                            },
                            "image": "/images/productimages/briscoes/1111411/1111411_default_1.jpg",
                            "imageHover": "/images/productimages/briscoes/1111411/1111411_default_2.jpg",
                            "url": "/product/1111411/hilton-350gsm-wool-duvet-inner/",
                            "labels": ["HOT PRICE", "New"]
                        },
                        {
                            "id": 3,
                            "name": "Breville Barista Express Coffee Machine BES870BSS",
                            "price": {
                                "original": "Was $1,149.99",
                                "discount": "Now $699.99"
                            },
                            "image": "/images/productimages/briscoes/1052561_00/1052561_00_default_1.jpg",
                            "imageHover": "/images/productimages/briscoes/1052561_00/1052561_00_lifestyle_1.jpg",
                            "url": "/product/1052561/breville-barista-express-coffee-machine-bes870bss/",
                            "labels": ["HOT PRICE"]
                        },
                        {
                            "id": 4,
                            "name": "KitchenAid Classic Stainless Steel Cookware Set 9 Piece",
                            "price": {
                                "original": "Was $849.99",
                                "discount": "Now $299.99"
                            },
                            "image": "/images/productimages/briscoes/1098093_00/1098093_00_default_1.jpg",
                            "imageHover": "/images/productimages/briscoes/1098093_00/1098093_00_default_2.jpg",
                            "url": "/product/1098093/kitchenaid-classic-stainless-steel-cookware-set-9-piece/",
                            "labels": ["HOT PRICE"]
                        },
                        {
                            "id": 5,
                            "name": "Habitat Fiore Pencil Pleat Curtains Pair",
                            "price": {
                                "original": "$59.99 - $119.99"
                            },
                            "image": "/images/productimages/briscoes/1099302001/1099302001_default_1.jpg?",
                            "imageHover": "/images/productimages/briscoes/1099302001/1099302001_default_2.jpg",
                            "url": "/product/1099302/habitat-fiore-pencil-pleat-curtains-pair/",
                            "labels": ["HOT PRICE", "New"]
                        },
                        {
                            "id": 6,
                            "name": "Goldair Fleece Fitted Electric Blanket King Single GFLEBKS",
                            "price": {
                                "original": "Was $199.99",
                                "discount": "Now $99.99"
                            },
                            "image": "/images/productimages/briscoes/1111437_00/1111437_00_default_1.jpg",
                            "imageHover": "/images/productimages/briscoes/1111437_00/1111437_00_default_2.jpg",
                            "url": "/product/1111437/goldair-fleece-fitted-electric-blanket-king-single-gflebks/",
                            "labels": ["HOT PRICE"]
                        },
                        {
                            "id": 7,
                            "name": "Hotel At Home Silk Standard Pillowcase",
                            "price": {
                                "original": "Was $99.99",
                                "discount": "Now $59.99"
                            },
                            "image": "/images/productimages/briscoes/1101829001/1101829001_default_1.jpg",
                            "imageHover": "/images/productimages/briscoes/1101829001/1101829001_default_2.jpg",
                            "url": "/product/1101829/urban-loft-silk-standard-pillowcase/",
                            "labels": ["HOT PRICE"]
                        },
                        {
                            "id": 8,
                            "name": "Galaxy Kids Monkeying Around Comforter Set",
                            "price": {
                                "original": "Was $129.99",
                                "discount": "Now $49.99"
                            },
                            "image": "/images/productimages/briscoes/1111792_00/1111792_00_default_1.jpg",
                            "url": "/product/1111792/galaxy-kids-monkeying-around-comforter-set/",
                            "labels": ["HOT PRICE"]
                        },
                        {
                            "id": 9,
                            "name": "De'Longhi Tasciugo AriaDry Multi Dehumidifier 16L DEXD216F",
                            "price": {
                                "original": "Was $649.99",
                                "discount": "Now $499.99"
                            },
                            "image": "/images/productimages/briscoes/1098190_00/1098190_00_default_1.jpg",
                            "imageHover": "/images/productimages/briscoes/1098190_00/1098190_00_default_2.jpg",
                            "url": "/product/1098190/delonghi-tasciugo-ariadry-multi-dehumidifier-16l-dexd216f/",
                            "labels": ["HOT PRICE"]
                        },
                        {
                            "id": 10,
                            "name": "Delonghi Radia S Oil Column Heater 2000W TRRS0920T",
                            "price": {
                                "original": "Was $249.99",
                                "discount": "Now $169.99"
                            },
                            "image": "/images/productimages/briscoes/1072443_00/1072443_00_default_1.jpg",
                            "imageHover": "/images/productimages/briscoes/1072443_00/1072443_00_default_2.jpg",
                            "url": "/product/1072443/delonghi-radia-s-oil-column-heater-2000w-trrs0920t/",
                            "labels": ["HOT PRICE"],
                        }
                    ]
                }                
            });
        });
    };
    return { getProductGridData };
};
