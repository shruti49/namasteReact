import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  const [filterdRestaurant, setFilteredRestaurant] = useState([]);

  const [searchedValue, setSearchedValue] = useState("");

  // console.log(useState());
  const handleClick = () => {
    const filteredList = restaurantList.filter(
      (resData) => resData.data.avgRating > 4
    );
    setFilteredRestaurant(filteredList);
  };

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //optional chaining
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
  };

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  const handleSearch = () => {
    if (searchedValue.length >= 2) {
      const filterBySearch = restaurantList.filter((resData) =>
        resData.data.name.toLowerCase().includes(searchedValue.toLowerCase())
      );
      setFilteredRestaurant(filterBySearch);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like you are offline.Check your internet connection</h1>;
  }

  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter flex items-center">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-black"
            value={searchedValue}
            onChange={(e) => setSearchedValue(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="rounded-lg bg-blue-300 px-4 py-1 ml-2 cursor-pointer"
          >
            Search
          </button>
        </div>
        <div className="filter-btn">
          <button
            onClick={() => handleClick(restaurantList)}
            className="rounded-lg bg-green-300 px-4 py-1 cursor-pointer"
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-between m-4">
        {filterdRestaurant.map((resData) => (
          <Link to={`/restaurants/${resData.data.id}`} key={resData.data.id}>
            <RestaurantCard resData={resData} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
