import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../Utilites/Constant";
import { useParams, Link } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const [info, setInfo] = useState(null);
  const[showIndex, setShowIndex] = useState(null)

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();

    
    setInfo(json.data);
  };

  if (info === null) return <Shimmer />;

  const { name, cuisines, costForTwo } = info?.cards[0]?.card?.card?.info;
  const {
    itemCards,title
  } = info.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  const categories  = info.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter((c) =>
   c.card?.card?.["@type"] ===  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  
  
  console.log(categories)

  return ( 
    <div className="text-center">
      <h1 className="text-2xl font-bold my-5">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwo}</p>
      <div>
       {categories.map((cat,index) => (
        <RestaurantCategory key= {cat.card.card.title } data={cat?.card?.card} showData = {showIndex === index ? true: false } 
        setShowIndex={() => {setShowIndex(index)}}/>
       ) )}
           
      </div>
      
     
    </div>
  );
};

export default RestaurantMenu;



 {/* <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </ul> */}