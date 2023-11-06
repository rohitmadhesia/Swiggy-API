import Card from "./Card";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_LIST } from "../Utilites/Constant";
import useResList from "../Utilites/useResList";
import useOnline from "../Utilites/useOnline";
const Body = () => {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  const [filterRes, setFilterRes] = useState([]);

  const info = useResList();
  const windoOnline = useOnline();

  const filterHandler = () => {
    const filter = list.filter((res) => res.info.avgRating > 4);
    setList(filter);
  };

  // const handleEvent = (e) => {
  //   setSearch(e.target.value);
  // };

  // const filterSearch = () => {
  //   const filternew = newser.filter((list) => list.info.name);
  //   setnewSer(filternew);
  // };
  // console.log(filterSearch);
  console.log(info);

  if (windoOnline === false) return <h1>opps your internet is not working</h1>;

  return info.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex m-10 gap-10">
        <button className=" border-solid border-2 px-10 bg-pink-200 rounded-md py-2" onClick={filterHandler}>Top Restaurant</button>
        <div>
          <input className="border border-solid border-blue-300 py-2"
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
          className="border-solid border-2 px-10 bg-pink-200 rounded-md py-2"
            onClick={() => {
              const searchfilter = list.filter((res) =>
                res.info.name.toLowerCase().includes(search.toLowerCase())
              );
              setFilterRes(searchfilter);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {info.map((resturent) => (
          <Link key={resturent.info.id} to={"/restaurant/" + resturent.info.id}>
            <Card apiData={resturent} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
