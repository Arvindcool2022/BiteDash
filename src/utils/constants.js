// all mock/fallback datas and constants

const LOCATIONS = [
  'chennai',
  'mumbai',
  'delhi',
  'kolkata',
  'hydrabad',
  'bangalore',
  'ahmedabad',
  'pune',
  'trivandaram'
];

const CAROUSEL_DATA = [
  {
    id: '1230658',
    imageId: 'rng/md/carousel/production/c4a2950873022ef44bd0c8cc618569b2',
    action: {
      link: 'https://www.swiggy.com/collections/91153?collection_id=91153&header_title=Swiggy+Weekends&tags=layout_foodcampaign&type=rcv2',
      text: 'Tropical_IM',
      type: 'WEBLINK'
    },
    entityType: 'BANNER',
    accessibility: {
      altText: 'FREE DELIVERY',
      altTextCta: 'ORDER NOW'
    },
    entityId:
      'swiggy://collectionV2?collection_id=91153&tags=layout_foodcampaign&header_title=Swiggy%20Weekends',
    frequencyCapping: {}
  },
  {
    id: '1226810',
    imageId: 'rng/md/carousel/production/930446fda5aed5c1ceac0f058971f851',
    action: {
      link: 'https://www.swiggy.com/menu/17830',
      text: 'KFC',
      type: 'WEBLINK'
    },
    entityType: 'BANNER',
    accessibility: {
      altText: 'KFC',
      altTextCta: 'Order Now'
    },
    entityId: '17830',
    frequencyCapping: {}
  },
  {
    id: '1226842',
    imageId: 'rng/md/carousel/production/d4cd7ac8ae2639c7c4b8942ef59b41ab',
    action: {
      link: 'https://www.swiggy.com/collections/94456?collection_id=94456&tags=layout_ux4&type=rcv2',
      text: 'Lunch',
      type: 'WEBLINK'
    },
    entityType: 'BANNER',
    accessibility: {
      altText: 'GOURMET Swiggy Weekends',
      altTextCta: 'order now'
    },
    entityId: '94456',
    frequencyCapping: {}
  },
  {
    id: '1226878',
    imageId: 'rng/md/carousel/production/d86ad1ae666e79d3d4b54b23195ad690',
    action: {
      link: 'https://www.swiggy.com/menu/654247',
      text: 'The Bowl Company',
      type: 'WEBLINK'
    },
    entityType: 'BANNER',
    accessibility: {
      altText: 'The Bowl Company',
      altTextCta: 'Order Now'
    },
    entityId: '654247',
    frequencyCapping: {}
  },
  {
    id: '1229681',
    imageId: 'rng/md/carousel/production/gizmjgqs6octatgricdx',
    action: {
      link: 'https://www.swiggy.com/menu/256894',
      text: 'MCD',
      type: 'WEBLINK'
    },
    entityType: 'BANNER',
    accessibility: {
      altText: 'Free McVeggie',
      altTextCta: 'Order Now'
    },
    entityId: '256894',
    frequencyCapping: {},
    isManualAds: true
  }
];

