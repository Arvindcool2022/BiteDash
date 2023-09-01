import React from 'react';
import ReactDom from 'react-dom/client';
import logo from './chapter-04/delivery app logo.svg';

const restaurantList = [
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
  }
];

const carouselList = [
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

const locations = [
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

/*
header - sticky or fixed
    - div
        - logo
        - location -> canvas

    - navigation 
        - search -> inserts a search bar
        - offer 
        - help -> accordians and tabs
        - sign-in 
        - cart --> ????

section
    -div
        - 2 card carousel
    -div
        - dish type carousel
    -div
        - filters (if nav-bar crosses here it's contents changes to filter bar with small search)
    - container
        - dynamic cards

footer
    - links
    - copyrights
    - address 
    - contact
    - feedback
*/

const LocationNames = ({ array }) =>
  array.map(place => (
    <option key={place} className="header__options" value={place}>
      {place}
    </option>
  ));

const Header = () => {
  return (
    <header className="header">
      <div className="header__brand">
        <img className="header__logo" src={logo} alt="logo" />
        <h3 className="header__brand-name">dash door</h3>
        <select className="header__drop-down" name="location">
          <LocationNames array={locations} />
        </select>
      </div>
      <ul className="header__nav-list">
        <li className="header__nav-items">
          <i className="bi bi-search"></i>
          search
        </li>
        <li className="header__nav-items">
          <i className="bi bi-percent"></i>
          offer
        </li>
        <li className="header__nav-items">
          <i className="bi bi-info-circle"></i>
          help
        </li>
        <li className="header__nav-items">
          <i className="bi bi-person"></i>
          sign-in
        </li>
        <li className="header__nav-items">
          <button className="header__btn">
            <i className="bi bi-cart"></i>cart
          </button>
        </li>
      </ul>
    </header>
  );
};

const CarouselSlide = () => {};
const SmallCarouselItem = object => {
  return (
    <div className="sm-carousel__img-container">
      <img
        className="sm-carousel__img"
        src={`https://media-assets.swiggy.com/${object.object.imageId}`}
        alt="food"
      />
    </div>
  );
};

const Carousel = () => (
  <div className="carousel container">
    <h1 className="carousel-title">Best offers for you</h1>
    <div className="carousel__container">
      <div className="carousel__img-container">
        <img
          className="carousel__img"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/d51fc17ab1049acb3b4cda413f86fad5"
        />
      </div>
      <div className="carousel__img-container">
        <img
          className="carousel__img"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/28f92512e727f99bbb1c90d2f469b2de"
        />
      </div>
    </div>
  </div>
);

const SmallCarousel = () => (
  <div className="sm-carousel container">
    <h1 className="sm-carousel-title">What's in your mind?</h1>
    <div className="sm-carousel__container">
      {carouselList.map(item => (
        <SmallCarouselItem key={item.id} object={item} />
      ))}
      {/* <div className="sm-carousel__img-container">
        <img
          className="sm-carousel__img"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png"
          alt="food"
        />
      </div>
      <div className="sm-carousel__img-container">
        <img
          className="sm-carousel__img"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667626/PC_Creative%20refresh/South_Indian_4.png"
          alt="food"
        />
      </div>
      <div className="sm-carousel__img-container">
        <img
          className="sm-carousel__img"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png"
          alt="food"
        />
      </div>
      <div className="sm-carousel__img-container">
        <img
          className="sm-carousel__img"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png"
          alt="food"
        />
      </div>
      <div className="sm-carousel__img-container">
        <img
          className="sm-carousel__img"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png"
          alt="food"
        />
      </div>
      <div className="sm-carousel__img-container">
        <img
          className="sm-carousel__img"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/North_Indian_4.png"
          alt="food"
        />
      </div> */}
    </div>
  </div>
);

const Filters = () => (
  <div className="container">
    <h1 className="filter-title">
      Restaurants with online food delivery in Chennai
    </h1>
    <div
      className="filters"
      style={{ border: '1px #666 solid', font: '600 2rem' }}
    >
      filters come here
    </div>
  </div>
);

const Card = prop => {
  //   console.log(prop);
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    totalRatingsString,
    aggregatedDiscountInfoV3
  } = prop.restaurantObject;

  const discount1 = aggregatedDiscountInfoV3
    ? aggregatedDiscountInfoV3.header
    : '';
  const discount2 = aggregatedDiscountInfoV3
    ? aggregatedDiscountInfoV3.subHeader
    : '';

  return (
    <div className="card">
      <div className="card__img-container">
        <img
          className="card__img"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt="food"
        />
        {discount1 !== undefined && discount2 !== undefined && (
          <span>{`${discount1} ${discount2}`}</span>
        )}
      </div>
      <div className="card__body">
        <h3 className="card__title">{name}</h3>
        <p className="card__detail">{cuisines.join(', ')}</p>
        <p className="card__rating">
          {avgRating}
          <i className="bi bi-star-fill"></i>
          <span className="card__votes">({totalRatingsString})</span>
        </p>
      </div>
    </div>
  );
};

const CardContainer = () => (
  <div className="restaurant-container container">
    {restaurantList.map(restaurant => (
      <Card key={restaurant.info.id} restaurantObject={restaurant?.info} />
    ))}
  </div>
);

const MainSection = () => (
  <section className="main-section">
    <Carousel />
    <SmallCarousel />
    <Filters />
    <CardContainer />
  </section>
);

const Footer = () => {};

const AppLayout = () => (
  <div id="layout">
    <Header />
    <MainSection />
    <Footer />
  </div>
);

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
