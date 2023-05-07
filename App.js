import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.dribbble.com/users/1070235/screenshots/5325568/lightning_sewer.png"
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, deliveryTime, cloudinaryImageId } =
    props?.resData.data;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
      />
      <h3 className="">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};

const data = [
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "326440",
      "name": "Punjabi Angithi",
      "uuid": "5bf8a439-b300-4121-853d-05c0b2332031",
      "city": "4",
      "area": "Paschim Vihar",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "g2pklvjnapzfoc4ackou",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Punjabi",
        "Kebabs",
        "Tandoor"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 37,
      "minDeliveryTime": 37,
      "maxDeliveryTime": 37,
      "slaString": "37 MINS",
      "lastMileTravel": 5,
      "slugs": {
        "restaurant": "punjabi-angithi-paschim-vihar-paschim-vihar",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "32-22, A 4, DDA Market, Paschim Vihar, New Delhi",
      "locality": "DDA Market",
      "parentId": 4464,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "Flat ₹125 off",
        "shortDescriptionList": [
          {
            "meta": "Flat ₹125 off on orders above ₹249",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "₹125 OFF",
        "shortDescriptionList": [
          {
            "meta": "Use MATCHDEAL125",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 4900,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 4900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "4900",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6655289~p=4~eid=00000187-f0ea-6100-2f30-44ba00820455",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "326440",
        "deliveryTime": 37,
        "minDeliveryTime": 37,
        "maxDeliveryTime": 37,
        "lastMileTravel": 5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.1",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "498382",
      "name": "Burger King",
      "uuid": "763f7df3-d4ff-4ade-b7a0-e185bbb211c4",
      "city": "4",
      "area": "Rohini",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "28fb13049b4e55297bb3f703cde63c35",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "tags": [
        
      ],
      "costForTwo": 35000,
      "costForTwoString": "₹350 FOR TWO",
      "deliveryTime": 24,
      "minDeliveryTime": 24,
      "maxDeliveryTime": 24,
      "slaString": "24 MINS",
      "lastMileTravel": 2,
      "slugs": {
        "restaurant": "burger-king-m2k-mall-rohini",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "Shop No 3 to 10, Ground Floor,M2K Mall, Manglam Palace, District Centre,Sector-3, Rohini, Delhi - 110085",
      "locality": "M2K Mall",
      "parentId": 166,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "Get every item under 129",
        "shortDescriptionList": [
          {
            "meta": "Get every item under 129",
            "discountType": "FinalPrice",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Get every item under 129",
            "discountType": "FinalPrice",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "",
        "shortDescriptionList": [
          {
            "meta": "",
            "discountType": "FinalPrice",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Get every item under 129",
            "discountType": "FinalPrice",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3100,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3100",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "498382",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "lastMileTravel": 2,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.3",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "254192",
      "name": "McDonald's",
      "uuid": "84f736b1-0f83-460b-95c0-931d275fa63b",
      "city": "4",
      "area": "Rohini",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "1293a58ab5610f4c730c3d8cb6ac1b65",
      "cuisines": [
        "American"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 27,
      "minDeliveryTime": 27,
      "maxDeliveryTime": 27,
      "slaString": "27 MINS",
      "lastMileTravel": 2,
      "slugs": {
        "restaurant": "mcdonalds-delhi-d-mall-rohini-rohini",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "Delhi D-Mall Rohini, Plot No. 1B5, Twin District Center. D-Mall , Sector-10, Rohini,New Delhi- 110085",
      "locality": "Sector 10",
      "parentId": 630,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3100,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3100",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "254192",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "lastMileTravel": 2,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.3",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "36900",
      "name": "Wah Bhai Wah",
      "uuid": "7ebbf893-5282-4cd2-8599-0b96126e6c83",
      "city": "4",
      "area": "Rohini",
      "totalRatingsString": "5000+ ratings",
      "cloudinaryImageId": "ach30rz8ebyckifblioq",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Tandoor",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 20,
      "minDeliveryTime": 20,
      "maxDeliveryTime": 20,
      "slaString": "20 MINS",
      "lastMileTravel": 0.4000000059604645,
      "slugs": {
        "restaurant": "wah-bhai-wah-rohini-rohini",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "A 1/168 & 169, Sector 4, Rohini, New Delhi",
      "locality": "Sector 4",
      "parentId": 14882,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "Flat ₹125 off",
        "shortDescriptionList": [
          {
            "meta": "Flat ₹125 off on orders above ₹249",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "₹125 OFF",
        "shortDescriptionList": [
          {
            "meta": "Use MATCHDEAL125",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3100,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3100",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.4 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "36900",
        "deliveryTime": 20,
        "minDeliveryTime": 20,
        "maxDeliveryTime": 20,
        "lastMileTravel": 0.4000000059604645,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.7",
      "totalRatings": 5000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "389326",
      "name": "Bittoo Samosay Wala",
      "uuid": "b784d46d-78f4-4169-a7e9-6a57527a629f",
      "city": "4",
      "area": "Rohini",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "aawlxgtno7oq9qfylkrf",
      "cuisines": [
        "Snacks",
        "Chinese",
        "Chaat"
      ],
      "tags": [
        
      ],
      "costForTwo": 19900,
      "costForTwoString": "₹199 FOR TWO",
      "deliveryTime": 14,
      "minDeliveryTime": 14,
      "maxDeliveryTime": 14,
      "slaString": "14 MINS",
      "lastMileTravel": 0.20000000298023224,
      "slugs": {
        "restaurant": "bittoo-samosay-wala-rohini-rohini",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "Shop no. - E19/312, Rohini sec- 3, New Delhi-110085",
      "locality": "Sector 3",
      "parentId": 242406,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3100,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3100",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.2 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "389326",
        "deliveryTime": 14,
        "minDeliveryTime": 14,
        "maxDeliveryTime": 14,
        "lastMileTravel": 0.20000000298023224,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.7",
      "totalRatings": 500,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "15680",
      "name": "Wow! Momo",
      "uuid": "7a824467-5494-4008-8ef4-5bd6a02e1d31",
      "city": "4",
      "area": "Fun City Mall",
      "totalRatingsString": "5000+ ratings",
      "cloudinaryImageId": "90ac3da2963978f866177263fba805a7",
      "cuisines": [
        "Tibetan",
        "Healthy Food",
        "Asian",
        "Chinese",
        "Snacks",
        "Continental",
        "Desserts",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 30,
      "minDeliveryTime": 30,
      "maxDeliveryTime": 30,
      "slaString": "30 MINS",
      "lastMileTravel": 4.699999809265137,
      "slugs": {
        "restaurant": "wow-momo-fun-city-mall-rohini",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "G-25, Fun City Mall, Prashant Vihar, New Delhi",
      "locality": "Prashant Vihar",
      "parentId": 1776,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "Flat ₹150 off",
        "shortDescriptionList": [
          {
            "meta": "Flat ₹150 off on orders above ₹499",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Flat ₹150 off on orders above ₹499 | Use code FLAT150",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "₹150 OFF",
        "shortDescriptionList": [
          {
            "meta": "Use FLAT150",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Flat ₹150 off on orders above ₹499 | Use code FLAT150",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 4300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 4300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "4300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6687597~p=7~eid=00000187-f0ea-6100-2f30-44bb0082073c",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "4.6 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "15680",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "lastMileTravel": 4.699999809265137,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "3.9",
      "totalRatings": 5000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "527022",
      "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
      "uuid": "14b720e9-cd6b-41c2-a7a6-cfe13fe563c4",
      "city": "4",
      "area": "Rohini",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "fwt0aistxh5kxktq8yzx",
      "cuisines": [
        "Desserts",
        "Ice Cream",
        "Ice Cream Cakes"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 16,
      "minDeliveryTime": 16,
      "maxDeliveryTime": 16,
      "slaString": "16 MINS",
      "lastMileTravel": 0.4000000059604645,
      "slugs": {
        "restaurant": "kwality-walls-frozen-dessert-and-ice-cream-shop-rohini-rohini-26",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "NAMAN ENTERPRISES: 31 A KH.NO. 87/73/2,GF Block-A GuruGovind Vihar Rohini Phase 2 ,RITHALA, Rohini, North West, Delhi-110085 (HUL- I323429P8)",
      "locality": "Rithala",
      "parentId": 582,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3100,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3100",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.4 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "527022",
        "deliveryTime": 16,
        "minDeliveryTime": 16,
        "maxDeliveryTime": 16,
        "lastMileTravel": 0.4000000059604645,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.3",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "24826",
      "name": "Burger Junction",
      "uuid": "fef11200-96d2-442f-809a-7f624e9e9f20",
      "city": "4",
      "area": "Rohini",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "xjsmqn4v8hijywwms3p8",
      "cuisines": [
        "American",
        "Italian",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 23,
      "minDeliveryTime": 23,
      "maxDeliveryTime": 23,
      "slaString": "23 MINS",
      "lastMileTravel": 0.6000000238418579,
      "slugs": {
        "restaurant": "burger-junction-rohini-sector-23-dividing-road-rohini",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "E-21/157, Sector 2/3 Dividing Road, Rohini, New Delhi",
      "locality": "Dividing Road",
      "parentId": 2748,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "15% off",
        "shortDescriptionList": [
          {
            "meta": "15% off | Use PARTY",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "15% off | Use code PARTY",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "15% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use PARTY",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "15% off | Use code PARTY",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3100,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3100",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.6 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "24826",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "lastMileTravel": 0.6000000238418579,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.7",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "230670",
      "name": "KFC",
      "uuid": "93dc94f9-b8f9-47e5-a023-5676319c87ba",
      "city": "4",
      "area": "Paschim Vihar",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 45,
      "minDeliveryTime": 45,
      "maxDeliveryTime": 45,
      "slaString": "45 MINS",
      "lastMileTravel": 6.099999904632568,
      "slugs": {
        "restaurant": "kfc-kfc-punjabi-bagh-paschim-vihar",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "Magical foods pvt. Ltd, Plot no - 1 BG1 & 2, Paschim vihar delhi -110063",
      "locality": "ARSS Mall",
      "parentId": 547,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "40% off",
        "shortDescriptionList": [
          {
            "meta": "40% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "40% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 5500,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 5500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "5500",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6679501~p=19~eid=00000187-f0ea-6100-2f30-44bf00821340",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "6 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "230670",
        "deliveryTime": 45,
        "minDeliveryTime": 45,
        "maxDeliveryTime": 45,
        "lastMileTravel": 6.099999904632568,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.1",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "678399",
      "name": "Wah Ji Wah",
      "uuid": "b619dc25-fddf-4b34-b6b3-1fc1f83f088c",
      "city": "4",
      "area": "Rohini",
      "totalRatingsString": "Too Few Ratings",
      "cloudinaryImageId": "4371ea20a925a4be398232931ff0e320",
      "cuisines": [
        "Pizzas",
        "Beverages",
        "Snacks",
        "Indian",
        "Sweets"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 26,
      "minDeliveryTime": 26,
      "maxDeliveryTime": 26,
      "slaString": "26 MINS",
      "lastMileTravel": 1.7999999523162842,
      "slugs": {
        "restaurant": "wah-ji-wah-rohini-rohini-8",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "2B, FIRST FLOOR,AVANTIKA ENCLAVE ROHINI-110085 ,MANGOL PUR KHURD,Rohini,North West ,Delhi-110085\t",
      "locality": "Avantika enclave",
      "parentId": 966,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "30% off",
        "shortDescriptionList": [
          {
            "meta": "30% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "30% off up to ₹75 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "30% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "30% off up to ₹75 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3100,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3100",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.7 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "678399",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "lastMileTravel": 1.7999999523162842,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "--",
      "totalRatings": 0,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "365223",
      "name": "Samosa Fusion",
      "uuid": "1b649ce0-c312-4a09-81dd-847bd277c7d5",
      "city": "4",
      "area": "Rohini",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "cryv5c0c5mwn8fnmy35y",
      "cuisines": [
        "Snacks",
        "Pizzas",
        "Burgers"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 19,
      "minDeliveryTime": 19,
      "maxDeliveryTime": 19,
      "slaString": "19 MINS",
      "lastMileTravel": 0.800000011920929,
      "slugs": {
        "restaurant": "samosa-fusion-rohini-rohini",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "HOUSE NO. 60, BLOCK - B, PKT 9, SEC 3, LANDMARK NEAR MOTHER DAIRY BOTH, ROHINI, NEW DELHI, ROHINI, NORTH WEST (DELHI) - 110085",
      "locality": "SEC 3",
      "parentId": 176544,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3100,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3100",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.8 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "365223",
        "deliveryTime": 19,
        "minDeliveryTime": 19,
        "maxDeliveryTime": 19,
        "lastMileTravel": 0.800000011920929,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.1",
      "totalRatings": 500,
      "new": false
    },
    "subtype": "basic"
  }]

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {data.map((resData) => (
          <RestaurantCard key={resData.data.id} resData={resData} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