const SMALL_CAROUSEL_DATA = [
  {
    id: '750132',
    imageId: 'v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png',
    action: {
      link: 'https://www.swiggy.com/collections/80426?collection_id=80426&tags=layout_CCS_Dosa&type=rcv2',
      text: 'Dosa',
      type: 'WEBLINK'
    },
    entityType: 'BANNER',
    accessibility: {
      altText: 'restaurants curated for dosa',
      altTextCta: 'open'
    },
    entityId: 'swiggy://collectionV2?collection_id=80426&tags=layout_CCS_Dosa',
    frequencyCapping: {}
  },
  {
    id: '750572',
    imageId:
      'v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png',
    action: {
      link: 'https://www.swiggy.com/collections/80439?collection_id=80439&tags=layout_CCS_PureVeg&type=rcv2',
      text: 'Pure Veg',
      type: 'WEBLINK'
    },
    entityType: 'BANNER',
    accessibility: {
      altText: 'restaurants curated for veg',
      altTextCta: 'open'
    },
    entityId:
      'swiggy://collectionV2?collection_id=80439&tags=layout_CCS_PureVeg',
    frequencyCapping: {}
  },
  {
    id: '750644',
    imageId: 'v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png',
    action: {
      link: 'https://www.swiggy.com/collections/80441?collection_id=80441&tags=layout_CCS_Idli&type=rcv2',
      text: 'Idli',
      type: 'WEBLINK'
    },
    entityType: 'BANNER',
    accessibility: {
      altText: 'restaurants curated for idly',
      altTextCta: 'open'
    },
    entityId: 'swiggy://collectionV2?collection_id=80441&tags=layout_CCS_Idli',
    frequencyCapping: {}
  },
  {
    id: '749806',
    imageId: 'v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Appam.png',
    action: {
      link: 'https://www.swiggy.com/collections/80353?collection_id=80353&tags=layout_BAU_Contextual%2Cappam%2Clayout_ux4&type=rcv2',
      text: 'Appam',
      type: 'WEBLINK'
    },
    entityType: 'BANNER',
    accessibility: {
      altText: 'restaurants curated for appam',
      altTextCta: 'open'
    },
    entityId: '80353',
    frequencyCapping: {}
  },
  {
    id: '750237',
    imageId: 'v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Poori.png',
    action: {
      link: 'https://www.swiggy.com/collections/80378?collection_id=80378&tags=layout_BAU_Contextual%2Cpoori&type=rcv2',
      text: 'Poori',
      type: 'WEBLINK'
    },
    entityType: 'BANNER',
    accessibility: {
      altText: 'restaurant curated for poori',
      altTextCta: 'open'
    },
    entityId: '80378',
    frequencyCapping: {}
  },
  {
    id: '750235',
    imageId:
      'v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Sandwich.png',
    action: {
      link: 'https://www.swiggy.com/collections/83667?collection_id=83667&tags=layout_CCS_Sandwiches&type=rcv2',
      text: 'Sandwich',
      type: 'WEBLINK'
    },
    entityType: 'BANNER',
    accessibility: {
      altText: 'restaurants curated for sandwich',
      altTextCta: 'open'
    },
    entityId:
      'swiggy://collectionV2?collection_id=83667&tags=layout_CCS_Sandwiches',
    frequencyCapping: {}
  },
  {
    id: '750599',
    imageId: 'v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Coffee.png',
    action: {
      link: 'https://www.swiggy.com/collections/83908?collection_id=83908&tags=layout_CCS_Coffee&type=rcv2',
      text: 'Coffee',
      type: 'WEBLINK'
    },
    entityType: 'BANNER',
    accessibility: {
      altText: 'restaurants curated for coffee',
      altTextCta: 'open'
    },
    entityId:
      'swiggy://collectionV2?collection_id=83908&tags=layout_CCS_Coffee',
    frequencyCapping: {}
  },
  {
    id: '750555',
    imageId: 'v1674029842/PC_Creative%20refresh/3D_bau/banners_new/Uttapam.png',
    action: {
      link: 'https://www.swiggy.com/collections/80416?collection_id=80416&tags=layout_CCS_Uthappam&type=rcv2',
      text: 'Uthappam',
      type: 'WEBLINK'
    },
    entityType: 'BANNER',
    accessibility: {
      altText: 'restaurant curated for uttappam',
      altTextCta: 'open'
    },
    entityId:
      'swiggy://collectionV2?collection_id=80416&tags=layout_CCS_Uthappam',
    frequencyCapping: {}
  },
  {
    id: '750562',
    imageId: 'v1674029842/PC_Creative%20refresh/3D_bau/banners_new/Vada.png',
    action: {
      link: 'https://www.swiggy.com/collections/80427?collection_id=80427&tags=layout_BAU_Contextual%2Cvada&type=rcv2',
      text: 'Vada',
      type: 'WEBLINK'
    },
    entityType: 'BANNER',
    accessibility: {
      altText: 'restaurants curated for vada',
      altTextCta: 'open'
    },
    entityId: '80427',
    frequencyCapping: {}
  },
  {
    id: '750203',
    imageId: 'v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png',
    action: {
      link: 'https://www.swiggy.com/collections/80476?collection_id=80476&tags=layout_BAU_Contextual%2Cparatha%2Cads_pc_paratha&type=rcv2',
      text: 'Paratha',
      type: 'WEBLINK'
    },
    entityType: 'BANNER',
    accessibility: {
      altText: 'restaurants curated for paratha',
      altTextCta: 'open'
    },
    entityId: '80476',
    frequencyCapping: {}
  },
  {
    id: '749874',
    imageId: 'v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png',
    action: {
      link: 'https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2',
      text: 'Cakes',
      type: 'WEBLINK'
    },
    entityType: 'BANNER',
    accessibility: {
      altText: 'restaurant curated for cakes',
      altTextCta: 'open'
    },
    entityId: 'swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake',
    frequencyCapping: {}
  },
  {
    id: '749879',
    imageId:
      'v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature.png',
    action: {
      link: 'https://www.swiggy.com/collections/80383?collection_id=80383&tags=layout_CCS_CholeBhature&type=rcv2',
      text: 'Chole Bhature',
      type: 'WEBLINK'
    },
    entityType: 'BANNER',
    accessibility: {
      altText: 'restaurant curated for chhole bhatoore',
      altTextCta: 'open'
    },
    entityId:
      'swiggy://collectionV2?collection_id=80383&tags=layout_CCS_CholeBhature',
    frequencyCapping: {}
  },
  {
    id: '750638',
    imageId: 'v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Juice.png',
    action: {
      link: 'https://www.swiggy.com/collections/80446?collection_id=80446&tags=layout_Juices_Contextual&type=rcv2',
      text: 'Juice',
      type: 'WEBLINK'
    },
    entityType: 'BANNER',
    accessibility: {
      altText: 'restaurants curated for juice',
      altTextCta: 'open'
    },
    entityId:
      'swiggy://collectionV2?collection_id=80446&tags=layout_Juices_Contextual',
    frequencyCapping: {}
  },
  {
    id: '750239',
    imageId: 'v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png',
    action: {
      link: 'https://www.swiggy.com/collections/83674?collection_id=83674&tags=layout_CCS_Shakes&type=rcv2',
      text: 'Shake',
      type: 'WEBLINK'
    },
    entityType: 'BANNER',
    accessibility: {
      altText: 'restaurant curated for shakes',
      altTextCta: 'open'
    },
    entityId:
      'swiggy://collectionV2?collection_id=83674&tags=layout_CCS_Shakes',
    frequencyCapping: {}
  },
  {
    id: '750244',
    imageId: 'v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Puttu.png',
    action: {
      link: 'https://www.swiggy.com/collections/80386?collection_id=80386&tags=layout_BAU_Contextual%2Cputtu&type=rcv2',
      text: 'Puttu',
      type: 'WEBLINK'
    },
    entityType: 'BANNER',
    accessibility: {
      altText: 'restaurant curated for puttu',
      altTextCta: 'open'
    },
    entityId: '80386',
    frequencyCapping: {}
  },
  {
    id: '750205',
    imageId: 'v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Parotta.png',
    action: {
      link: 'https://www.swiggy.com/collections/80478?collection_id=80478&tags=layout_BAU_Contextual%2Cparotta&type=rcv2',
      text: 'Parotta',
      type: 'WEBLINK'
    },
    entityType: 'BANNER',
    accessibility: {
      altText: 'restaurant curated for parotta',
      altTextCta: 'open'
    },
    entityId: '80478',
    frequencyCapping: {}
  },
  {
    id: '750200',
    imageId:
      'v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paniyaram.png',
    action: {
      link: 'https://www.swiggy.com/collections/80474?collection_id=80474&tags=layout_ux4&type=rcv2',
      text: 'Paniyaram',
      type: 'WEBLINK'
    },
    entityType: 'BANNER',
    accessibility: {
      altText: 'restaurant curated for paniyaram',
      altTextCta: 'open'
    },
    entityId: '80474',
    frequencyCapping: {}
  },
  {
    id: '750605',
    imageId: 'rng/md/carousel/production/cbb85a3c1684891105294d11f8359996',
    action: {
      link: 'https://www.swiggy.com/collections/80494?collection_id=80494&tags=layout_CCS_Tea&type=rcv2',
      text: 'Tea',
      type: 'WEBLINK'
    },
    entityType: 'BANNER',
    accessibility: {
      altText: 'restaurants curated for tea',
      altTextCta: 'open'
    },
    entityId: 'swiggy://collectionV2?collection_id=80494&tags=layout_CCS_Tea',
    frequencyCapping: {}
  },
  {
    id: '750230',
    imageId: 'v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Samosas.png',
    action: {
      link: 'https://www.swiggy.com/collections/80397?collection_id=80397&tags=layout_BAU_Contextual%2Csamosa&type=rcv2',
      text: 'Samosa',
      type: 'WEBLINK'
    },
    entityType: 'BANNER',
    accessibility: {
      altText: 'restaurants curated for samosa',
      altTextCta: 'open'
    },
    entityId: '80397',
    frequencyCapping: {}
  },
  {
    id: '750217',
    imageId:
      'v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png',
    action: {
      link: 'https://www.swiggy.com/collections/80364?collection_id=80364&tags=layout_PavBhaji_Contextual&type=rcv2',
      text: 'Pav Bhaji',
      type: 'WEBLINK'
    },
    entityType: 'BANNER',
    accessibility: {
      altText: 'restaurant curated for pav bhaji',
      altTextCta: 'open'
    },
    entityId:
      'swiggy://collectionV2?collection_id=80364&tags=layout_PavBhaji_Contextual',
    frequencyCapping: {}
  }
];

