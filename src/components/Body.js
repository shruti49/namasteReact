import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  const [filterdRestaurant, setFilteredRestaurant] = useState([]);

  const [searchedValue, setSearchedValue] = useState("");

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

  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchedValue}
            onChange={(e) => setSearchedValue(e.target.value)}
          />
          <button onClick={handleSearch}>search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => handleClick(restaurantList)}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filterdRestaurant.map((resData) => (
          <Link to={`/restaurants/${resData.data.id}`} key={resData.data.id}>
            <RestaurantCard resData={resData} />
          </Link>
          // <RestaurantCard resData={resData} key={resData.data.id}/>
        ))}
      </div>
    </div>
  );
};

export default Body;
