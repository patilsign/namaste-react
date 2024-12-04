import RestorentCard from "./RestorentCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";

export const Body = () => {
  let [listRestorents, setRestorentList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const jsonData = await data.json();
    const cards = (jsonData?.data?.cards).slice(3);
    setRestorentList(cards);
  };

  if (listRestorents.length === 0) {
    //return <h2>Loading...</h2>
    return <Shimmer />;
  }

  return (
    <div className="body">
      <button
        classNlistRestorentsame="filter-btn"
        onClick={() => {
          const filteredResList = listRestorents.filter(
            (res) => res.avgRating >= 4
          );
          setRestorentList(filteredResList);
        }}
      >
        Top Rated Restorent
      </button>
      <div className="res-container">
        {listRestorents.map((item, index) => (
          <RestorentCard key={index} restData={item?.card?.card?.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