const RESTAURANT_DATA = [
  {
    info: {
      id: '17830',
      name: 'KFC',
      cloudinaryImageId: '56c9ab92bd79745fd152a30fa2525426',
      locality: 'GST Road',
      areaName: 'Chromepet',
      costForTwo: '₹400 for two',
      cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: '17830',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 6800
          },
          {
            name: 'BASE_TIME'
          },
          {
            name: 'ANCILLARY_SURGE_FEE'
          }
        ],
        totalFee: 6800
      },
      parentId: '547',
      avgRatingString: '4.1',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 30,
        lastMileTravel: 6,
        serviceability: 'SERVICEABLE',
        slaString: '30 mins',
        lastMileTravelString: '6.0 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2023-08-28 01:00:00',
        opened: true
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: '40% OFF',
        subHeader: 'UPTO ₹80',
        discountCalloutInfo: {
          message: 'Free Delivery',
          logoCtx: {
            logo: 'v1655895371/free_delivery_logo_hqipbo.png'
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/kfc-gst-road-chromepet-chennai-17830',
      type: 'WEBLINK'
    }
  },
  {
    info: {
      id: '227269',
      name: 'Burger King',
      cloudinaryImageId: 'e33e1d3ba7d6b2bb0d45e1001b731fcf',
      locality: 'Marimala Nagar',
      areaName: 'Kavanur',
      costForTwo: '₹350 for two',
      cuisines: ['Burgers', 'American'],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: '227269',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 9900
          },
          {
            name: 'BASE_TIME'
          },
          {
            name: 'ANCILLARY_SURGE_FEE'
          }
        ],
        totalFee: 9900
      },
      parentId: '166',
      avgRatingString: '4.1',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 33,
        lastMileTravel: 9.8,
        serviceability: 'SERVICEABLE',
        slaString: '33 mins',
        lastMileTravelString: '9.8 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2023-08-28 02:00:00',
        opened: true
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: '60% OFF',
        subHeader: 'UPTO ₹120',
        discountCalloutInfo: {
          message: 'Free Delivery',
          logoCtx: {
            logo: 'v1655895371/free_delivery_logo_hqipbo.png'
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/burger-king-marimala-nagar-kavanur-chennai-227269',
      type: 'WEBLINK'
    }
  },
  {
    info: {
      id: '66691',
      name: 'Subway',
      cloudinaryImageId: '1ace5fa65eff3e1223feb696c956b38b',
      locality: 'Urapakkam',
      areaName: 'New Perungalathur',
      costForTwo: '₹350 for two',
      cuisines: ['Salads', 'Snacks', 'Desserts', 'Beverages'],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: '66691',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 4400
          },
          {
            name: 'BASE_TIME'
          },
          {
            name: 'ANCILLARY_SURGE_FEE'
          }
        ],
        totalFee: 4400
      },
      parentId: '2',
      avgRatingString: '3.8',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 35,
        lastMileTravel: 4.8,
        serviceability: 'SERVICEABLE',
        slaString: '35 mins',
        lastMileTravelString: '4.8 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2023-08-28 02:00:00',
        opened: true
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: '50% OFF',
        subHeader: 'UPTO ₹100',
        discountCalloutInfo: {
          message: 'Free Delivery',
          logoCtx: {
            logo: 'v1655895371/free_delivery_logo_hqipbo.png'
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/subway-urapakkam-new-perungalathur-chennai-66691',
      type: 'WEBLINK'
    }
  },
  {
    info: {
      id: '27411',
      name: 'Pizza Hut',
      cloudinaryImageId: '2b4f62d606d1b2bfba9ba9e5386fabb7',
      locality: 'GST Road',
      areaName: 'Chrompet',
      costForTwo: '₹350 for two',
      cuisines: ['Pizzas'],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: '27411',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 5700
          },
          {
            name: 'BASE_TIME'
          },
          {
            name: 'ANCILLARY_SURGE_FEE'
          }
        ],
        totalFee: 5700
      },
      parentId: '721',
      avgRatingString: '3.9',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 33,
        lastMileTravel: 5.9,
        serviceability: 'SERVICEABLE',
        slaString: '33 mins',
        lastMileTravelString: '5.9 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2023-08-28 01:00:00',
        opened: true
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: '50% OFF',
        subHeader: 'UPTO ₹100',
        discountCalloutInfo: {
          message: 'Free Delivery',
          logoCtx: {
            logo: 'v1655895371/free_delivery_logo_hqipbo.png'
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/pizza-hut-gst-road-chrompet-chennai-27411',
      type: 'WEBLINK'
    }
  },
  {
    info: {
      id: '562246',
      name: 'The BVK Biryani (Bai Veetu Kalyanam)',
      cloudinaryImageId: 'to7mgafbxma1kukznygi',
      locality: 'Bharathiyar Street',
      areaName: 'West Tambaram',
      costForTwo: '₹550 for two',
      cuisines: ['Biryani', 'South Indian'],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: '562246',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3500
          },
          {
            name: 'BASE_TIME'
          },
          {
            name: 'ANCILLARY_SURGE_FEE'
          }
        ],
        totalFee: 3500
      },
      parentId: '337996',
      avgRatingString: '3.9',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 18,
        lastMileTravel: 1.8,
        serviceability: 'SERVICEABLE',
        slaString: '18 mins',
        lastMileTravelString: '1.8 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2023-08-28 03:00:00',
        opened: true
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹249',
        discountTag: 'FLAT DEAL',
        discountCalloutInfo: {
          message: 'Free Delivery',
          logoCtx: {
            logo: 'v1655895371/free_delivery_logo_hqipbo.png'
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/the-bvk-biryani-bai-veetu-kalyanam-bharathiyar-street-west-tambaram-chennai-562246',
      type: 'WEBLINK'
    }
  },
  {
    info: {
      id: '407383',
      name: 'Wow! Momo',
      cloudinaryImageId: '0984acc0ed7b914206dbbcb90297becc',
      locality: 'Tambaram',
      areaName: 'Venkatesan Street',
      costForTwo: '₹300 for two',
      cuisines: [
        'Tibetan',
        'Healthy Food',
        'Asian',
        'Chinese',
        'Snacks',
        'Continental',
        'Desserts',
        'Beverages'
      ],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: '407383',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3800
          },
          {
            name: 'BASE_TIME'
          },
          {
            name: 'ANCILLARY_SURGE_FEE'
          }
        ],
        totalFee: 3800
      },
      parentId: '1776',
      avgRatingString: '4.2',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 31,
        lastMileTravel: 3.6,
        serviceability: 'SERVICEABLE',
        slaString: '31 mins',
        lastMileTravelString: '3.6 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2023-08-27 23:59:00',
        opened: true
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        discountCalloutInfo: {
          message: 'Free Delivery',
          logoCtx: {
            logo: 'v1655895371/free_delivery_logo_hqipbo.png'
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/wow-momo-tambaram-venkatesan-street-chennai-407383',
      type: 'WEBLINK'
    }
  },
  {
    info: {
      id: '16632',
      name: 'A2B - Adyar Ananda Bhavan',
      cloudinaryImageId: 'rfsfyqedzfehnxy59ewl',
      locality: 'Muthurangan Muthali Street',
      areaName: 'Tambaram',
      costForTwo: '₹300 for two',
      cuisines: ['South Indian', 'North Indian', 'Sweets', 'Chinese'],
      avgRating: 4.3,
      veg: true,
      feeDetails: {
        restaurantId: '16632',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 4400
          },
          {
            name: 'BASE_TIME'
          },
          {
            name: 'ANCILLARY_SURGE_FEE'
          }
        ],
        totalFee: 4400
      },
      parentId: '22',
      avgRatingString: '4.3',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 24,
        lastMileTravel: 4.5,
        serviceability: 'SERVICEABLE',
        slaString: '24 mins',
        lastMileTravelString: '4.5 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2023-08-27 22:45:00',
        opened: true
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹249',
        discountTag: 'FLAT DEAL',
        discountCalloutInfo: {
          message: 'Free Delivery',
          logoCtx: {
            logo: 'v1655895371/free_delivery_logo_hqipbo.png'
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-muthurangan-muthali-street-tambaram-chennai-16632',
      type: 'WEBLINK'
    }
  },
  {
    info: {
      id: '152500',
      name: 'Faasos - Wraps & Rolls',
      cloudinaryImageId: 'af33b81798b11deba338e94b7585d348',
      locality: 'Mudichur Road',
      areaName: 'Tambaram',
      costForTwo: '₹200 for two',
      cuisines: [
        'Kebabs',
        'Fast Food',
        'Snacks',
        'North Indian',
        'American',
        'Healthy Food',
        'Desserts',
        'Beverages'
      ],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: '152500',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 4400
          },
          {
            name: 'BASE_TIME'
          },
          {
            name: 'ANCILLARY_SURGE_FEE'
          }
        ],
        totalFee: 4400
      },
      parentId: '21809',
      avgRatingString: '4.2',
      totalRatingsString: '5K+',
      sla: {
        deliveryTime: 29,
        lastMileTravel: 4,
        serviceability: 'SERVICEABLE',
        slaString: '29 mins',
        lastMileTravelString: '4.0 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2023-08-28 00:00:00',
        opened: true
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C'
          }
        ]
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available'
                }
              }
            ]
          }
        }
      },
      aggregatedDiscountInfoV3: {
        discountCalloutInfo: {
          message: 'Free Delivery',
          logoCtx: {
            logo: 'v1655895371/free_delivery_logo_hqipbo.png'
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-mudichur-road-tambaram-chennai-152500',
      type: 'WEBLINK'
    }
  },
  {
    info: {
      id: '366386',
      name: 'Ovenfresh Pizzas, Cakes & Desserts',
      cloudinaryImageId: '50a780c44b9c89b50888d6d23831f30e',
      locality: 'Mudichur',
      areaName: 'Mudichur Road',
      costForTwo: '₹300 for two',
      cuisines: ['Bakery', 'Pizzas', 'Snacks', 'Beverages', 'Fast Food'],
      avgRating: 4,
      feeDetails: {
        restaurantId: '366386',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 4300
          },
          {
            name: 'BASE_TIME'
          },
          {
            name: 'ANCILLARY_SURGE_FEE'
          }
        ],
        totalFee: 4300
      },
      parentId: '304929',
      avgRatingString: '4.0',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 21,
        lastMileTravel: 3,
        serviceability: 'SERVICEABLE',
        slaString: '21 mins',
        lastMileTravelString: '3.0 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2023-08-27 23:59:00',
        opened: true
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: '₹150 OFF',
        subHeader: 'ABOVE ₹499',
        discountTag: 'FLAT DEAL',
        discountCalloutInfo: {
          message: 'Free Delivery',
          logoCtx: {
            logo: 'v1655895371/free_delivery_logo_hqipbo.png'
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/ovenfresh-pizzas-cakes-and-desserts-mudichur-mudichur-road-chennai-366386',
      type: 'WEBLINK'
    }
  },
  {
    info: {
      id: '49826',
      name: 'Hot Breads',
      cloudinaryImageId: '6feb1d22bb913dbabcde6304becc2f55',
      locality: 'Tambaram East',
      areaName: 'Tambaram East',
      costForTwo: '₹150 for two',
      cuisines: ['Bakery', 'Desserts'],
      avgRating: 4.5,
      feeDetails: {
        restaurantId: '49826',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3800
          },
          {
            name: 'BASE_TIME'
          },
          {
            name: 'ANCILLARY_SURGE_FEE'
          }
        ],
        totalFee: 3800
      },
      parentId: '470',
      avgRatingString: '4.5',
      totalRatingsString: '5K+',
      sla: {
        deliveryTime: 20,
        lastMileTravel: 3.6,
        serviceability: 'SERVICEABLE',
        slaString: '20 mins',
        lastMileTravelString: '3.6 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2023-08-27 21:30:00',
        opened: true
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C'
          }
        ]
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available'
                }
              }
            ]
          }
        }
      },
      aggregatedDiscountInfoV3: {
        header: '20% OFF',
        subHeader: 'UPTO ₹50',
        discountCalloutInfo: {
          message: 'Free Delivery',
          logoCtx: {
            logo: 'v1655895371/free_delivery_logo_hqipbo.png'
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/hot-breads-tambaram-east-chennai-49826',
      type: 'WEBLINK'
    }
  },
  {
    info: {
      id: '92401',
      name: 'Chai Kings',
      cloudinaryImageId: 'jwpwn4ly8twte2kxifln',
      locality: 'Jayasamy Nagar',
      areaName: 'Tambaram',
      costForTwo: '₹150 for two',
      cuisines: ['Beverages', 'Snacks', 'Bakery'],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: '92401',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 4400
          },
          {
            name: 'BASE_TIME'
          },
          {
            name: 'ANCILLARY_SURGE_FEE'
          }
        ],
        totalFee: 4400
      },
      parentId: '2627',
      avgRatingString: '4.4',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 28,
        lastMileTravel: 4.8,
        serviceability: 'SERVICEABLE',
        slaString: '28 mins',
        lastMileTravelString: '4.8 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2023-08-27 23:00:00',
        opened: true
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C'
          }
        ]
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available'
                }
              }
            ]
          }
        }
      },
      aggregatedDiscountInfoV3: {
        header: '40% OFF',
        subHeader: 'UPTO ₹80',
        discountCalloutInfo: {
          message: 'Free Delivery',
          logoCtx: {
            logo: 'v1655895371/free_delivery_logo_hqipbo.png'
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/chai-kings-jayasamy-nagar-tambaram-chennai-92401',
      type: 'WEBLINK'
    }
  },
  {
    info: {
      id: '25095',
      name: 'Salem RR Biriyani Unavagam',
      cloudinaryImageId: 'wz0qa6zopfm0eunutjc8',
      areaName: 'Tambaram',
      costForTwo: '₹400 for two',
      cuisines: ['Biryani', 'Chettinad', 'Tandoor', 'Chinese'],
      avgRating: 4,
      feeDetails: {
        restaurantId: '25095',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 4400
          },
          {
            name: 'BASE_TIME'
          },
          {
            name: 'ANCILLARY_SURGE_FEE'
          }
        ],
        totalFee: 4400
      },
      parentId: '176137',
      avgRatingString: '4.0',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 22,
        lastMileTravel: 4.5,
        serviceability: 'SERVICEABLE',
        slaString: '22 mins',
        lastMileTravelString: '4.5 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2023-08-27 23:00:00',
        opened: true
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹249',
        discountTag: 'FLAT DEAL',
        discountCalloutInfo: {
          message: 'Free Delivery',
          logoCtx: {
            logo: 'v1655895371/free_delivery_logo_hqipbo.png'
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/salem-rr-biriyani-unavagam-tambaram-chennai-25095',
      type: 'WEBLINK'
    }
  },
  {
    info: {
      id: '50974',
      name: 'Buhari Hotel - Urapakkam',
      cloudinaryImageId: 'ibvf25to8c5vr25tah5b',
      locality: 'G.S.T Main Road',
      areaName: 'Gst Road',
      costForTwo: '₹400 for two',
      cuisines: ['Biryani', 'North Indian', 'Chinese'],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: '50974',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 7400
          },
          {
            name: 'BASE_TIME'
          },
          {
            name: 'ANCILLARY_SURGE_FEE'
          }
        ],
        totalFee: 7400
      },
      parentId: '50838',
      avgRatingString: '4.1',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 32,
        lastMileTravel: 7.9,
        serviceability: 'SERVICEABLE',
        slaString: '32 mins',
        lastMileTravelString: '7.9 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2023-08-27 23:00:00',
        opened: true
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        discountCalloutInfo: {
          message: 'Free Delivery',
          logoCtx: {
            logo: 'v1655895371/free_delivery_logo_hqipbo.png'
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/buhari-hotel-urapakkam-g-s-t-main-road-gst-road-chennai-50974',
      type: 'WEBLINK'
    }
  },
  {
    info: {
      id: '444676',
      name: 'Andhra Gunpowder',
      cloudinaryImageId: 'twuwfnjcluoqvnua4tsp',
      locality: 'Agaram Main Road',
      areaName: 'Tambaram',
      costForTwo: '₹350 for two',
      cuisines: ['Andhra', 'Biryani', 'South Indian'],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: '444676',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 6900
          },
          {
            name: 'BASE_TIME'
          },
          {
            name: 'ANCILLARY_SURGE_FEE'
          }
        ],
        totalFee: 6900
      },
      parentId: '10496',
      avgRatingString: '4.2',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 32,
        lastMileTravel: 7.3,
        serviceability: 'SERVICEABLE',
        slaString: '32 mins',
        lastMileTravelString: '7.3 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2023-08-27 23:00:00',
        opened: true
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹499',
        discountTag: 'FLAT DEAL',
        discountCalloutInfo: {
          message: 'Free Delivery',
          logoCtx: {
            logo: 'v1655895371/free_delivery_logo_hqipbo.png'
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/andhra-gunpowder-agaram-main-road-tambaram-chennai-444676',
      type: 'WEBLINK'
    }
  },
  {
    info: {
      id: '37642',
      name: 'Sangeetha Veg Restaurant',
      cloudinaryImageId: 'ohupoyk3tu1klzsalmjv',
      locality: 'GST Road',
      areaName: 'New Perungalathur',
      costForTwo: '₹200 for two',
      cuisines: ['Chinese', 'Indian', 'North Indian', 'South Indian'],
      avgRating: 4.4,
      veg: true,
      feeDetails: {
        restaurantId: '37642',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3800
          },
          {
            name: 'BASE_TIME'
          },
          {
            name: 'ANCILLARY_SURGE_FEE'
          }
        ],
        totalFee: 3800
      },
      parentId: '1260',
      avgRatingString: '4.4',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 29,
        lastMileTravel: 3.5,
        serviceability: 'SERVICEABLE',
        slaString: '29 mins',
        lastMileTravelString: '3.5 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2023-08-27 23:00:00',
        opened: true
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        discountCalloutInfo: {
          message: 'Free Delivery',
          logoCtx: {
            logo: 'v1655895371/free_delivery_logo_hqipbo.png'
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/sangeetha-veg-restaurant-gst-road-new-perungalathur-chennai-37642',
      type: 'WEBLINK'
    }
  },
  {
    info: {
      id: '152503',
      name: 'Oven Story Pizza',
      cloudinaryImageId: 'b3bbdfabc4c38d7732cfb29f8fba352e',
      locality: 'Mudichur Road',
      areaName: 'Tambaram',
      costForTwo: '₹400 for two',
      cuisines: ['Pizzas', 'Pastas', 'Italian', 'Desserts', 'Beverages'],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: '152503',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 4900
          },
          {
            name: 'BASE_TIME'
          },
          {
            name: 'ANCILLARY_SURGE_FEE'
          }
        ],
        totalFee: 4900
      },
      parentId: '3534',
      avgRatingString: '4.1',
      totalRatingsString: '5K+',
      sla: {
        deliveryTime: 31,
        lastMileTravel: 4,
        serviceability: 'SERVICEABLE',
        slaString: '26-36 mins',
        lastMileTravelString: '4.0 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2023-08-28 00:00:00',
        opened: true
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹249',
        discountTag: 'FLAT DEAL',
        discountCalloutInfo: {
          message: 'Free Delivery',
          logoCtx: {
            logo: 'v1655895371/free_delivery_logo_hqipbo.png'
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/oven-story-pizza-mudichur-road-tambaram-chennai-152503',
      type: 'WEBLINK'
    }
  },
  {
    info: {
      id: '248146',
      name: 'NIC Ice Creams',
      cloudinaryImageId: 'c8b98c4064dc2fd6bdf350212e5f0bd5',
      locality: 'Elumalai Street',
      areaName: 'Tambaram',
      costForTwo: '₹120 for two',
      cuisines: ['Desserts', 'Ice Cream'],
      avgRating: 4.6,
      veg: true,
      feeDetails: {
        restaurantId: '248146',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 4400
          },
          {
            name: 'BASE_TIME'
          },
          {
            name: 'ANCILLARY_SURGE_FEE'
          }
        ],
        totalFee: 4400
      },
      parentId: '6249',
      avgRatingString: '4.6',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 21,
        lastMileTravel: 4,
        serviceability: 'SERVICEABLE',
        slaString: '21 mins',
        lastMileTravelString: '4.0 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2023-08-27 23:00:00',
        opened: true
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: '50% OFF',
        subHeader: 'UPTO ₹100',
        discountCalloutInfo: {
          message: 'Free Delivery',
          logoCtx: {
            logo: 'v1655895371/free_delivery_logo_hqipbo.png'
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/nic-ice-creams-elumalai-street-tambaram-chennai-248146',
      type: 'WEBLINK'
    }
  },
  {
    info: {
      id: '260746',
      name: 'Cafe Coffee Day',
      cloudinaryImageId: 'b925459fbc1faf59f02f7289eb079a74',
      locality: 'West Tambaram',
      areaName: 'Irumbuliyur',
      costForTwo: '₹300 for two',
      cuisines: [
        'Beverages',
        'Cafe',
        'Snacks',
        'Desserts',
        'Burgers',
        'Ice Cream',
        'Bakery',
        'Fast Food'
      ],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: '260746',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3700
          },
          {
            name: 'BASE_TIME'
          },
          {
            name: 'ANCILLARY_SURGE_FEE'
          }
        ],
        totalFee: 3700
      },
      parentId: '1',
      avgRatingString: '4.2',
      totalRatingsString: '500+',
      sla: {
        deliveryTime: 22,
        lastMileTravel: 2.2,
        serviceability: 'SERVICEABLE',
        slaString: '22 mins',
        lastMileTravelString: '2.2 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2023-08-27 23:30:00',
        opened: true
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C'
          }
        ]
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available'
                }
              }
            ]
          }
        }
      },
      aggregatedDiscountInfoV3: {
        header: '50% OFF',
        subHeader: 'UPTO ₹100',
        discountCalloutInfo: {
          message: 'Free Delivery',
          logoCtx: {
            logo: 'v1655895371/free_delivery_logo_hqipbo.png'
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/cafe-coffee-day-west-tambaram-irumbuliyur-chennai-260746',
      type: 'WEBLINK'
    }
  },
  {
    info: {
      id: '156196',
      name: 'The Good Bowl',
      cloudinaryImageId: '0b3356a88b6fc5966c452c4c9b1b5e4a',
      locality: 'Mudichur Road',
      areaName: 'Tambaram West',
      costForTwo: '₹400 for two',
      cuisines: [
        'Biryani',
        'North Indian',
        'Pastas',
        'Punjabi',
        'Desserts',
        'Beverages'
      ],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: '156196',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 4400
          },
          {
            name: 'BASE_TIME'
          },
          {
            name: 'ANCILLARY_SURGE_FEE'
          }
        ],
        totalFee: 4400
      },
      parentId: '7918',
      avgRatingString: '4.1',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 26,
        lastMileTravel: 4,
        serviceability: 'SERVICEABLE',
        slaString: '26 mins',
        lastMileTravelString: '4.0 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2023-08-28 00:00:00',
        opened: true
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        discountCalloutInfo: {
          message: 'Free Delivery',
          logoCtx: {
            logo: 'v1655895371/free_delivery_logo_hqipbo.png'
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/the-good-bowl-mudichur-road-tambaram-west-chennai-156196',
      type: 'WEBLINK'
    }
  },
  {
    info: {
      id: '152519',
      name: 'LunchBox - Meals and Thalis',
      cloudinaryImageId: 'qdiorb6pu0pzl4pvw2yl',
      locality: 'Mudichur Road',
      areaName: 'Tambaram',
      costForTwo: '₹200 for two',
      cuisines: [
        'Biryani',
        'North Indian',
        'Punjabi',
        'Healthy Food',
        'Desserts',
        'Beverages'
      ],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: '152519',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 4400
          },
          {
            name: 'BASE_TIME'
          },
          {
            name: 'ANCILLARY_SURGE_FEE'
          }
        ],
        totalFee: 4400
      },
      parentId: '4925',
      avgRatingString: '4.3',
      totalRatingsString: '5K+',
      sla: {
        deliveryTime: 27,
        lastMileTravel: 4,
        serviceability: 'SERVICEABLE',
        slaString: '27 mins',
        lastMileTravelString: '4.0 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2023-08-28 00:00:00',
        opened: true
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        discountCalloutInfo: {
          message: 'Free Delivery',
          logoCtx: {
            logo: 'v1655895371/free_delivery_logo_hqipbo.png'
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-mudichur-road-tambaram-chennai-152519',
      type: 'WEBLINK'
    }
  },
  {
    info: {
      id: '754874',
      name: 'Daalchini',
      cloudinaryImageId: '8a28ddb5e48a6cd7e37e0e9d501938b2',
      locality: 'Gst Road',
      areaName: 'POTHERI',
      costForTwo: '₹350 for two',
      cuisines: ['Tandoor', 'Chettinad', 'Continental', 'Indian'],
      avgRating: 5,
      feeDetails: {
        restaurantId: '754874',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3200
          },
          {
            name: 'BASE_TIME'
          },
          {
            name: 'ANCILLARY_SURGE_FEE'
          }
        ],
        totalFee: 3200
      },
      parentId: '16941',
      avgRatingString: '5.0',
      totalRatingsString: '7',
      sla: {
        deliveryTime: 23,
        lastMileTravel: 1.7,
        serviceability: 'SERVICEABLE',
        slaString: '23 mins',
        lastMileTravelString: '1.7 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2023-09-02 23:00:00',
        opened: true
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        discountCalloutInfo: {
          message: 'Free Delivery',
          logoCtx: {
            logo: 'v1655895371/free_delivery_logo_hqipbo.png'
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {}
    },
    analytics: {
      context: 'seo-data-a8313223-7149-4aa7-87b4-5c18cd8068ff'
    },
    cta: {
      link: 'https://www.swiggy.com/restaurants/daalchini-gst-road-potheri-chennai-754874',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK'
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo'
  },
  {
    info: {
      id: '129129',
      name: 'Spoons Restaurant - Kerala halal food zone',
      cloudinaryImageId: 'urchxfynl4zsw5iwqvjs',
      locality: 'Potheri',
      areaName: 'Srm Nagar',
      costForTwo: '₹200 for two',
      cuisines: [
        'Kerala',
        'Chinese',
        'South Indian',
        'North Indian',
        'Biryani',
        'Indian'
      ],
      avgRating: 4,
      feeDetails: {
        restaurantId: '129129',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3200
          },
          {
            name: 'BASE_TIME'
          },
          {
            name: 'ANCILLARY_SURGE_FEE'
          }
        ],
        totalFee: 3200
      },
      parentId: '192806',
      avgRatingString: '4.0',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 18,
        lastMileTravel: 2.5,
        serviceability: 'SERVICEABLE',
        slaString: '18 mins',
        lastMileTravelString: '2.5 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2023-09-02 22:00:00',
        opened: true
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: '60% OFF',
        subHeader: 'UPTO ₹120',
        discountTag: 'FOR YOU',
        headerTypeV2: 'HEADER_TYPE_V2_TOP_UP',
        discountCalloutInfo: {
          message: 'Free Delivery',
          logoCtx: {
            logo: 'v1655895371/free_delivery_logo_hqipbo.png'
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {}
    },
    analytics: {
      context: 'seo-data-a8313223-7149-4aa7-87b4-5c18cd8068ff'
    },
    cta: {
      link: 'https://www.swiggy.com/restaurants/spoons-restaurant-kerala-halal-food-zone-potheri-srm-nagar-chennai-129129',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK'
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo'
  },
  {
    info: {
      id: '543318',
      name: 'Alagappa Chettinadu Restaurant',
      cloudinaryImageId: 'jmgdqh2nflo1ccmasl28',
      locality: 'Opp Guduvanchery',
      areaName: 'Urapakkam',
      costForTwo: '₹160 for two',
      cuisines: ['Chettinad', 'South Indian', 'Beverages'],
      avgRating: 4,
      feeDetails: {
        restaurantId: '543318',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3200
          },
          {
            name: 'BASE_TIME'
          },
          {
            name: 'ANCILLARY_SURGE_FEE'
          }
        ],
        totalFee: 3200
      },
      parentId: '17457',
      avgRatingString: '4.0',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 16,
        lastMileTravel: 0.9,
        serviceability: 'SERVICEABLE',
        slaString: '16 mins',
        lastMileTravelString: '0.9 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2023-09-02 23:00:00',
        opened: true
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: '20% OFF',
        subHeader: 'ABOVE ₹700',
        discountTag: 'FLAT DEAL',
        discountCalloutInfo: {
          message: 'Free Delivery',
          logoCtx: {
            logo: 'v1655895371/free_delivery_logo_hqipbo.png'
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {}
    },
    analytics: {
      context: 'seo-data-a8313223-7149-4aa7-87b4-5c18cd8068ff'
    },
    cta: {
      link: 'https://www.swiggy.com/restaurants/alagappa-chettinadu-restaurant-opp-guduvanchery-urapakkam-chennai-543318',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK'
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo'
  },
  {
    info: {
      id: '413232',
      name: 'Suki Kolambu Kadai',
      cloudinaryImageId: 'x4xgdy94va6jpe6ercq1',
      locality: 'Urapakkam',
      areaName: 'Guduvancheri',
      costForTwo: '₹200 for two',
      cuisines: ['Indian'],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: '413232',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3200
          },
          {
            name: 'BASE_TIME'
          },
          {
            name: 'ANCILLARY_SURGE_FEE'
          }
        ],
        totalFee: 3200
      },
      parentId: '256371',
      avgRatingString: '4.2',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 14,
        lastMileTravel: 1.2,
        serviceability: 'SERVICEABLE',
        slaString: '14 mins',
        lastMileTravelString: '1.2 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2023-09-02 15:30:00',
        opened: true
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        discountCalloutInfo: {
          message: 'Free Delivery',
          logoCtx: {
            logo: 'v1655895371/free_delivery_logo_hqipbo.png'
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {}
    },
    analytics: {
      context: 'seo-data-a8313223-7149-4aa7-87b4-5c18cd8068ff'
    },
    cta: {
      link: 'https://www.swiggy.com/restaurants/suki-kolambu-kadai-urapakkam-guduvancheri-chennai-413232',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK'
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo'
  },
  {
    info: {
      id: '76818',
      name: 'LunchBox - Meals and Thalis',
      cloudinaryImageId: 'hfkugtzcckdozguzlutp',
      locality: 'GST Road',
      areaName: 'Srm Nagar',
      costForTwo: '₹200 for two',
      cuisines: [
        'Biryani',
        'North Indian',
        'Punjabi',
        'Healthy Food',
        'Desserts',
        'Beverages'
      ],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: '76818',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3200
          },
          {
            name: 'BASE_TIME'
          },
          {
            name: 'ANCILLARY_SURGE_FEE'
          }
        ],
        totalFee: 3200
      },
      parentId: '4925',
      avgRatingString: '4.2',
      totalRatingsString: '5K+',
      sla: {
        deliveryTime: 26,
        lastMileTravel: 2.3,
        serviceability: 'SERVICEABLE',
        slaString: '26 mins',
        lastMileTravelString: '2.3 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2023-09-03 02:00:00',
        opened: true
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        discountCalloutInfo: {
          message: 'Free Delivery',
          logoCtx: {
            logo: 'v1655895371/free_delivery_logo_hqipbo.png'
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {}
    },
    analytics: {
      context: 'seo-data-a8313223-7149-4aa7-87b4-5c18cd8068ff'
    },
    cta: {
      link: 'https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-gst-road-srm-nagar-chennai-76818',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK'
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo'
  },
  {
    info: {
      id: '70859',
      name: 'Golcondas',
      cloudinaryImageId: 'ay4bwzmyuclbz30ijbli',
      locality: 'OMR Food Street',
      areaName: 'Guduvancheri',
      costForTwo: '₹500 for two',
      cuisines: ['Hyderabadi', 'Andhra', 'North Indian'],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: '70859',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3200
          },
          {
            name: 'BASE_TIME'
          },
          {
            name: 'ANCILLARY_SURGE_FEE'
          }
        ],
        totalFee: 3200
      },
      parentId: '8878',
      avgRatingString: '4.2',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.5,
        serviceability: 'SERVICEABLE',
        slaString: '27 mins',
        lastMileTravelString: '2.5 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2023-09-02 23:00:00',
        opened: true
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C'
          }
        ]
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available'
                }
              }
            ]
          }
        }
      },
      aggregatedDiscountInfoV3: {
        header: '20% OFF',
        subHeader: 'UPTO ₹50',
        discountCalloutInfo: {
          message: 'Free Delivery',
          logoCtx: {
            logo: 'v1655895371/free_delivery_logo_hqipbo.png'
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {}
    },
    analytics: {
      context: 'seo-data-a8313223-7149-4aa7-87b4-5c18cd8068ff'
    },
    cta: {
      link: 'https://www.swiggy.com/restaurants/golcondas-omr-food-street-guduvancheri-chennai-70859',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK'
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo'
  },
  {
    info: {
      id: '753650',
      name: 'JUICE MAGIC',
      cloudinaryImageId: '0a7d7369dd339e294220e5e9f8a092dc',
      locality: 'GST Road',
      areaName: 'POTHERI',
      costForTwo: '₹300 for two',
      cuisines: ['Juices'],
      feeDetails: {
        restaurantId: '753650',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3200
          },
          {
            name: 'BASE_TIME'
          },
          {
            name: 'ANCILLARY_SURGE_FEE'
          }
        ],
        totalFee: 3200
      },
      parentId: '12529',
      avgRatingString: '--',
      sla: {
        deliveryTime: 22,
        lastMileTravel: 2.2,
        serviceability: 'SERVICEABLE',
        slaString: '22 mins',
        lastMileTravelString: '2.2 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2023-09-02 23:59:00',
        opened: true
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        discountCalloutInfo: {
          message: 'Free Delivery',
          logoCtx: {
            logo: 'v1655895371/free_delivery_logo_hqipbo.png'
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {}
    },
    analytics: {
      context: 'seo-data-a8313223-7149-4aa7-87b4-5c18cd8068ff'
    },
    cta: {
      link: 'https://www.swiggy.com/restaurants/juice-magic-gst-road-potheri-chennai-753650',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK'
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo'
  },
  {
    info: {
      id: '387615',
      name: 'Madurai Sri Muniyandi Vilas',
      cloudinaryImageId: 'fhveob5pub2fy75eta1c',
      locality: 'Gst Road',
      areaName: 'Guduvanchery',
      costForTwo: '₹200 for two',
      cuisines: ['Chinese', 'Seafood'],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: '387615',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3200
          },
          {
            name: 'BASE_TIME'
          },
          {
            name: 'ANCILLARY_SURGE_FEE'
          }
        ],
        totalFee: 3200
      },
      parentId: '129078',
      avgRatingString: '4.1',
      totalRatingsString: '100+',
      sla: {
        deliveryTime: 15,
        lastMileTravel: 1.8,
        serviceability: 'SERVICEABLE',
        slaString: '15 mins',
        lastMileTravelString: '1.8 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2023-09-02 16:00:00',
        opened: true
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        discountCalloutInfo: {
          message: 'Free Delivery',
          logoCtx: {
            logo: 'v1655895371/free_delivery_logo_hqipbo.png'
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {}
    },
    analytics: {
      context: 'seo-data-a8313223-7149-4aa7-87b4-5c18cd8068ff'
    },
    cta: {
      link: 'https://www.swiggy.com/restaurants/madurai-sri-muniyandi-vilas-gst-road-guduvanchery-chennai-387615',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK'
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo'
  },
  {
    info: {
      id: '138203',
      name: 'Krishna Bhavan',
      cloudinaryImageId: 'n0fwjyfo6wpmujduentk',
      locality: 'GST Road',
      areaName: 'Urapakkam',
      costForTwo: '₹250 for two',
      cuisines: ['South Indian', 'North Indian'],
      avgRating: 4.3,
      veg: true,
      feeDetails: {
        restaurantId: '138203',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3200
          },
          {
            name: 'BASE_TIME'
          },
          {
            name: 'ANCILLARY_SURGE_FEE'
          }
        ],
        totalFee: 3200
      },
      parentId: '17261',
      avgRatingString: '4.3',
      totalRatingsString: '5K+',
      sla: {
        deliveryTime: 16,
        lastMileTravel: 0.9,
        serviceability: 'SERVICEABLE',
        slaString: '16 mins',
        lastMileTravelString: '0.9 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2023-09-02 23:00:00',
        opened: true
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        discountCalloutInfo: {
          message: 'Free Delivery',
          logoCtx: {
            logo: 'v1655895371/free_delivery_logo_hqipbo.png'
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {}
    },
    analytics: {
      context: 'seo-data-a8313223-7149-4aa7-87b4-5c18cd8068ff'
    },
    cta: {
      link: 'https://www.swiggy.com/restaurants/krishna-bhavan-gst-road-urapakkam-chennai-138203',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK'
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo'
  },
  {
    info: {
      id: '45290',
      name: 'Oxygen',
      cloudinaryImageId: 'ihmmy6qqcln0yaebomwj',
      locality: 'POTHERI',
      areaName: 'Samundeeshweri Nagar',
      costForTwo: '₹200 for two',
      cuisines: [
        'Biryani',
        'Chettinad',
        'Chinese',
        'Grill',
        'North Indian',
        'Tandoor'
      ],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: '45290',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3200
          },
          {
            name: 'BASE_TIME'
          },
          {
            name: 'ANCILLARY_SURGE_FEE'
          }
        ],
        totalFee: 3200
      },
      parentId: '11462',
      avgRatingString: '3.9',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 21,
        lastMileTravel: 2.6,
        serviceability: 'SERVICEABLE',
        slaString: '21 mins',
        lastMileTravelString: '2.6 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2023-09-03 00:00:00',
        opened: true
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹249',
        discountTag: 'FLAT DEAL',
        discountCalloutInfo: {
          message: 'Free Delivery',
          logoCtx: {
            logo: 'v1655895371/free_delivery_logo_hqipbo.png'
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {}
    },
    analytics: {
      context: 'seo-data-a8313223-7149-4aa7-87b4-5c18cd8068ff'
    },
    cta: {
      link: 'https://www.swiggy.com/restaurants/oxygen-potheri-samundeeshweri-nagar-chennai-45290',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK'
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo'
  },
  {
    info: {
      id: '173224',
      name: 'Disco Biriyani',
      cloudinaryImageId: 'xirbc6v3zscmyj1tfc04',
      locality: 'Guduvanchery',
      areaName: 'Urapakkam',
      costForTwo: '₹300 for two',
      cuisines: ['Indian'],
      avgRating: 4,
      feeDetails: {
        restaurantId: '173224',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3200
          },
          {
            name: 'BASE_TIME'
          },
          {
            name: 'ANCILLARY_SURGE_FEE'
          }
        ],
        totalFee: 3200
      },
      parentId: '73353',
      avgRatingString: '4.0',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 16,
        lastMileTravel: 2.6,
        serviceability: 'SERVICEABLE',
        slaString: '16 mins',
        lastMileTravelString: '2.6 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2023-09-03 00:00:00',
        opened: true
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: '10% OFF',
        subHeader: 'ABOVE ₹159',
        discountTag: 'FLAT DEAL',
        discountCalloutInfo: {
          message: 'Free Delivery',
          logoCtx: {
            logo: 'v1655895371/free_delivery_logo_hqipbo.png'
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {}
    },
    analytics: {
      context: 'seo-data-a8313223-7149-4aa7-87b4-5c18cd8068ff'
    },
    cta: {
      link: 'https://www.swiggy.com/restaurants/disco-biriyani-guduvanchery-urapakkam-chennai-173224',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK'
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo'
  },
  {
    info: {
      id: '57865',
      name: 'Al Sham',
      cloudinaryImageId: 'f9k9ihl1lxc6znvmrfm6',
      locality: 'Guduvancherry',
      areaName: 'Jaibeemnagar',
      costForTwo: '₹400 for two',
      cuisines: ['Chinese', 'North Indian', 'South Indian'],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: '57865',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3200
          },
          {
            name: 'BASE_TIME'
          },
          {
            name: 'ANCILLARY_SURGE_FEE'
          }
        ],
        totalFee: 3200
      },
      parentId: '5435',
      avgRatingString: '4.1',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 24,
        lastMileTravel: 1.8,
        serviceability: 'SERVICEABLE',
        slaString: '24 mins',
        lastMileTravelString: '1.8 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2023-09-02 23:00:00',
        opened: true
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        discountCalloutInfo: {
          message: 'Free Delivery',
          logoCtx: {
            logo: 'v1655895371/free_delivery_logo_hqipbo.png'
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {}
    },
    analytics: {
      context: 'seo-data-a8313223-7149-4aa7-87b4-5c18cd8068ff'
    },
    cta: {
      link: 'https://www.swiggy.com/restaurants/al-sham-guduvancherry-jaibeemnagar-chennai-57865',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK'
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo'
  },
  {
    info: {
      id: '191483',
      name: 'The Biryani Life',
      cloudinaryImageId: 'j58x8jz8stssyyml28zh',
      locality: 'GST Road',
      areaName: 'Srm Nagar',
      costForTwo: '₹250 for two',
      cuisines: [
        'Biryani',
        'Mughlai',
        'Lucknowi',
        'Hyderabadi',
        'Kebabs',
        'Desserts',
        'Beverages'
      ],
      avgRating: 3.7,
      feeDetails: {
        restaurantId: '191483',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3200
          },
          {
            name: 'BASE_TIME'
          },
          {
            name: 'ANCILLARY_SURGE_FEE'
          }
        ],
        totalFee: 3200
      },
      parentId: '8496',
      avgRatingString: '3.7',
      totalRatingsString: '500+',
      sla: {
        deliveryTime: 26,
        lastMileTravel: 2.3,
        serviceability: 'SERVICEABLE',
        slaString: '26 mins',
        lastMileTravelString: '2.3 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2023-09-03 02:00:00',
        opened: true
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        discountCalloutInfo: {
          message: 'Free Delivery',
          logoCtx: {
            logo: 'v1655895371/free_delivery_logo_hqipbo.png'
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {}
    },
    analytics: {
      context: 'seo-data-a8313223-7149-4aa7-87b4-5c18cd8068ff'
    },
    cta: {
      link: 'https://www.swiggy.com/restaurants/the-biryani-life-gst-road-srm-nagar-chennai-191483',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK'
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo'
  },
  {
    info: {
      id: '263730',
      name: 'Shravan Specials by Lunchbox',
      cloudinaryImageId: 'mbqomptvjgi9xyoqg75j',
      locality: 'GST Road',
      areaName: 'Srm Nagar',
      costForTwo: '₹200 for two',
      cuisines: ['Biryani', 'North Indian', 'Desserts', 'Beverages'],
      avgRating: 4.2,
      veg: true,
      feeDetails: {
        restaurantId: '263730',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3200
          },
          {
            name: 'BASE_TIME'
          },
          {
            name: 'ANCILLARY_SURGE_FEE'
          }
        ],
        totalFee: 3200
      },
      parentId: '21938',
      avgRatingString: '4.2',
      totalRatingsString: '100+',
      sla: {
        deliveryTime: 22,
        lastMileTravel: 2.3,
        serviceability: 'SERVICEABLE',
        slaString: '22 mins',
        lastMileTravelString: '2.3 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2023-09-03 02:00:00',
        opened: true
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: '50% OFF',
        subHeader: 'UPTO ₹100',
        discountCalloutInfo: {
          message: 'Free Delivery',
          logoCtx: {
            logo: 'v1655895371/free_delivery_logo_hqipbo.png'
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {}
    },
    analytics: {
      context: 'seo-data-a8313223-7149-4aa7-87b4-5c18cd8068ff'
    },
    cta: {
      link: 'https://www.swiggy.com/restaurants/shravan-specials-by-lunchbox-gst-road-srm-nagar-chennai-263730',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK'
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo'
  }
];

const RES_MENU = [
  {
    card: {
      '@type': 'type.googleapis.com/swiggy.presentation.food.v2.Dish',
      info: {
        id: '123732241',
        name: 'Super Over Combo - Chicken',
        category: 'Cricket Mania Combos ( Save Rs 122)',
        description: '2Whopper Jr Chicken+2Med Fries+2Pepsi',
        imageId: '28ec9e7f61902f5dd1be6a091d3c12f6',
        inStock: 1,
        price: 63600,
        variants: {},
        variantsV2: {},
        itemAttribute: {
          vegClassifier: 'NONVEG'
        },
        ribbon: {},
        type: 'ITEM',
        itemBadge: {},
        badgesV2: {},
        ratings: {
          aggregatedRating: {
            rating: '3.0',
            ratingCount: '11 ratings',
            ratingCountV2: '11'
          }
        }
      },
      analytics: {},
      hideRestaurantDetails: true
    }
  },
  {
    card: {
      '@type': 'type.googleapis.com/swiggy.presentation.food.v2.Dish',
      info: {
        id: '123732242',
        name: 'Game Changer Combo - Veg',
        category: 'Cricket Mania Combos ( Save Rs 122)',
        description: '2Veg Whopper+2Med Fries+2Pepsi',
        imageId: 'f3493fdfb6c72748e9a7558dbf8a40ea',
        inStock: 1,
        isVeg: 1,
        price: 65600,
        variants: {},
        variantsV2: {},
        itemAttribute: {
          vegClassifier: 'VEG'
        },
        ribbon: {},
        type: 'ITEM',
        itemBadge: {},
        badgesV2: {},
        ratings: {
          aggregatedRating: {}
        }
      },
      analytics: {},
      hideRestaurantDetails: true
    }
  },
  {
    card: {
      '@type': 'type.googleapis.com/swiggy.presentation.food.v2.Dish',
      info: {
        id: '123732243',
        name: 'Game Changer Combo - Chicken',
        category: 'Cricket Mania Combos ( Save Rs 122)',
        description: '2Chicken Whopper+2Med Fries+2Pepsi',
        imageId: 'c8381149894036a48afe8cd6f250d6a4',
        inStock: 1,
        price: 69600,
        variants: {},
        variantsV2: {},
        itemAttribute: {
          vegClassifier: 'NONVEG'
        },
        ribbon: {},
        type: 'ITEM',
        itemBadge: {},
        badgesV2: {},
        ratings: {
          aggregatedRating: {}
        }
      },
      analytics: {},
      hideRestaurantDetails: true
    }
  },
  {
    card: {
      '@type': 'type.googleapis.com/swiggy.presentation.food.v2.Dish',
      info: {
        id: '123732244',
        name: 'The Hattick Combo - Veg',
        category: 'Cricket Mania Combos ( Save Rs 122)',
        description: '2Mexican Veg Whopper+2Med Fries+2Pepsi',
        imageId: '4a0c25bdd1b9b774bf8549802d3503ba',
        inStock: 1,
        isVeg: 1,
        price: 73600,
        variants: {},
        variantsV2: {},
        itemAttribute: {
          vegClassifier: 'VEG'
        },
        ribbon: {},
        type: 'ITEM',
        itemBadge: {},
        badgesV2: {},
        ratings: {
          aggregatedRating: {}
        }
      },
      analytics: {},
      hideRestaurantDetails: true
    }
  },
  {
    card: {
      '@type': 'type.googleapis.com/swiggy.presentation.food.v2.Dish',
      info: {
        id: '123732245',
        name: 'The Hattrick Combo - Chicken',
        category: 'Cricket Mania Combos ( Save Rs 122)',
        description: '2Mexican Chicken Whopper+2Med Fries+2Pepsi',
        imageId: '3e6587106d2df35985009ac256322347',
        inStock: 1,
        price: 77600,
        variants: {},
        variantsV2: {},
        itemAttribute: {
          vegClassifier: 'NONVEG'
        },
        ribbon: {},
        type: 'ITEM',
        itemBadge: {},
        badgesV2: {},
        ratings: {
          aggregatedRating: {}
        }
      },
      analytics: {},
      hideRestaurantDetails: true
    }
  }
];

const SWIGGY_API_URL =
  'https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';

const RES_URL =
  'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8438835&lng=80.05973639999999&restaurantId=';

const RES_MENU_IMG =
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/';

const ALLOW_CORS_ERROR_MSG =
  ("%cIMPORTANT: Unable to fetch live data from Swiggy due to a CORS issue. To see live data, please install a 'CORS-Allow' extension in your browser.",
  'color:red;font-family:system-ui;font-size:2rem;font-weight:bold');

const FAQ_LIST = [
  {
    Question: 'How does Bite-Dash work?',
    Answer:
      "Bite-Dash is a food delivery service that connects you with a variety of restaurants and eateries in your area. To place an order, simply download our app or visit our website, select your location, choose a restaurant, browse their menu, and add items to your cart. Once you're ready, proceed to checkout, and our delivery team will bring your delicious meal right to your doorstep."
  },
  {
    Question: 'What areas do you serve?',
    Answer:
      "We currently operate in [List of Cities or Regions]. However, we're continuously expanding, so keep an eye on our app or website for updates on new locations."
  },
  {
    Question: 'Is there a minimum order amount?',
    Answer:
      "The minimum order amount may vary depending on the restaurant you choose. You can find this information on the restaurant's page when browsing our app or website."
  },
  {
    Question: 'How long does delivery take?',
    Answer:
      'Delivery times vary based on factors such as your location, restaurant preparation times, and traffic conditions. On average, deliveries are completed within [Estimated Delivery Time]. You can track the status of your order in real-time using our app.'
  },
  {
    Question: 'What payment methods do you accept?',
    Answer:
      'We accept various payment methods, including credit and debit cards, digital wallets, and cash on delivery. Please check the app or website for the specific payment options available in your area.'
  },
  {
    Question: 'Can I modify or cancel my order?',
    Answer:
      'You can modify or cancel your order if the restaurant has not yet started preparing it. To do so, go to your order history in the app or website and follow the instructions provided. Keep in mind that once the restaurant begins preparing your food, modifications or cancellations may not be possible.'
  },
  {
    Question: 'What if there is an issue with my order?',
    Answer:
      "Your satisfaction is our priority. If you encounter any issues with your order, such as missing items or quality concerns, please contact our customer support team immediately. We'll work to resolve the problem promptly."
  },
  {
    Question: 'Do you offer any discounts or loyalty programs?',
    Answer:
      'Yes, we frequently offer promotions, discounts, and loyalty programs to our customers. Keep an eye on our app, website, and social media channels for the latest deals and offers.'
  },
  {
    Question: 'How can I contact customer support?',
    Answer:
      "You can reach our customer support team via email at contact@bite-dash.com or through the 'Contact Us' section of our app and website. We're here to assist you with any questions or concerns you may have."
  },
  {
    Question: 'How can I become a delivery partner for Bite-Dash?',
    Answer:
      "We're always looking for enthusiastic individuals to join our delivery team. To learn more about becoming a Bite-Dash delivery partner, please visit our 'Join Us' page on our website."
  }
];
export {
  LOCATIONS,
  CAROUSEL_DATA,
  SMALL_CAROUSEL_DATA,
  RESTAURANT_DATA,
  RES_MENU,
  RES_URL,
  SWIGGY_API_URL,
  ALLOW_CORS_ERROR_MSG,
  FAQ_LIST,
  RES_MENU_IMG
};
