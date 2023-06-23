import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useFetchRestaurantMenu = (resId) => {
  const [restInfo, setRestInfo] = useState(null);

  const fetchMenu = async () => {
    const response = await fetch(`${MENU_API}${resId}`);
    const json = await response.json();

    setRestInfo(json.data);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return restInfo;
};

export default useFetchRestaurantMenu;
