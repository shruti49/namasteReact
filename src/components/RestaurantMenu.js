import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import { MENU_API } from "../../utils/constants";

const RestaurantMenu = () => {
  const [restInfo, setRestInfo] = useState(null);

  const { resId } = useParams();

  const fetchMenu = async () => {
    const response = await fetch(`${MENU_API}${resId}`);
    const json = await response.json();
    console.log(json);
    setRestInfo(json.data);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  if (restInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || restInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {" Rs. "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
