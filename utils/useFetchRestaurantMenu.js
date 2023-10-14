import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useFetchRestaurantMenu = (resId) => {
  const [restInfo, setRestInfo] = useState(null);
  const [restCategories, setRestCategories] = useState(null);

  const fetchMenu = async () => {
    const response = await fetch(`${MENU_API}${resId}`);
    const json = await response.json();

    setRestInfo(json.data?.cards[0]?.card?.card?.info);
    setRestCategories(
      json.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c.card?.["card"]?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    );
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return {
    restInfo,
    restCategories,
  };
};

export default useFetchRestaurantMenu;
