import { useState } from "react";
import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import useFetchRestaurantMenu from "../../utils/useFetchRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(null);

  const restInfo = useFetchRestaurantMenu(resId);

  if (restInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restInfo?.cards[0]?.card?.card?.info;

  const categories =
    restInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-6">{name}</h1>
      <p className="font-semibold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <div>
        {categories.map((category, index) => (
          <RestaurantCategory
            data={category?.card?.card}
            key={category?.card?.card?.title}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
