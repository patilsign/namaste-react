import RestorentCard from "./RestorentCard";
import { resList } from "../utils/mockdata";
import { useState } from "react";

export const Body = () => {
  let [listRestorents, setRestorentList] = useState(resList.data);
  return (
    <div className="body">
      <button classNlistRestorentsame="filter-btn" onClick={() => {
         const filteredResList = listRestorents.filter( (res) => res.avgRating >= 4);
          setRestorentList(filteredResList);
      }}>
        Top Rated Restorent
      </button>
      <div className="res-container">
        {listRestorents.map((item, index) => (
          <RestorentCard key={index} restData={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
