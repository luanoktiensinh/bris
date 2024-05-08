import {IStoreConfigData} from "@/hooks/storeConfig/storeConfig.type";
import {IMegaMenuResponse} from "@/components/MegaMenu/MegaMenu.type";
import {IFooterResponse} from "@/components/Footer/Footer.type";
import {IResolveRouteResponse} from "@/hooks/resolveURL/resolveURL.type";

export const StoreConfig: IStoreConfigData = {
    "storeConfig": {
        "store_code": "en_us",
        "locale": "en_US",
        "header_logo_src": "stores/1/niteco_logo.png"
    },
    "currency": {
        "base_currency_code": "USD"
    }
};

export const MegaMenu: IMegaMenuResponse = {
    "getDynamicMenu": {
        "menu_items": [
            {
                "id": 38,
                "name": "What's New-Mock",
                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/what-is-new.html",
                "children": [],
                "level": 1
            },
            {
                "id": 73,
                "name": "Woman",
                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/catalog/category/view/s/woman/id/73/",
                "children": [
                    {
                        "name": "Men",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/catalog/category/view/s/men/id/74/",
                        "id": 74,
                        "children": [],
                        "level": 2
                    }
                ],
                "level": 1
            },
            {
                "id": 55,
                "name": "Home Decor",
                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/decorating-and-accessories.html",
                "children": [
                    {
                        "name": "Curtains & Blinds",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/decorating-and-accessories/curtains-blinds.html",
                        "id": 56,
                        "children": [],
                        "level": 2
                    },
                    {
                        "name": "Accessories & Other",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/decorating-and-accessories/accessories-other.html",
                        "id": 57,
                        "children": [
                            {
                                "name": "Clothing",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/decorating-and-accessories/accessories-other/clothing.html",
                                "id": 60,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Books",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/decorating-and-accessories/accessories-other/books.html",
                                "id": 61,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Gourmet Food",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/decorating-and-accessories/accessories-other/gourmet-food.html",
                                "id": 62,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Gardening",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/decorating-and-accessories/accessories-other/gardening.html",
                                "id": 63,
                                "level": 3,
                                "children": []
                            }
                        ],
                        "level": 2
                    },
                    {
                        "name": "Kids",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/decorating-and-accessories/kids.html",
                        "id": 58,
                        "children": [],
                        "level": 2
                    },
                    {
                        "name": "Guides & Inspiration",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/decorating-and-accessories/guides-inspiration.html",
                        "id": 59,
                        "children": [],
                        "level": 2
                    },
                    {
                        "name": "DECORATING & ACCESSORIES",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/decorating-and-accessories/decorating-accessories.html",
                        "id": 64,
                        "children": [
                            {
                                "name": "[123] Furnishings",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/decorating-and-accessories/decorating-accessories/soft-furnishings.html",
                                "id": 65,
                                "level": 3,
                                "children": []
                            }
                        ],
                        "level": 2
                    }
                ],
                "level": 1
            },
            {
                "id": 11,
                "name": "Men",
                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/men.html",
                "children": [
                    {
                        "name": "Tops",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/men/tops-men.html",
                        "id": 12,
                        "children": [
                            {
                                "name": "Tees",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/men/tops-men/tees-men.html",
                                "id": 16,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Tanks",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/men/tops-men/tanks-men.html",
                                "id": 17,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "$39 Top collection",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/men/tops-men/39-top-collection.html",
                                "id": 45,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Jackets",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/men/tops-men/jackets-men.html",
                                "id": 14,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Hoodies",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/men/tops-men/hoodies-and-sweatshirts-men.html",
                                "id": 15,
                                "level": 3,
                                "children": []
                            }
                        ],
                        "level": 2
                    },
                    {
                        "name": "Bottoms",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/men/bottoms-men.html",
                        "id": 13,
                        "children": [
                            {
                                "name": "Pants",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/men/bottoms-men/pants-men.html",
                                "id": 18,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Shorts",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/men/bottoms-men/shorts-men.html",
                                "id": 19,
                                "level": 3,
                                "children": []
                            }
                        ],
                        "level": 2
                    },
                    {
                        "name": "Shoes",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/men/shoes.html",
                        "id": 46,
                        "children": [],
                        "level": 2
                    }
                ],
                "level": 1
            },
            {
                "id": 41,
                "name": "Gift Cards",
                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/gift-cards.html",
                "children": [
                    {
                        "name": "diep product",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/gift-cards/diep-product.html",
                        "id": 43,
                        "children": [],
                        "level": 2
                    }
                ],
                "level": 1
            },
            {
                "id": 68,
                "name": "Shoes",
                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/shoes.html",
                "children": [
                    {
                        "name": "Sport sneaker",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/shoes/sport-sneaker.html",
                        "id": 69,
                        "children": [],
                        "level": 2
                    },
                    {
                        "name": "High heel",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/shoes/high-heel.html",
                        "id": 70,
                        "children": [],
                        "level": 2
                    },
                    {
                        "name": "Sandals",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/shoes/sandals.html",
                        "id": 71,
                        "children": [],
                        "level": 2
                    }
                ],
                "level": 1
            },
            {
                "id": 11640,
                "name": "ecom Gifting",
                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/catalog/category/view/s/ecom-gifting/id/11640/",
                "children": [
                    {
                        "name": "Christmas Gifting 2023",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/catalog/category/view/s/christmas-gifting-2023/id/11778/",
                        "id": 11778,
                        "children": [],
                        "level": 2
                    }
                ],
                "level": 1
            },
            {
                "id": 16226,
                "name": "[146] Luggage",
                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/catalog/category/view/s/146-luggage/id/16226/",
                "children": [
                    {
                        "name": "[14615] Trolley Cases",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/catalog/category/view/s/14615-trolley-cases/id/16228/",
                        "id": 16228,
                        "children": [
                            {
                                "name": "[1461540] Flight",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/catalog/category/view/s/1461540-flight/id/16230/",
                                "id": 16230,
                                "level": 3,
                                "children": []
                            }
                        ],
                        "level": 2
                    }
                ],
                "level": 1
            },
            {
                "id": 16227,
                "name": "[150] Manchester",
                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/catalog/category/view/s/150-manchester/id/16227/",
                "children": [
                    {
                        "name": "[15060] Duvet Covers",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/catalog/category/view/s/15060-duvet-covers/id/16229/",
                        "id": 16229,
                        "children": [
                            {
                                "name": "[1506047] Hotel @ Home",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/catalog/category/view/s/1506047-hotel-at-home/id/16231/",
                                "id": 16231,
                                "level": 3,
                                "children": []
                            }
                        ],
                        "level": 2
                    }
                ],
                "level": 1
            },
            {
                "id": 16258,
                "name": "FASHION",
                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0001.html",
                "children": [
                    {
                        "name": "Top",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0001/0001-1.html",
                        "id": 16259,
                        "children": [],
                        "level": 2
                    },
                    {
                        "name": "Dresses",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0001/0001-2.html",
                        "id": 16260,
                        "children": [],
                        "level": 2
                    },
                    {
                        "name": "Denim",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0001/0001-3.html",
                        "id": 16261,
                        "children": [],
                        "level": 2
                    },
                    {
                        "name": "Knitwear",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0001/0001-4.html",
                        "id": 16262,
                        "children": [],
                        "level": 2
                    },
                    {
                        "name": "Trousers",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0001/0001-5.html",
                        "id": 16263,
                        "children": [],
                        "level": 2
                    },
                    {
                        "name": "Skirts",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0001/0001-6.html",
                        "id": 16264,
                        "children": [],
                        "level": 2
                    },
                    {
                        "name": "Jackets",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0001/0001-7.html",
                        "id": 16265,
                        "children": [],
                        "level": 2
                    },
                    {
                        "name": "Coats",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0001/0001-8.html",
                        "id": 16266,
                        "children": [],
                        "level": 2
                    },
                    {
                        "name": "Beachwear",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0001/0001-9.html",
                        "id": 16267,
                        "children": [],
                        "level": 2
                    },
                    {
                        "name": "Leaisurewear",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0001/0001-10.html",
                        "id": 16268,
                        "children": [],
                        "level": 2
                    },
                    {
                        "name": "Jumpsuits",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0001/0001-11.html",
                        "id": 16269,
                        "children": [],
                        "level": 2
                    },
                    {
                        "name": "Accessories",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0001/0001-12.html",
                        "id": 16270,
                        "children": [],
                        "level": 2
                    },
                    {
                        "name": "Bags",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0001/0001-13.html",
                        "id": 16271,
                        "children": [
                            {
                                "name": "Totes",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0001/0001-13/0001-13-1.html",
                                "id": 16272,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Crossbody Bags",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0001/0001-13/0001-13-2.html",
                                "id": 16273,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Trending Bags",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0001/0001-13/0001-13-3.html",
                                "id": 16274,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Shoulder Bags",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0001/0001-13/0001-13-4.html",
                                "id": 16275,
                                "level": 3,
                                "children": []
                            }
                        ],
                        "level": 2
                    },
                    {
                        "name": "Shoes",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0001/0001-14.html",
                        "id": 16276,
                        "children": [
                            {
                                "name": "High Heels",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0001/0001-14/0001-14-1.html",
                                "id": 16277,
                                "level": 3,
                                "children": []
                            }
                        ],
                        "level": 2
                    }
                ],
                "level": 1
            },
            {
                "id": 16278,
                "name": "FOOD",
                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0002.html",
                "children": [
                    {
                        "name": "Drinks & Snacks",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0002/0002-1.html",
                        "id": 16279,
                        "children": [
                            {
                                "name": "Health Drinks",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0002/0002-1/0002-1-1.html",
                                "id": 16280,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Fruit Juices",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0002/0002-1/0002-1-2.html",
                                "id": 16281,
                                "level": 3,
                                "children": []
                            }
                        ],
                        "level": 2
                    },
                    {
                        "name": "Salty Grocery",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0002/0002-2.html",
                        "id": 16282,
                        "children": [
                            {
                                "name": "Pizza & Pasta",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0002/0002-2/0002-2-1.html",
                                "id": 16283,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Rice, semolina & bulgur",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0002/0002-2/0002-2-2.html",
                                "id": 16284,
                                "level": 3,
                                "children": []
                            }
                        ],
                        "level": 2
                    }
                ],
                "level": 1
            },
            {
                "id": 16285,
                "name": "ELECTRONICS",
                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0003.html",
                "children": [
                    {
                        "name": "TV & Home Theater",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0003/0003-tv-home-theater.html",
                        "id": 16286,
                        "children": [
                            {
                                "name": "TVs",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0003/0003-tv-home-theater/0003-tv-home-theater-tvs.html",
                                "id": 16287,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Cables and Accessories",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0003/0003-tv-home-theater/cables-and-accessories.html",
                                "id": 16288,
                                "level": 3,
                                "children": []
                            }
                        ],
                        "level": 2
                    },
                    {
                        "name": "Audio and Video",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0003/0003-audio-video.html",
                        "id": 16289,
                        "children": [
                            {
                                "name": "Cameras and Camcorders",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0003/0003-audio-video/0003-audio-video-cameras-camcorders.html",
                                "id": 16290,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Speakers",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0003/0003-audio-video/0003-audio-video-speakers.html",
                                "id": 16291,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "MP3 Players",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0003/0003-audio-video/0003-audio-video-mp3-players.html",
                                "id": 16292,
                                "level": 3,
                                "children": []
                            }
                        ],
                        "level": 2
                    },
                    {
                        "name": "Computers and Accessories",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0003/0003-computers-accessories.html",
                        "id": 16293,
                        "children": [
                            {
                                "name": "Printers, Ink & Toner",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0003/0003-computers-accessories/printers-ink-and-toners.html",
                                "id": 16294,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Monitors",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0003/0003-computers-accessories/0003-computers-accessories-monitors.html",
                                "id": 16296,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Scanners",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0003/0003-computers-accessories/0003-computers-accessories-scanners.html",
                                "id": 16297,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Webcams",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0003/0003-computers-accessories/0003-computers-accessories-webcams.html",
                                "id": 16298,
                                "level": 3,
                                "children": []
                            }
                        ],
                        "level": 2
                    }
                ],
                "level": 1
            },
            {
                "id": 16299,
                "name": "DIY/HOME REPAIR TOOLS",
                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0004.html",
                "children": [
                    {
                        "name": "Power Tools and Accessories",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0004/powertoolsandaccessories.html",
                        "id": 16300,
                        "children": [
                            {
                                "name": "Power Tool Kits",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0004/powertoolsandaccessories/powertoolkits.html",
                                "id": 16301,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Drills",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0004/powertoolsandaccessories/drills.html",
                                "id": 16302,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Saws",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0004/powertoolsandaccessories/saws.html",
                                "id": 16303,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Accessories",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0004/powertoolsandaccessories/powertoolaccessories.html",
                                "id": 16304,
                                "level": 3,
                                "children": []
                            }
                        ],
                        "level": 2
                    }
                ],
                "level": 1
            },
            {
                "id": 16305,
                "name": "APPLIANCES",
                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0005.html",
                "children": [
                    {
                        "name": "Major Appliances",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0005/0005-1.html",
                        "id": 16306,
                        "children": [
                            {
                                "name": "Refrigerator",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0005/0005-1/0005-1-1.html",
                                "id": 16307,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Cookers",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0005/0005-1/0005-1-2.html",
                                "id": 16308,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Wine coolers",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0005/0005-1/0005-1-3.html",
                                "id": 16309,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Dishwashers",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0005/0005-1/0005-1-4.html",
                                "id": 16310,
                                "level": 3,
                                "children": []
                            }
                        ],
                        "level": 2
                    },
                    {
                        "name": "Small Appliances",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0005/0005-2.html",
                        "id": 16311,
                        "children": [
                            {
                                "name": "Kettles",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0005/0005-2/0005-2-1.html",
                                "id": 16312,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Toasters",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0005/0005-2/0005-2-2.html",
                                "id": 16313,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Blenders",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0005/0005-2/0005-2-3.html",
                                "id": 16314,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Electric juicers",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0005/0005-2/0005-2-4.html",
                                "id": 16315,
                                "level": 3,
                                "children": []
                            }
                        ],
                        "level": 2
                    },
                    {
                        "name": "Breakfast",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0005/0005-mkt-1.html",
                        "id": 16316,
                        "children": [],
                        "level": 2
                    },
                    {
                        "name": "Food preparation",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0005/0005-mkt-2.html",
                        "id": 16317,
                        "children": [],
                        "level": 2
                    }
                ],
                "level": 1
            },
            {
                "id": 16318,
                "name": "FURNITURE",
                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0006.html",
                "children": [
                    {
                        "name": "Sofas",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0006/0006-1.html",
                        "id": 16319,
                        "children": [
                            {
                                "name": "Small & 2 Seater Sofas",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0006/0006-1/0006-1-1.html",
                                "id": 16320,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "3 Seater Sofas",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0006/0006-1/0006-1-2.html",
                                "id": 16321,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "4 Seater Sofas",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0006/0006-1/0006-1-3.html",
                                "id": 16322,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Armchair",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0006/0006-1/0006-1-4.html",
                                "id": 16323,
                                "level": 3,
                                "children": []
                            }
                        ],
                        "level": 2
                    },
                    {
                        "name": "Chairs",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0006/0006-2.html",
                        "id": 16324,
                        "children": [
                            {
                                "name": "Accent Chairs",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0006/0006-2/0006-2-1.html",
                                "id": 16325,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Armchairs",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0006/0006-2/0006-2-2.html",
                                "id": 16326,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Beanbags & Pouffes",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0006/0006-2/0006-2-3.html",
                                "id": 16327,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Dining chairs",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0006/0006-2/0006-2-4.html",
                                "id": 16328,
                                "level": 3,
                                "children": []
                            }
                        ],
                        "level": 2
                    },
                    {
                        "name": "Tables",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0006/0006-3.html",
                        "id": 16329,
                        "children": [
                            {
                                "name": "Dining Tables",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0006/0006-3/0006-3-1.html",
                                "id": 16330,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Console Tables",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0006/0006-3/0006-3-2.html",
                                "id": 16331,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Desks",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0006/0006-3/0006-3-3.html",
                                "id": 16332,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Coffee Table",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0006/0006-3/tables-table-coffee.html",
                                "id": 16333,
                                "level": 3,
                                "children": []
                            }
                        ],
                        "level": 2
                    },
                    {
                        "name": "Beds",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0006/0006-4.html",
                        "id": 16334,
                        "children": [],
                        "level": 2
                    },
                    {
                        "name": "Lightning",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0006/0006-5.html",
                        "id": 16335,
                        "children": [],
                        "level": 2
                    },
                    {
                        "name": "Garden",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0006/0006-6.html",
                        "id": 16336,
                        "children": [],
                        "level": 2
                    },
                    {
                        "name": "Storage",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0006/8993.html",
                        "id": 16337,
                        "children": [
                            {
                                "name": "Media Units",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0006/8993/45875.html",
                                "id": 16338,
                                "level": 3,
                                "children": []
                            }
                        ],
                        "level": 2
                    }
                ],
                "level": 1
            },
            {
                "id": 16339,
                "name": "AUTOMOTIVE PARTS",
                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0007.html",
                "children": [
                    {
                        "name": "Tyres",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0007/0007-tires.html",
                        "id": 16340,
                        "children": [
                            {
                                "name": "Summer Tyres",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0007/0007-tires/0007-1-1.html",
                                "id": 16341,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Winter Tyres",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0007/0007-tires/0007-1-2.html",
                                "id": 16342,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "All seasons tyres",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0007/0007-tires/0007-1-3.html",
                                "id": 16343,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "4x4 tyres",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0007/0007-tires/0007-1-4.html",
                                "id": 16344,
                                "level": 3,
                                "children": []
                            }
                        ],
                        "level": 2
                    },
                    {
                        "name": "Batteries",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0007/0007-batteries.html",
                        "id": 16345,
                        "children": [
                            {
                                "name": "Leisure batteries",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0007/0007-batteries/0007-2-1.html",
                                "id": 16346,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Van batteries",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0007/0007-batteries/0007-2-2.html",
                                "id": 16347,
                                "level": 3,
                                "children": []
                            }
                        ],
                        "level": 2
                    },
                    {
                        "name": "Bulbs",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0007/0007-bulbs.html",
                        "id": 16348,
                        "children": [],
                        "level": 2
                    },
                    {
                        "name": "Brakes",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0007/0007-brakes.html",
                        "id": 16349,
                        "children": [],
                        "level": 2
                    },
                    {
                        "name": "Suspension and Shock Absorbers",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0007/0007-suspension.html",
                        "id": 16350,
                        "children": [],
                        "level": 2
                    },
                    {
                        "name": "Air Conditioning",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0007/0007-air.html",
                        "id": 16351,
                        "children": [],
                        "level": 2
                    }
                ],
                "level": 1
            },
            {
                "id": 16352,
                "name": "PHARMA",
                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0008.html",
                "children": [
                    {
                        "name": "Pain Management",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0008/008-1.html",
                        "id": 16353,
                        "children": [
                            {
                                "name": "Headaches & Migraines",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0008/008-1/008-1-1.html",
                                "id": 16354,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Period Pain",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0008/008-1/008-1-2.html",
                                "id": 16355,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Muscle & Joint Pain",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0008/008-1/008-1-3.html",
                                "id": 16356,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Skin care / Infections",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0008/008-1/008-1-4.html",
                                "id": 16357,
                                "level": 3,
                                "children": []
                            }
                        ],
                        "level": 2
                    },
                    {
                        "name": "Vitamins & Supplements",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0008/008-2.html",
                        "id": 16358,
                        "children": [
                            {
                                "name": "Women's Vitamins",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0008/008-2/008-2-1.html",
                                "id": 16359,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Children's Vitamins",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0008/008-2/008-2-2.html",
                                "id": 16362,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Men's Vitamins",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0008/008-2/008-2-3.html",
                                "id": 16363,
                                "level": 3,
                                "children": []
                            }
                        ],
                        "level": 2
                    },
                    {
                        "name": "Sleep",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0008/008-3.html",
                        "id": 16364,
                        "children": [
                            {
                                "name": "Snoring",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0008/008-3/008-3-1.html",
                                "id": 16365,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Sleep disturbance",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0008/008-3/008-3-2.html",
                                "id": 16366,
                                "level": 3,
                                "children": []
                            }
                        ],
                        "level": 2
                    },
                    {
                        "name": "Stress & Anxiety",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0008/008-4.html",
                        "id": 16367,
                        "children": [],
                        "level": 2
                    }
                ],
                "level": 1
            },
            {
                "id": 16368,
                "name": "COSMETICS",
                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0009.html",
                "children": [
                    {
                        "name": "Make-up",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0009/0009-1.html",
                        "id": 16369,
                        "children": [
                            {
                                "name": "Lips",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0009/0009-1/0009-1-1.html",
                                "id": 16370,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Eyes",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0009/0009-1/0009-1-2.html",
                                "id": 16371,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Nails",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0009/0009-1/0009-1-3.html",
                                "id": 16372,
                                "level": 3,
                                "children": []
                            }
                        ],
                        "level": 2
                    },
                    {
                        "name": "Skincare",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0009/0009-2.html",
                        "id": 16373,
                        "children": [
                            {
                                "name": "UV Protection",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0009/0009-2/0009-2-1.html",
                                "id": 16374,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Cleansers",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0009/0009-2/0009-2-2.html",
                                "id": 16375,
                                "level": 3,
                                "children": []
                            }
                        ],
                        "level": 2
                    },
                    {
                        "name": "Baby hygiene",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0009/0009-3.html",
                        "id": 16376,
                        "children": [
                            {
                                "name": "Shampoo",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0009/0009-3/0009-3-1.html",
                                "id": 16377,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Soaps and Gels",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0009/0009-3/0009-3-2.html",
                                "id": 16378,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Moisturizers",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0009/0009-3/0009-3-3.html",
                                "id": 16379,
                                "level": 3,
                                "children": []
                            },
                            {
                                "name": "Cleansing lotion",
                                "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0009/0009-3/0009-3-4.html",
                                "id": 16380,
                                "level": 3,
                                "children": []
                            }
                        ],
                        "level": 2
                    },
                    {
                        "name": "Body",
                        "link": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/0009/0009-4.html",
                        "id": 16381,
                        "children": [],
                        "level": 2
                    }
                ],
                "level": 1
            }
        ],
        "footer_icons": [
            {
                "name": "Gift Cards",
                "link": "/",
                "image": "/media/footer_icon/"
            },
            {
                "name": "Contact Us",
                "link": "/",
                "image": "/media/footer_icon/"
            },
            {
                "name": "Help & FAQ",
                "link": "/",
                "image": "/media/footer_icon/"
            },
            {
                "name": "Store Finder",
                "link": "/",
                "image": "/media/footer_icon/"
            }
        ]
    }
};

