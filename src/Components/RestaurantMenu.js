import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../Utilites/Constant";
import { useParams, Link } from "react-router-dom";
const RestaurantMenu = () => {
  const [info, setInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();

    console.log(json);
    setInfo(json.data);
  };

  if (info === null) return <Shimmer />;

  const { name, cuisines, costForTwo } = info?.cards[0]?.card?.card?.info;
  const {
    itemCards
  } = info.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  console.log(itemCards);

  return (
    <div className="Menu">
      <h1>{name}</h1>
      <h2>{cuisines}</h2>
      <p>{costForTwo}</p>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
