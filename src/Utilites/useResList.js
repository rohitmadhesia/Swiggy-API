import { useEffect, useState } from "react";
import { RES_LIST } from "./Constant";
const useResList = () => {
  const [list, setList] = useState([]);
  const [filterRes, setFilterRes] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_LIST);
    const json = await data.json();
    console.log(json);
    setList(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilterRes(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  return list;
};

export default useResList;