export const Footer: IFooterResponse = {
    "footers": [
        {
            "items": [
                {
                    "linktext": "Sign In-Mock",
                    "linkurl": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/customer/account/login/"
                },
                {
                    "linktext": "Register",
                    "linkurl": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/customer/account/create/"
                },
                {
                    "linktext": "Order Status",
                    "linkurl": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/about-us"
                },
                {
                    "linktext": "Guest Returns",
                    "linkurl": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/sales/guest/form/"
                }
            ],
            "title": "Account"
        },
        {
            "items": [
                {
                    "linktext": "Our Story",
                    "linkurl": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/about-us"
                },
                {
                    "linktext": "Email Signup",
                    "linkurl": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/about-us"
                },
                {
                    "linktext": "Give Back",
                    "linkurl": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/about-us"
                },
                {
                    "linktext": "Privacy Policy",
                    "linkurl": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/privacy-policy-cookie-restriction-mode"
                }
            ],
            "title": "About Us"
        },
        {
            "items": [
                {
                    "linktext": "Customer Service",
                    "linkurl": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/customer-service"
                },
                {
                    "linktext": "Contact Us",
                    "linkurl": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/about-us"
                },
                {
                    "linktext": "Order Status",
                    "linkurl": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/about-us"
                },
                {
                    "linktext": "Returns",
                    "linkurl": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/about-us"
                }
            ],
            "title": "Help"
        }
    ]
};

export const Route: IResolveRouteResponse = {
    "route": {
        "relative_url": "briscoes",
        "redirect_code": 0,
        "type": "CMS_PAGE",
        "identifier": "briscoes",
        "bottom_content": "We're sorry, an error has occurred while generating this content.",
        "content_heading": "Home Page",
        "meta_description": "Create your ideal living space with Briscoes. Huge range of bathroom, & bedroom, laundry & lounge items. Shop online at Briscoes & we’ll deliver right to your door!",
        "meta_keywords": "Homeware & Home Accessories",
        "meta_title": "Homeware & Home Accessories | Briscoes NZ",
        "page_layout": "cms-full-width",
        "title": "Briscoes Home Page ",
        "url_key": "briscoes",
        "__typename": "CmsPage"
    }
};