import { useEffect, useState, useContext } from "react";
import ItemList from "./ItemList";
import Shimmer from "./Shimmer";
import UserContext from "../utils/UserContext";

const RestorentCategory = ({ category, showItems, setShowIndex }) => {
  const data = useContext(UserContext);
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="w-6/12 mx-auto shadow-lg"  onClick={handleClick}>
      <div className="justify-between flex border-b-gray-600 bg-slate-200">
        <span
          className="m-1 p-4 font-bold text-md bg-gray  border-b-black"
        >
          {category?.title} ({category?.itemCards.length}) | {data.loggedInUser}
        </span>
        <span className="font-bold m-4 p-4 ">^</span>
      </div>
      <div>{showItems && <ItemList item={category?.itemCards} />}</div>
    </div>
  );
};

export default RestorentCategory;
