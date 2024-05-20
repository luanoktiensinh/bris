import {IStoreConfigData} from "@/hooks/storeConfig/storeConfig.type";
import {IMegaMenuResponse} from "@/components/MegaMenu/MegaMenu.type";
import {IFooterResponse} from "@/components/Footer/Footer.type";
import {ICMSPage, IResolveRouteResponse} from "@/hooks/resolveURL/resolveURL.type";
import {IProductRecommendedResponse} from "@/components/ProductRecommended/ProductRecommended.type";
import {CategoryResponse} from "@/components/pages/Category/Category.type";

export const StoreConfig: IStoreConfigData = {
    "storeConfig": {
        "store_code": "en_us",
        "locale": "en_US",
        "header_logo_src": "stores/1/niteco_logo.png",
		"grid_per_page": 24,
		"category_url_suffix": ".html"
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
    } as ICMSPage
};
export const ProductRecommened: IProductRecommendedResponse = {
    "products": {
        "items": [
            {
                "uid": "MjEwNA==",
                "name": "Hotel At Home Sanctuary Throw 130x170cm",
                "small_image": {
                    "url": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/media/catalog/product/h/o/hotel_at_home_sanctuary_throw_130x170cm-prd.jpg?store=en_us&image-type=small_image"
                },
                "url_key": "hotel-at-home-sanctuary-throw-130x170cm",
                "url_suffix": ".html",
                "stock_status": "IN_STOCK",
                "sku": "100000002",
                "price_range": {
                    "maximum_price": {
                        "final_price": {
                            "value": 251.99,
                            "currency": "USD"
                        },
                        "regular_price": {
                            "value": 279.99,
                            "currency": "USD"
                        }
                    },
                    "minimum_price": {
                        "regular_price": {
                            "value": 270,
                            "currency": "USD"
                        },
                        "final_price": {
                            "value": 243,
                            "currency": "USD"
                        }
                    }
                },
                "configurable_options": [
                    {
                        "attribute_code": "color",
                        "values": [
                            {
								"label": "#53a828",
                                "swatch_data": {
                                    "value": "#53a828"
                                }
                            },
                            {
								"label": "#53a828",
                                "swatch_data": {
                                    "value": "#fa05fa"
                                }
                            },
                            {
								"label": "#53a828",
                                "swatch_data": {
                                    "value": "#a52a2a"
                                }
                            },
                            {
								"label": "#53a828",
                                "swatch_data": {
                                    "value": "#00008b"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "uid": "MjA5Nw==",
                "name": "Hotel At Home Teddy Faux Fur Cushion 45x45cm",
                "small_image": {
                    "url": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/media/catalog/product/c/a/catalogcontentdetails-1300892-800-800-75-0_0.jpg?store=en_us&image-type=small_image"
                },
                "url_key": "hotel-at-home-teddy-faux-fur-cushion-45x45cm",
                "url_suffix": ".html",
                "stock_status": "IN_STOCK",
                "sku": "1103733-01",
                "price_range": {
                    "maximum_price": {
                        "final_price": {
                            "value": 35.99,
                            "currency": "USD"
                        },
                        "regular_price": {
                            "value": 39.99,
                            "currency": "USD"
                        }
                    },
                    "minimum_price": {
                        "regular_price": {
                            "value": 39.99,
                            "currency": "USD"
                        },
                        "final_price": {
                            "value": 35.99,
                            "currency": "USD"
                        }
                    }
                }
            },
            {
                "uid": "NzI0",
                "name": "Atlas Fitness Tank",
                "small_image": {
                    "url": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/media/catalog/product/m/t/mt11-blue_main_1.jpg?store=en_us&image-type=small_image"
                },
                "url_key": "atlas-fitness-tank",
                "url_suffix": ".html",
                "stock_status": "IN_STOCK",
                "sku": "MT11",
                "price_range": {
                    "maximum_price": {
                        "final_price": {
                            "value": 18,
                            "currency": "USD"
                        },
                        "regular_price": {
                            "value": 18,
                            "currency": "USD"
                        }
                    },
                    "minimum_price": {
                        "regular_price": {
                            "value": 18,
                            "currency": "USD"
                        },
                        "final_price": {
                            "value": 18,
                            "currency": "USD"
                        }
                    }
                },
                "configurable_options": [
                    {
                        "attribute_code": "color",
                        "values": [
                            {
								"label": "#53a828",
                                "swatch_data": {
                                    "value": "#1857f7"
                                }
                            }
                        ]
                    },
                    {
                        "attribute_code": "size",
                        "values": [
                            {
								"label": "#53a828",
                                "swatch_data": {
                                    "value": "XS"
                                }
                            },
                            {
								"label": "#53a828",
                                "swatch_data": {
                                    "value": "S"
                                }
                            },
                            {
								"label": "#53a828",
                                "swatch_data": {
                                    "value": "M"
                                }
                            },
                            {
								"label": "#53a828",
                                "swatch_data": {
                                    "value": "L"
                                }
                            },
                            {
								"label": "#53a828",
                                "swatch_data": {
                                    "value": "XL"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "uid": "NTE2",
                "name": "Atomic Endurance Running Tee (Crew-Neck)",
                "small_image": {
                    "url": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/media/catalog/product/m/s/ms12-red_main_1.jpg?store=en_us&image-type=small_image"
                },
                "url_key": "atomic-endurance-running-tee-crew-neck",
                "url_suffix": ".html",
                "stock_status": "IN_STOCK",
                "sku": "MS12",
                "price_range": {
                    "maximum_price": {
                        "final_price": {
                            "value": 29,
                            "currency": "USD"
                        },
                        "regular_price": {
                            "value": 29,
                            "currency": "USD"
                        }
                    },
                    "minimum_price": {
                        "regular_price": {
                            "value": 29,
                            "currency": "USD"
                        },
                        "final_price": {
                            "value": 29,
                            "currency": "USD"
                        }
                    }
                },
                "configurable_options": [
                    {
                        "attribute_code": "color",
                        "values": [
                            {
								"label": "#53a828",
                                "swatch_data": {
                                    "value": "#000000"
                                }
                            },
                            {
								"label": "#53a828",
                                "swatch_data": {
                                    "value": "#1857f7"
                                }
                            },
                            {
								"label": "#53a828",
                                "swatch_data": {
                                    "value": "#ff0000"
                                }
                            }
                        ]
                    },
                    {
                        "attribute_code": "size",
                        "values": [
                            {
								"label": "#53a828",
                                "swatch_data": {
                                    "value": "XS"
                                }
                            },
                            {
								"label": "#53a828",
                                "swatch_data": {
                                    "value": "S"
                                }
                            },
                            {
								"label": "#53a828",
                                "swatch_data": {
                                    "value": "M"
                                }
                            },
                            {
								"label": "#53a828",
                                "swatch_data": {
                                    "value": "L"
                                }
                            },
                            {
								"label": "#53a828",
                                "swatch_data": {
                                    "value": "XL"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "uid": "NTAw",
                "name": "Atomic Endurance Running Tee (V-neck)",
                "small_image": {
                    "url": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/media/catalog/product/m/s/ms11-green_main_1.jpg?store=en_us&image-type=small_image"
                },
                "url_key": "atomic-endurance-running-tee-v-neck",
                "url_suffix": ".html",
                "stock_status": "IN_STOCK",
                "sku": "MS11",
                "price_range": {
                    "maximum_price": {
                        "final_price": {
                            "value": 28,
                            "currency": "USD"
                        },
                        "regular_price": {
                            "value": 28,
                            "currency": "USD"
                        }
                    },
                    "minimum_price": {
                        "regular_price": {
                            "value": 28,
                            "currency": "USD"
                        },
                        "final_price": {
                            "value": 28,
                            "currency": "USD"
                        }
                    }
                },
                "configurable_options": [
                    {
                        "attribute_code": "color",
                        "values": [
                            {
								"label": "#53a828",
                                "swatch_data": {
                                    "value": "#1857f7"
                                }
                            },
                            {
								"label": "#53a828",
                                "swatch_data": {
                                    "value": "#53a828"
                                }
                            },
                            {
								"label": "#53a828",
                                "swatch_data": {
                                    "value": "#ffd500"
                                }
                            }
                        ]
                    },
                    {
                        "attribute_code": "size",
                        "values": [
                            {
								"label": "#53a828",
                                "swatch_data": {
                                    "value": "XS"
                                }
                            },
                            {
								"label": "#53a828",
                                "swatch_data": {
                                    "value": "S"
                                }
                            },
                            {
								"label": "#53a828",
                                "swatch_data": {
                                    "value": "M"
                                }
                            },
                            {
								"label": "#53a828",
                                "swatch_data": {
                                    "value": "L"
                                }
                            },
                            {
								"label": "#53a828",
                                "swatch_data": {
                                    "value": "XL"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "uid": "MjEwNQ==",
                "name": "Hote @ Home Isaballa Cushion 45x45cm",
                "small_image": {
                    "url": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/media/catalog/product/h/o/hote_home_isaballa_cushion_45x45cm-1.jpg?store=en_us&image-type=small_image"
                },
                "url_key": "hote-at-home-isaballa-cushion-45x45cm",
                "url_suffix": ".html",
                "stock_status": "IN_STOCK",
                "sku": "100000003",
                "price_range": {
                    "maximum_price": {
                        "final_price": {
                            "value": 19.99,
                            "currency": "USD"
                        },
                        "regular_price": {
                            "value": 39.99,
                            "currency": "USD"
                        }
                    },
                    "minimum_price": {
                        "regular_price": {
                            "value": 39.99,
                            "currency": "USD"
                        },
                        "final_price": {
                            "value": 19.99,
                            "currency": "USD"
                        }
                    }
                }
            },
            {
                "uid": "MjA0Nw==",
                "name": "Luma Mailed Gift Card",
                "small_image": {
                    "url": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/media/catalog/product/g/i/gift-card-physical-custom.jpg?store=en_us&image-type=small_image"
                },
                "url_key": "luma-mailed-gift-card",
                "url_suffix": ".html",
                "stock_status": "IN_STOCK",
                "sku": "243-MB04",
                "price_range": {
                    "maximum_price": {
                        "final_price": {
                            "value": 0,
                            "currency": "USD"
                        },
                        "regular_price": {
                            "value": 0,
                            "currency": "USD"
                        }
                    },
                    "minimum_price": {
                        "regular_price": {
                            "value": 0,
                            "currency": "USD"
                        },
                        "final_price": {
                            "value": 0,
                            "currency": "USD"
                        }
                    }
                }
            },
            {
                "uid": "MTE1Mg==",
                "name": "Cassia Funnel Sweatshirt",
                "small_image": {
                    "url": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/media/catalog/product/w/h/wh08-white_main_1.jpg?store=en_us&image-type=small_image"
                },
                "url_key": "cassia-funnel-sweatshirt",
                "url_suffix": ".html",
                "stock_status": "IN_STOCK",
                "sku": "WH08",
                "price_range": {
                    "maximum_price": {
                        "final_price": {
                            "value": 48,
                            "currency": "USD"
                        },
                        "regular_price": {
                            "value": 48,
                            "currency": "USD"
                        }
                    },
                    "minimum_price": {
                        "regular_price": {
                            "value": 48,
                            "currency": "USD"
                        },
                        "final_price": {
                            "value": 48,
                            "currency": "USD"
                        }
                    }
                },
                "configurable_options": [
                    {
                        "attribute_code": "color",
                        "values": [
                            {
								"label": "#53a828",
                                "swatch_data": {
                                    "value": "#eb6703"
                                }
                            },
                            {
								"label": "#53a828",
                                "swatch_data": {
                                    "value": "#ef3dff"
                                }
                            },
                            {
								"label": "#53a828",
                                "swatch_data": {
                                    "value": "#ffffff"
                                }
                            }
                        ]
                    },
                    {
                        "attribute_code": "size",
                        "values": [
                            {
								"label": "#53a828",
                                "swatch_data": {
                                    "value": "XS"
                                }
                            },
                            {
								"label": "#53a828",
                                "swatch_data": {
                                    "value": "S"
                                }
                            },
                            {
								"label": "#53a828",
                                "swatch_data": {
                                    "value": "M"
                                }
                            },
                            {
								"label": "#53a828",
                                "swatch_data": {
                                    "value": "L"
                                }
                            },
                            {
								"label": "#53a828",
                                "swatch_data": {
                                    "value": "XL"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "uid": "MjEzNg==",
                "name": "Configuration Training sneaker ",
                "small_image": {
                    "url": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/media/catalog/product/d/o/download_4_.jpg?store=en_us&image-type=small_image"
                },
                "url_key": "training-sneaker-3",
                "url_suffix": ".html",
                "stock_status": "IN_STOCK",
                "sku": "TS3-001",
                "price_range": {
                    "maximum_price": {
                        "final_price": {
                            "value": 100,
                            "currency": "USD"
                        },
                        "regular_price": {
                            "value": 100,
                            "currency": "USD"
                        }
                    },
                    "minimum_price": {
                        "regular_price": {
                            "value": 100,
                            "currency": "USD"
                        },
                        "final_price": {
                            "value": 100,
                            "currency": "USD"
                        }
                    }
                }
            },
        ]
    }
};

export const Category: CategoryResponse = {
	"products": {
		"sort_fields": {
			"default": "product_published_on",
			"options": [
				{
					"label": "Position",
					"value": "position"
				},
				{
					"label": "Product Name",
					"value": "name"
				},
				{
					"label": "Price",
					"value": "price"
				},
				{
					"label": "SAP Category",
					"value": "SAP_Category"
				},
				{
					"label": "Published On",
					"value": "product_published_on"
				},
				{
					"label": "Badge",
					"value": "badge"
				}
			]
		},
		"aggregations": [
			{
				"label": "Price",
				"count": 8,
				"attribute_code": "price",
				"options": [
					{
						"label": "0-15",
						"value": "0_15",
						"count": 19
					},
					{
						"label": "15-20",
						"value": "15_20",
						"count": 11
					},
					{
						"label": "20-25",
						"value": "20_25",
						"count": 13
					},
					{
						"label": "25-30",
						"value": "25_30",
						"count": 14
					},
					{
						"label": "30-40",
						"value": "30_40",
						"count": 20
					},
					{
						"label": "40-60",
						"value": "40_60",
						"count": 16
					},
					{
						"label": "60-100",
						"value": "60_100",
						"count": 17
					},
					{
						"label": "100-490",
						"value": "100_490",
						"count": 18
					}
				],
				"position": 0
			},
			{
				"label": "Category",
				"count": 127,
				"attribute_code": "category_uid",
				"options": [
					{
						"label": "Home Decor",
						"value": "MTE0",
						"count": 128
					},
					{
						"label": "Briscoes",
						"value": "NzY=",
						"count": 117
					},
					{
						"label": "[175] Home Decor",
						"value": "NDY=",
						"count": 58
					},
					{
						"label": "[113] Giftware",
						"value": "MTY5",
						"count": 40
					},
					{
						"label": "Hotel stuffs",
						"value": "Nzc=",
						"count": 35
					},
					{
						"label": "Soft Furnishings",
						"value": "NDc=",
						"count": 29
					},
					{
						"label": "New In",
						"value": "MTY3",
						"count": 26
					},
					{
						"label": "Bed",
						"value": "MTE2OTk=",
						"count": 23
					},
					{
						"label": "Cushions",
						"value": "MTEw",
						"count": 22
					},
					{
						"label": "Christmas",
						"value": "NjI=",
						"count": 18
					},
					{
						"label": "Ornamental",
						"value": "MTM1",
						"count": 17
					},
					{
						"label": "[11320] Ornamental",
						"value": "MTcw",
						"count": 17
					},
					{
						"label": "[17510] Clocks",
						"value": "Nzg=",
						"count": 16
					},
					{
						"label": "Clocks & Watches",
						"value": "MTI2",
						"count": 16
					},
					{
						"label": "[11305] Aroma",
						"value": "MTYzMQ==",
						"count": 16
					},
					{
						"label": "Candles",
						"value": "MTI1",
						"count": 15
					},
					{
						"label": "Wall",
						"value": "MTUz",
						"count": 15
					},
					{
						"label": "[1751020] NXT",
						"value": "MzQ4Mw==",
						"count": 14
					},
					{
						"label": "[175102005] NXT Wall clocks",
						"value": "OTcxMw==",
						"count": 13
					},
					{
						"label": "Planters",
						"value": "MTUw",
						"count": 12
					},
					{
						"label": "Sale",
						"value": "MTE3MTA=",
						"count": 12
					},
					{
						"label": "Clearance",
						"value": "MTY4",
						"count": 10
					},
					{
						"label": "Living & Giving",
						"value": "MTE3MTM=",
						"count": 10
					},
					{
						"label": "Rugs & Mats",
						"value": "MTM5",
						"count": 9
					},
					{
						"label": "All Aroma and Candles",
						"value": "MTQ0",
						"count": 9
					},
					{
						"label": "Candle Holders",
						"value": "MTQ1",
						"count": 9
					},
					{
						"label": "[1132005] No Brand",
						"value": "MTg1Mg==",
						"count": 8
					},
					{
						"label": "Curtains & Blinds",
						"value": "MTE3",
						"count": 7
					},
					{
						"label": "Fragrance",
						"value": "MTI4",
						"count": 7
					},
					{
						"label": "[1130560] Twill & Co",
						"value": "MTA0OA==",
						"count": 6
					},
					{
						"label": "[12327] Door Mats",
						"value": "MTY2OA==",
						"count": 6
					},
					{
						"label": "[17520] Mirrors",
						"value": "ODM=",
						"count": 5
					},
					{
						"label": "Mirrors",
						"value": "MTMy",
						"count": 5
					},
					{
						"label": "Ornaments",
						"value": "MTQ5",
						"count": 5
					},
					{
						"label": "Thermal Curtains",
						"value": "MTY2",
						"count": 5
					},
					{
						"label": "[1132020] UrbanLoft",
						"value": "MTcx",
						"count": 5
					},
					{
						"label": "Standard",
						"value": "MTA0Ng==",
						"count": 5
					},
					{
						"label": "[12320] Curtains",
						"value": "MTY2NA==",
						"count": 5
					},
					{
						"label": "[1232715] KleenTRED",
						"value": "MjIwMQ==",
						"count": 5
					},
					{
						"label": "[113202005] URL Ornamental vases",
						"value": "NDMxOA==",
						"count": 5
					},
					{
						"label": "Hotel Stuffs",
						"value": "MTE3MTU=",
						"count": 5
					},
					{
						"label": "Candles",
						"value": "MTQ2",
						"count": 4
					},
					{
						"label": "[11310] Candles",
						"value": "MTA0Nw==",
						"count": 4
					},
					{
						"label": "[1131050] Kas",
						"value": "MTY2Mg==",
						"count": 4
					},
					{
						"label": "[113105005] KAS Obsolete",
						"value": "MTY2Mw==",
						"count": 4
					},
					{
						"label": "[1132015] Umbra",
						"value": "MTg1NA==",
						"count": 4
					},
					{
						"label": "[113200550] XX Artificial Plants",
						"value": "NDMwOA==",
						"count": 4
					},
					{
						"label": "[113201520] UA Wall Hooks",
						"value": "NDMxNg==",
						"count": 4
					},
					{
						"label": "[12340] Throw Rugs",
						"value": "OTQ=",
						"count": 3
					},
					{
						"label": "Throw Rugs",
						"value": "MTIz",
						"count": 3
					},
					{
						"label": "Nursery",
						"value": "MTM0",
						"count": 3
					},
					{
						"label": "Vases",
						"value": "MTUx",
						"count": 3
					},
					{
						"label": "Pencil Pleat Curtains",
						"value": "MTYy",
						"count": 3
					},
					{
						"label": "Sheer Curtains",
						"value": "MTY0",
						"count": 3
					},
					{
						"label": "[12325] Rugs",
						"value": "MTY2Nw==",
						"count": 3
					},
					{
						"label": "[11360] Nursery",
						"value": "MTcwMg==",
						"count": 3
					},
					{
						"label": "[1136005] hi-hop",
						"value": "MTg3MQ==",
						"count": 3
					},
					{
						"label": "[1232022] Studio One",
						"value": "MjE3OQ==",
						"count": 3
					},
					{
						"label": "[113200535] XX Ornamental vases",
						"value": "NDMwNQ==",
						"count": 3
					},
					{
						"label": "[123202225] STD Pencil Plt Crtn",
						"value": "NTQzOA==",
						"count": 3
					},
					{
						"label": "[123271510] KLT Indoor Doormats",
						"value": "NTUxMw==",
						"count": 3
					},
					{
						"label": "[17515] Frames",
						"value": "ODI=",
						"count": 2
					},
					{
						"label": "Custom Curtains & Roman Blinds",
						"value": "MTIx",
						"count": 2
					},
					{
						"label": "Frames",
						"value": "MTI5",
						"count": 2
					},
					{
						"label": "Essential Oils",
						"value": "MTU1",
						"count": 2
					},
					{
						"label": "Gift Sets & Kids Gifts",
						"value": "MTU2",
						"count": 2
					},
					{
						"label": "Multi",
						"value": "MTA0Mw==",
						"count": 2
					},
					{
						"label": "Ornate",
						"value": "MTA0NQ==",
						"count": 2
					},
					{
						"label": "[1232520] UrbanLoft",
						"value": "MTY3NA==",
						"count": 2
					},
					{
						"label": "[123252005] URL Indoor Rugs",
						"value": "MTY3NQ==",
						"count": 2
					},
					{
						"label": "[1130505] No Brand",
						"value": "MTgxMg==",
						"count": 2
					},
					{
						"label": "[1130540] Nature's Collective",
						"value": "MTgxOQ==",
						"count": 2
					},
					{
						"label": "[1130597] Ecoya",
						"value": "MTgzMQ==",
						"count": 2
					},
					{
						"label": "[1751005] No Brand",
						"value": "MzQ4MA==",
						"count": 2
					},
					{
						"label": "[1751535] Umbra",
						"value": "MzQ5Mg==",
						"count": 2
					},
					{
						"label": "[113050510] XX Aroma gift sets",
						"value": "NDE3Mw==",
						"count": 2
					},
					{
						"label": "[113054005] NCO Fragrant oils",
						"value": "NDIyNw==",
						"count": 2
					},
					{
						"label": "[123271520] KLT Outdoor Doormats",
						"value": "NTUxNA==",
						"count": 2
					},
					{
						"label": "[175100515] XX Wall clocks",
						"value": "OTcwNw==",
						"count": 2
					},
					{
						"label": "[175153505] UA Multi frames",
						"value": "OTc0MA==",
						"count": 2
					},
					{
						"label": "Hot Deals",
						"value": "MTE3MTE=",
						"count": 2
					},
					{
						"label": "[17525] Wall Art",
						"value": "NzE=",
						"count": 1
					},
					{
						"label": "[1752515] Twill & Co",
						"value": "NzI=",
						"count": 1
					},
					{
						"label": "[175251505] TNC Kids prints",
						"value": "NzM=",
						"count": 1
					},
					{
						"label": "[1234014] Royal Doulton",
						"value": "MTAy",
						"count": 1
					},
					{
						"label": "[123401405] RD Throw Rug",
						"value": "MTAz",
						"count": 1
					},
					{
						"label": "[1234010] Classic Living",
						"value": "MTA2",
						"count": 1
					},
					{
						"label": "[123401005] CL Throw Rugs",
						"value": "MTA3",
						"count": 1
					},
					{
						"label": "[1234004] Esprit",
						"value": "MTA4",
						"count": 1
					},
					{
						"label": "[123400405] ESP Throw Rugs",
						"value": "MTA5",
						"count": 1
					},
					{
						"label": "Blinds",
						"value": "MTE5",
						"count": 1
					},
					{
						"label": "Curtains",
						"value": "MTIw",
						"count": 1
					},
					{
						"label": "Wall Art",
						"value": "MTQw",
						"count": 1
					},
					{
						"label": "Curtain Accessories",
						"value": "MTQ3",
						"count": 1
					},
					{
						"label": "Artificial Plants",
						"value": "MTQ4",
						"count": 1
					},
					{
						"label": "Desk",
						"value": "MTUy",
						"count": 1
					},
					{
						"label": "Diffusers",
						"value": "MTU0",
						"count": 1
					},
					{
						"label": "Hand Creams",
						"value": "MTU3",
						"count": 1
					},
					{
						"label": "Room Spray",
						"value": "MTU4",
						"count": 1
					},
					{
						"label": "Eyelet Curtains",
						"value": "MTYx",
						"count": 1
					},
					{
						"label": "Tab Top Curtains",
						"value": "MTY1",
						"count": 1
					},
					{
						"label": "[12345] Curtain & Blind Hardware",
						"value": "MTY2NQ==",
						"count": 1
					},
					{
						"label": "[1232506] Classic Living",
						"value": "MTY3Ng==",
						"count": 1
					},
					{
						"label": "[123250605] CL Indoor Rugs",
						"value": "MTY3Nw==",
						"count": 1
					},
					{
						"label": "[12310] Blinds",
						"value": "MTcxNg==",
						"count": 1
					},
					{
						"label": "[1130510] UrbanLoft",
						"value": "MTgxMw==",
						"count": 1
					},
					{
						"label": "[1130525] The Aromatherapy Co",
						"value": "MTgxNg==",
						"count": 1
					},
					{
						"label": "[1130590] Banks & Co",
						"value": "MTgyOA==",
						"count": 1
					},
					{
						"label": "[1130596] Annabel Trends",
						"value": "MTgzMA==",
						"count": 1
					},
					{
						"label": "[1231013] Habitat",
						"value": "MjE1NQ==",
						"count": 1
					},
					{
						"label": "[1232005] No Brand",
						"value": "MjE2OQ==",
						"count": 1
					},
					{
						"label": "[1232013] Habitat",
						"value": "MjE3NA==",
						"count": 1
					},
					{
						"label": "[1232725] Miltex",
						"value": "MjIwMw==",
						"count": 1
					},
					{
						"label": "[1234580] Umbra",
						"value": "MjI4OQ==",
						"count": 1
					},
					{
						"label": "[113051005] URL Diffuser&incense",
						"value": "NDE4NQ==",
						"count": 1
					},
					{
						"label": "[113052525] ARO Room sprays",
						"value": "NDIxNw==",
						"count": 1
					},
					{
						"label": "[113059010] BKC Lotions",
						"value": "NDI1NA==",
						"count": 1
					},
					{
						"label": "[113059610] ANT Beauty",
						"value": "NDI1OQ==",
						"count": 1
					},
					{
						"label": "[113059705] ECA Diffusers",
						"value": "NDI2MA==",
						"count": 1
					},
					{
						"label": "[113059730] ECA Jar Candles",
						"value": "NDI2NQ==",
						"count": 1
					},
					{
						"label": "[113200515] XX Decor",
						"value": "NDMwMQ==",
						"count": 1
					},
					{
						"label": "[123101310] HAB Roman Blinds",
						"value": "NTM0Mw==",
						"count": 1
					},
					{
						"label": "[123200510] XX Eyelet Curtains",
						"value": "NTM4Nw==",
						"count": 1
					},
					{
						"label": "[123201330] HAB Tab Top",
						"value": "NTQxNw==",
						"count": 1
					},
					{
						"label": "[123272520] MLX Outdoor Doormats",
						"value": "NTUxOA==",
						"count": 1
					},
					{
						"label": "[123458020] UA Curtain Rod&Pole",
						"value": "NTczMA==",
						"count": 1
					},
					{
						"label": "[175102010] NXT Desk clocks",
						"value": "OTcxNA==",
						"count": 1
					}
				],
				"position": 1
			},
			{
				"label": "Color",
				"count": 34,
				"attribute_code": "color",
				"options": [
					{
						"label": "Black",
						"value": "58",
						"count": 53
					},
					{
						"label": "Haze Blue",
						"value": "59",
						"count": 1
					},
					{
						"label": "Brown",
						"value": "60",
						"count": 3
					},
					{
						"label": "Gray",
						"value": "61",
						"count": 8
					},
					{
						"label": "Green",
						"value": "62",
						"count": 2
					},
					{
						"label": "Orange",
						"value": "65",
						"count": 2
					},
					{
						"label": "Red",
						"value": "67",
						"count": 1
					},
					{
						"label": "White",
						"value": "68",
						"count": 32
					},
					{
						"label": "Yellow",
						"value": "69",
						"count": 3
					},
					{
						"label": "Pink",
						"value": "249",
						"count": 4
					},
					{
						"label": "Coffee",
						"value": "250",
						"count": 3
					},
					{
						"label": "Navy",
						"value": "251",
						"count": 5
					},
					{
						"label": "Natural",
						"value": "261",
						"count": 2
					},
					{
						"label": "Cream",
						"value": "262",
						"count": 1
					},
					{
						"label": "Linen",
						"value": "267",
						"count": 1
					},
					{
						"label": "Steel",
						"value": "268",
						"count": 1
					},
					{
						"label": "Coal",
						"value": "269",
						"count": 2
					},
					{
						"label": "Glacier",
						"value": "270",
						"count": 1
					},
					{
						"label": "Wisteria",
						"value": "271",
						"count": 1
					},
					{
						"label": "Sand",
						"value": "272",
						"count": 2
					},
					{
						"label": "Dove",
						"value": "273",
						"count": 2
					},
					{
						"label": "Olive",
						"value": "274",
						"count": 1
					},
					{
						"label": "Toffee",
						"value": "450",
						"count": 1
					},
					{
						"label": "Chilli",
						"value": "454",
						"count": 1
					},
					{
						"label": "Sky",
						"value": "455",
						"count": 1
					},
					{
						"label": "Almond",
						"value": "457",
						"count": 1
					},
					{
						"label": "Mist",
						"value": "458",
						"count": 1
					},
					{
						"label": "Tapestry",
						"value": "459",
						"count": 1
					},
					{
						"label": "White blind",
						"value": "475",
						"count": 1
					},
					{
						"label": "Multi-Curtains",
						"value": "479",
						"count": 1
					},
					{
						"label": "Putty",
						"value": "484",
						"count": 1
					},
					{
						"label": "Charcoal",
						"value": "485",
						"count": 1
					},
					{
						"label": "Nickel/Steel",
						"value": "488",
						"count": 1
					},
					{
						"label": "Silver",
						"value": "496",
						"count": 1
					}
				],
				"position": 0
			},
			{
				"label": "Material",
				"count": 3,
				"attribute_code": "material",
				"options": [
					{
						"label": "Cotton",
						"value": "42",
						"count": 2
					},
					{
						"label": "Spandex",
						"value": "159",
						"count": 1
					},
					{
						"label": "Ripstop",
						"value": "49",
						"count": 1
					}
				],
				"position": 0
			},
			{
				"label": "Size",
				"count": 19,
				"attribute_code": "size",
				"options": [
					{
						"label": "55 cm",
						"value": "100",
						"count": 2
					},
					{
						"label": "28",
						"value": "180",
						"count": 1
					},
					{
						"label": "30",
						"value": "182",
						"count": 4
					},
					{
						"label": "80x150cm",
						"value": "460",
						"count": 1
					},
					{
						"label": "90x210",
						"value": "469",
						"count": 1
					},
					{
						"label": "120x210",
						"value": "470",
						"count": 1
					},
					{
						"label": "150x210",
						"value": "471",
						"count": 1
					},
					{
						"label": "180x210",
						"value": "472",
						"count": 1
					},
					{
						"label": "210x137",
						"value": "473",
						"count": 1
					},
					{
						"label": "210x210",
						"value": "474",
						"count": 1
					},
					{
						"label": "170x160",
						"value": "480",
						"count": 2
					},
					{
						"label": "170x205",
						"value": "481",
						"count": 2
					},
					{
						"label": "230x205",
						"value": "482",
						"count": 2
					},
					{
						"label": "230x220",
						"value": "483",
						"count": 2
					},
					{
						"label": "91-183",
						"value": "486",
						"count": 1
					},
					{
						"label": "180-366",
						"value": "487",
						"count": 1
					},
					{
						"label": "120x220",
						"value": "489",
						"count": 1
					},
					{
						"label": "300x120",
						"value": "490",
						"count": 1
					},
					{
						"label": "300x137",
						"value": "491",
						"count": 1
					}
				],
				"position": 0
			},
			{
				"label": "Room",
				"count": 8,
				"attribute_code": "room",
				"options": [
					{
						"label": "Living Room",
						"value": "252",
						"count": 42
					},
					{
						"label": "Outdoors",
						"value": "253",
						"count": 4
					},
					{
						"label": "Kids",
						"value": "254",
						"count": 26
					},
					{
						"label": "Bedroom",
						"value": "255",
						"count": 25
					},
					{
						"label": "Bathroom",
						"value": "256",
						"count": 5
					},
					{
						"label": "Kitchen",
						"value": "257",
						"count": 19
					},
					{
						"label": "Dining Room",
						"value": "259",
						"count": 19
					},
					{
						"label": "Travel & Accessories",
						"value": "260",
						"count": 1
					}
				],
				"position": 0
			},
			{
				"label": "Brand",
				"count": 28,
				"attribute_code": "brand",
				"options": [
					{
						"label": "Abode",
						"value": "314",
						"count": 2
					},
					{
						"label": "Classic Living",
						"value": "330",
						"count": 3
					},
					{
						"label": "Ecoya",
						"value": "345",
						"count": 2
					},
					{
						"label": "Galaxy",
						"value": "356",
						"count": 4
					},
					{
						"label": "Habitat",
						"value": "361",
						"count": 2
					},
					{
						"label": "Hotel At Home",
						"value": "365",
						"count": 4
					},
					{
						"label": "KAS",
						"value": "377",
						"count": 8
					},
					{
						"label": "Royal Doulton",
						"value": "411",
						"count": 1
					},
					{
						"label": "Studio One",
						"value": "425",
						"count": 2
					},
					{
						"label": "The Aromatherapy Co",
						"value": "429",
						"count": 1
					},
					{
						"label": "Twill & Co",
						"value": "432",
						"count": 10
					},
					{
						"label": "Umbra",
						"value": "433",
						"count": 7
					},
					{
						"label": "Urban",
						"value": "434",
						"count": 1
					},
					{
						"label": "Urban Loft",
						"value": "435",
						"count": 7
					},
					{
						"label": "Poppiseed",
						"value": "445",
						"count": 2
					},
					{
						"label": "Esprit",
						"value": "447",
						"count": 2
					},
					{
						"label": "Royal Albert",
						"value": "448",
						"count": 1
					},
					{
						"label": "Hotel @ Home",
						"value": "449",
						"count": 2
					},
					{
						"label": "Hallmark",
						"value": "452",
						"count": 8
					},
					{
						"label": "Southern Lights",
						"value": "453",
						"count": 10
					},
					{
						"label": "KleenTRED",
						"value": "463",
						"count": 4
					},
					{
						"label": "NXT",
						"value": "464",
						"count": 14
					},
					{
						"label": "Ricardo",
						"value": "465",
						"count": 1
					},
					{
						"label": "Annabel Trends",
						"value": "466",
						"count": 1
					},
					{
						"label": "Nature's Collective",
						"value": "467",
						"count": 2
					},
					{
						"label": "Banks & Co",
						"value": "493",
						"count": 1
					},
					{
						"label": "Brooklyn",
						"value": "497",
						"count": 2
					},
					{
						"label": "Rembrandt",
						"value": "498",
						"count": 1
					}
				],
				"position": 0
			},
			{
				"label": "Badge",
				"count": 2,
				"attribute_code": "badge",
				"options": [
					{
						"label": "Clearance",
						"value": "504",
						"count": 1
					},
					{
						"label": "KnockDown",
						"value": "505",
						"count": 1
					}
				],
				"position": 0
			}
		],
		"items": [
			{
				"__typename": "SimpleProduct",
				"uid": "MjIxMg==",
				"name": "KleenTred Coir Tuft Printed Welcome Door Mat 75x45cm",
				"price_range": {
					"maximum_price": {
						"final_price": {
							"value": 49.99,
							"currency": "USD"
						},
						"regular_price": {
							"value": 49.99,
							"currency": "USD"
						}
					},
					"minimum_price": {
						"regular_price": {
							"value": 49.99,
							"currency": "USD"
						},
						"final_price": {
							"value": 49.99,
							"currency": "USD"
						}
					}
				},
				"sku": "1101767",
				"badges": [],
				"thumbnail": {
					"url": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/media/catalog/product/cache/756d0e6f5d40daf5f22c4f72ada167ee/c/a/catalogcontentdetails-1205439-800-800-75-0_0.jpg"
				},
				"stock_status": "IN_STOCK",
				"review_count": 0,
				"rating_summary": 0,
				"url_key": "kleentred-coir-tuft-printed-welcome-door-mat-75x45cm",
				"url_suffix": ".html"
			},
			{
				"__typename": "SimpleProduct",
				"uid": "MjIxMQ==",
				"name": "KleenTred Sylvania Grey Diamond Door Mat 120x67cm",
				"price_range": {
					"maximum_price": {
						"final_price": {
							"value": 44.99,
							"currency": "USD"
						},
						"regular_price": {
							"value": 44.99,
							"currency": "USD"
						}
					},
					"minimum_price": {
						"regular_price": {
							"value": 44.99,
							"currency": "USD"
						},
						"final_price": {
							"value": 44.99,
							"currency": "USD"
						}
					}
				},
				"sku": "1098614",
				"badges": [],
				"thumbnail": {
					"url": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/media/catalog/product/cache/756d0e6f5d40daf5f22c4f72ada167ee/c/a/catalogcontentdetails-930457-800-800-75-0_0.jpg"
				},
				"stock_status": "IN_STOCK",
				"review_count": 0,
				"rating_summary": 0,
				"url_key": "kleentred-sylvania-grey-diamond-door-mat-120x67cm",
				"url_suffix": ".html"
			},
			{
				"__typename": "SimpleProduct",
				"uid": "MjIxMA==",
				"name": "KleenTred Nevada Carpet Protect 300x68cm",
				"price_range": {
					"maximum_price": {
						"final_price": {
							"value": 64.99,
							"currency": "USD"
						},
						"regular_price": {
							"value": 64.99,
							"currency": "USD"
						}
					},
					"minimum_price": {
						"regular_price": {
							"value": 64.99,
							"currency": "USD"
						},
						"final_price": {
							"value": 64.99,
							"currency": "USD"
						}
					}
				},
				"sku": "1098610",
				"badges": [],
				"thumbnail": {
					"url": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/media/catalog/product/cache/756d0e6f5d40daf5f22c4f72ada167ee/c/a/catalogcontentdetails-928546-800-800-75-0_0.jpg"
				},
				"stock_status": "IN_STOCK",
				"review_count": 0,
				"rating_summary": 0,
				"url_key": "kleentred-nevada-carpet-protect-300x68cm",
				"url_suffix": ".html"
			},
			{
				"__typename": "SimpleProduct",
				"uid": "MjIwOQ==",
				"name": "KleenTred Tuscany Rubber Scroll Door Mat 75x45cm",
				"price_range": {
					"maximum_price": {
						"final_price": {
							"value": 49.99,
							"currency": "USD"
						},
						"regular_price": {
							"value": 49.99,
							"currency": "USD"
						}
					},
					"minimum_price": {
						"regular_price": {
							"value": 49.99,
							"currency": "USD"
						},
						"final_price": {
							"value": 49.99,
							"currency": "USD"
						}
					}
				},
				"sku": "1101768",
				"badges": [],
				"thumbnail": {
					"url": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/media/catalog/product/cache/756d0e6f5d40daf5f22c4f72ada167ee/c/a/catalogcontentdetails-1205441-800-800-75-0_0.jpg"
				},
				"stock_status": "IN_STOCK",
				"review_count": 0,
				"rating_summary": 0,
				"url_key": "kleentred-tuscany-rubber-scroll-door-mat-75x45cm",
				"url_suffix": ".html"
			},
			{
				"__typename": "SimpleProduct",
				"uid": "MjIwOA==",
				"name": "Miltex Utility Deck Mat",
				"price_range": {
					"maximum_price": {
						"final_price": {
							"value": 224.99,
							"currency": "USD"
						},
						"regular_price": {
							"value": 224.99,
							"currency": "USD"
						}
					},
					"minimum_price": {
						"regular_price": {
							"value": 224.99,
							"currency": "USD"
						},
						"final_price": {
							"value": 224.99,
							"currency": "USD"
						}
					}
				},
				"sku": "1098721",
				"badges": [],
				"thumbnail": {
					"url": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/media/catalog/product/cache/756d0e6f5d40daf5f22c4f72ada167ee/c/a/catalogcontentdetails-966400-800-800-75-0_0.jpg"
				},
				"stock_status": "IN_STOCK",
				"review_count": 0,
				"rating_summary": 0,
				"url_key": "miltex-utility-deck-mat",
				"url_suffix": ".html"
			},
			{
				"__typename": "SimpleProduct",
				"uid": "MjIwNw==",
				"name": "Classic Jack Leaf Rug",
				"price_range": {
					"maximum_price": {
						"final_price": {
							"value": 249.99,
							"currency": "USD"
						},
						"regular_price": {
							"value": 249.99,
							"currency": "USD"
						}
					},
					"minimum_price": {
						"regular_price": {
							"value": 249.99,
							"currency": "USD"
						},
						"final_price": {
							"value": 249.99,
							"currency": "USD"
						}
					}
				},
				"sku": "1107297",
				"badges": [],
				"thumbnail": {
					"url": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/media/catalog/product/cache/756d0e6f5d40daf5f22c4f72ada167ee/c/a/catalogcontentdetails-1843948-800-800-75-0_0.jpg"
				},
				"stock_status": "IN_STOCK",
				"review_count": 0,
				"rating_summary": 0,
				"url_key": "classic-jack-leaf-rug",
				"url_suffix": ".html"
			},
			{
				"__typename": "ConfigurableProduct",
				"uid": "MjIwNA==",
				"name": "Classic Living Style Cross Grain Rug",
				"price_range": {
					"maximum_price": {
						"final_price": {
							"value": 139.99,
							"currency": "USD"
						},
						"regular_price": {
							"value": 139.99,
							"currency": "USD"
						}
					},
					"minimum_price": {
						"regular_price": {
							"value": 139.99,
							"currency": "USD"
						},
						"final_price": {
							"value": 139.99,
							"currency": "USD"
						}
					}
				},
				"sku": "1101293",
				"badges": [],
				"thumbnail": {
					"url": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/media/catalog/product/cache/756d0e6f5d40daf5f22c4f72ada167ee/c/a/catalogcontentdetails-960048-800-800-75-0_0.jpg"
				},
				"stock_status": "IN_STOCK",
				"review_count": 0,
				"rating_summary": 0,
				"url_key": "classic-living-style-cross-grain-rug",
				"url_suffix": ".html"
			},
			{
				"__typename": "SimpleProduct",
				"uid": "MjIwMw==",
				"name": "Classic Jack Leaf Rug Round",
				"price_range": {
					"maximum_price": {
						"final_price": {
							"value": 249.99,
							"currency": "USD"
						},
						"regular_price": {
							"value": 249.99,
							"currency": "USD"
						}
					},
					"minimum_price": {
						"regular_price": {
							"value": 249.99,
							"currency": "USD"
						},
						"final_price": {
							"value": 249.99,
							"currency": "USD"
						}
					}
				},
				"sku": "1107296",
				"badges": [],
				"thumbnail": {
					"url": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/media/catalog/product/cache/756d0e6f5d40daf5f22c4f72ada167ee/c/a/catalogcontentdetails-1598625-800-800-75-0_0.jpg"
				},
				"stock_status": "IN_STOCK",
				"review_count": 0,
				"rating_summary": 0,
				"url_key": "classic-jack-leaf-rug-round",
				"url_suffix": ".html"
			},
			{
				"__typename": "SimpleProduct",
				"uid": "MjE5OA==",
				"name": "Twill & Co Sugar Lemon & Caramel Tin Candle 200g",
				"price_range": {
					"maximum_price": {
						"final_price": {
							"value": 13.5,
							"currency": "USD"
						},
						"regular_price": {
							"value": 15,
							"currency": "USD"
						}
					},
					"minimum_price": {
						"regular_price": {
							"value": 15,
							"currency": "USD"
						},
						"final_price": {
							"value": 13.5,
							"currency": "USD"
						}
					}
				},
				"sku": "1099118",
				"badges": [],
				"thumbnail": {
					"url": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/media/catalog/product/cache/756d0e6f5d40daf5f22c4f72ada167ee/1/0/1099118.jpg"
				},
				"stock_status": "IN_STOCK",
				"review_count": 0,
				"rating_summary": 0,
				"url_key": "twill-co-tin-candle-white-peach-sea-breeze-green-200gm-5",
				"url_suffix": ".html"
			},
			{
				"__typename": "SimpleProduct",
				"uid": "MjE5Nw==",
				"name": "Twill & Co Tin Candle Raspberry & Rhubarb Multi 350gm",
				"price_range": {
					"maximum_price": {
						"final_price": {
							"value": 21.59,
							"currency": "USD"
						},
						"regular_price": {
							"value": 23.99,
							"currency": "USD"
						}
					},
					"minimum_price": {
						"regular_price": {
							"value": 23.99,
							"currency": "USD"
						},
						"final_price": {
							"value": 21.59,
							"currency": "USD"
						}
					}
				},
				"sku": "1108925",
				"badges": [],
				"thumbnail": {
					"url": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/media/catalog/product/cache/756d0e6f5d40daf5f22c4f72ada167ee/t/w/twill_co_tin_candle_lime_lychee_multi_200gm1_1.jpg"
				},
				"stock_status": "IN_STOCK",
				"review_count": 0,
				"rating_summary": 0,
				"url_key": "twill-co-tin-candle-white-peach-sea-breeze-green-200gm-4",
				"url_suffix": ".html"
			},
			{
				"__typename": "SimpleProduct",
				"uid": "MjE5Ng==",
				"name": "Twill & Co Tin Candle Lime & Lychee Multi 200gm",
				"price_range": {
					"maximum_price": {
						"final_price": {
							"value": 13.49,
							"currency": "USD"
						},
						"regular_price": {
							"value": 14.99,
							"currency": "USD"
						}
					},
					"minimum_price": {
						"regular_price": {
							"value": 14.99,
							"currency": "USD"
						},
						"final_price": {
							"value": 13.49,
							"currency": "USD"
						}
					}
				},
				"sku": "1108926",
				"badges": [],
				"thumbnail": {
					"url": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/media/catalog/product/cache/756d0e6f5d40daf5f22c4f72ada167ee/t/w/twill_co_tin_candle_lime_lychee_multi_200gm1.jpg"
				},
				"stock_status": "IN_STOCK",
				"review_count": 0,
				"rating_summary": 0,
				"url_key": "twill-co-tin-candle-white-peach-sea-breeze-green-200gm-3",
				"url_suffix": ".html"
			},
			{
				"__typename": "SimpleProduct",
				"uid": "MjE5NQ==",
				"name": "Twill & Co Tin Candle Sweet Pea & Vanilla Grey 200gm",
				"price_range": {
					"maximum_price": {
						"final_price": {
							"value": 13.49,
							"currency": "USD"
						},
						"regular_price": {
							"value": 14.99,
							"currency": "USD"
						}
					},
					"minimum_price": {
						"regular_price": {
							"value": 14.99,
							"currency": "USD"
						},
						"final_price": {
							"value": 13.49,
							"currency": "USD"
						}
					}
				},
				"sku": "1108928",
				"badges": [],
				"thumbnail": {
					"url": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/media/catalog/product/cache/756d0e6f5d40daf5f22c4f72ada167ee/t/w/twill_co_tin_candle_sweet_pea_vanilla_grey_200gm-1.jpg"
				},
				"stock_status": "IN_STOCK",
				"review_count": 0,
				"rating_summary": 0,
				"url_key": "twill-co-tin-candle-white-peach-sea-breeze-green-200gm-2",
				"url_suffix": ".html"
			},
			{
				"__typename": "SimpleProduct",
				"uid": "MjE5Mw==",
				"name": "Twill & Co Tin Candle White Peach & Sea Breeze Green 200gm",
				"price_range": {
					"maximum_price": {
						"final_price": {
							"value": 13.49,
							"currency": "USD"
						},
						"regular_price": {
							"value": 14.99,
							"currency": "USD"
						}
					},
					"minimum_price": {
						"regular_price": {
							"value": 14.99,
							"currency": "USD"
						},
						"final_price": {
							"value": 13.49,
							"currency": "USD"
						}
					}
				},
				"sku": "1108929",
				"badges": [],
				"thumbnail": {
					"url": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/media/catalog/product/cache/756d0e6f5d40daf5f22c4f72ada167ee/t/w/twill_co_tin_candle_white_peach_sea_breeze_green_200gm-1.jpg"
				},
				"stock_status": "IN_STOCK",
				"review_count": 0,
				"rating_summary": 0,
				"url_key": "twill-co-tin-candle-white-peach-sea-breeze-green-200gm",
				"url_suffix": ".html"
			},
			{
				"__typename": "SimpleProduct",
				"uid": "MjIwMg==",
				"name": "KAS White Peony Ceramic Candle 350g Blush",
				"price_range": {
					"maximum_price": {
						"final_price": {
							"value": 27,
							"currency": "USD"
						},
						"regular_price": {
							"value": 30,
							"currency": "USD"
						}
					},
					"minimum_price": {
						"regular_price": {
							"value": 30,
							"currency": "USD"
						},
						"final_price": {
							"value": 27,
							"currency": "USD"
						}
					}
				},
				"sku": "1103931",
				"badges": [],
				"thumbnail": {
					"url": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/media/catalog/product/cache/756d0e6f5d40daf5f22c4f72ada167ee/k/a/kas_white_peony_ceramic_candle_350g_blush-1.jpg"
				},
				"stock_status": "IN_STOCK",
				"review_count": 0,
				"rating_summary": 0,
				"url_key": "twill-co-tin-candle-white-peach-sea-breeze-green-200gm-9",
				"url_suffix": ".html"
			},
			{
				"__typename": "SimpleProduct",
				"uid": "MjIwMQ==",
				"name": "KAS Coconut & Elderflower Ceramic Candle 350g White",
				"price_range": {
					"maximum_price": {
						"final_price": {
							"value": 27,
							"currency": "USD"
						},
						"regular_price": {
							"value": 30,
							"currency": "USD"
						}
					},
					"minimum_price": {
						"regular_price": {
							"value": 30,
							"currency": "USD"
						},
						"final_price": {
							"value": 27,
							"currency": "USD"
						}
					}
				},
				"sku": "1103925",
				"badges": [],
				"thumbnail": {
					"url": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/media/catalog/product/cache/756d0e6f5d40daf5f22c4f72ada167ee/k/a/kas_coconut_elderflower_ceramic_candle_350g_white-1.jpg"
				},
				"stock_status": "IN_STOCK",
				"review_count": 0,
				"rating_summary": 0,
				"url_key": "twill-co-tin-candle-white-peach-sea-breeze-green-200gm-8",
				"url_suffix": ".html"
			},
			{
				"__typename": "SimpleProduct",
				"uid": "MjIwMA==",
				"name": "KAS Guava & Lychee Ceramic Candle 350g Clay",
				"price_range": {
					"maximum_price": {
						"final_price": {
							"value": 27,
							"currency": "USD"
						},
						"regular_price": {
							"value": 30,
							"currency": "USD"
						}
					},
					"minimum_price": {
						"regular_price": {
							"value": 30,
							"currency": "USD"
						},
						"final_price": {
							"value": 27,
							"currency": "USD"
						}
					}
				},
				"sku": "1103929",
				"badges": [],
				"thumbnail": {
					"url": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/media/catalog/product/cache/756d0e6f5d40daf5f22c4f72ada167ee/k/a/kas_guava_lychee_ceramic_candle_350g_clay-1.jpg"
				},
				"stock_status": "IN_STOCK",
				"review_count": 0,
				"rating_summary": 0,
				"url_key": "twill-co-tin-candle-white-peach-sea-breeze-green-200gm-7",
				"url_suffix": ".html"
			},
			{
				"__typename": "SimpleProduct",
				"uid": "MjE5OQ==",
				"name": "KAS French Pear & Vanilla Ceramic Candle 350g Sage",
				"price_range": {
					"maximum_price": {
						"final_price": {
							"value": 27,
							"currency": "USD"
						},
						"regular_price": {
							"value": 30,
							"currency": "USD"
						}
					},
					"minimum_price": {
						"regular_price": {
							"value": 30,
							"currency": "USD"
						},
						"final_price": {
							"value": 27,
							"currency": "USD"
						}
					}
				},
				"sku": "1103927",
				"badges": [],
				"thumbnail": {
					"url": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/media/catalog/product/cache/756d0e6f5d40daf5f22c4f72ada167ee/k/a/kas_french_pear_vanilla_ceramic_candle_350g_sage.jpg"
				},
				"stock_status": "IN_STOCK",
				"review_count": 0,
				"rating_summary": 0,
				"url_key": "twill-co-tin-candle-white-peach-sea-breeze-green-200gm-6",
				"url_suffix": ".html"
			},
			{
				"__typename": "SimpleProduct",
				"uid": "MjE5MQ==",
				"name": "Poppiseed Paxton Puppy Cushion",
				"price_range": {
					"maximum_price": {
						"final_price": {
							"value": 31.99,
							"currency": "USD"
						},
						"regular_price": {
							"value": 39.99,
							"currency": "USD"
						}
					},
					"minimum_price": {
						"regular_price": {
							"value": 39.99,
							"currency": "USD"
						},
						"final_price": {
							"value": 31.99,
							"currency": "USD"
						}
					}
				},
				"sku": "1106844",
				"badges": [],
				"thumbnail": {
					"url": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/media/catalog/product/cache/756d0e6f5d40daf5f22c4f72ada167ee/c/a/catalogcontentdetails-1507877-800-800-75-0_0.jpg"
				},
				"stock_status": "IN_STOCK",
				"review_count": 0,
				"rating_summary": 0,
				"url_key": "poppiseed-paxton-puppy-cushion",
				"url_suffix": ".html"
			},
			{
				"__typename": "SimpleProduct",
				"uid": "MjE5MA==",
				"name": "Marlborough Textiles Kingfisher Cushion Cover",
				"price_range": {
					"maximum_price": {
						"final_price": {
							"value": 16,
							"currency": "USD"
						},
						"regular_price": {
							"value": 20,
							"currency": "USD"
						}
					},
					"minimum_price": {
						"regular_price": {
							"value": 20,
							"currency": "USD"
						},
						"final_price": {
							"value": 16,
							"currency": "USD"
						}
					}
				},
				"sku": "1104519",
				"badges": [],
				"thumbnail": {
					"url": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/media/catalog/product/cache/756d0e6f5d40daf5f22c4f72ada167ee/c/a/catalogcontentdetails-1223227-800-800-75-0_0.jpg"
				},
				"stock_status": "IN_STOCK",
				"review_count": 0,
				"rating_summary": 0,
				"url_key": "marlborough-textiles-kingfisher-cushion-cover",
				"url_suffix": ".html"
			},
			{
				"__typename": "SimpleProduct",
				"uid": "MjIyNg==",
				"name": "NXT Sunflower Wall Clock 50.8cm",
				"price_range": {
					"maximum_price": {
						"final_price": {
							"value": 100,
							"currency": "USD"
						},
						"regular_price": {
							"value": 104.99,
							"currency": "USD"
						}
					},
					"minimum_price": {
						"regular_price": {
							"value": 104.99,
							"currency": "USD"
						},
						"final_price": {
							"value": 100,
							"currency": "USD"
						}
					}
				},
				"sku": "1093915",
				"badges": [
					{
						"label": "Clearance",
						"extra_text": "Clearance Price. No Further Discounts Apply.",
						"type": ""
					}
				],
				"thumbnail": {
					"url": "https://integration-tjbnicq-7skfpbahl5qu2.us-4.magentosite.cloud/media/catalog/product/cache/756d0e6f5d40daf5f22c4f72ada167ee/n/x/nxt_sunflower_wall_clock_50.8cm1.jpg"
				},
				"stock_status": "IN_STOCK",
				"review_count": 0,
				"rating_summary": 0,
				"url_key": "nxt-sunflower-wall-clock-50-8cm",
				"url_suffix": ".html"
			}
		],
		"page_info": {
			"total_pages": 7
		},
		"total_count": 128
	}
}