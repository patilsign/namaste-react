import RestorentCard from "./RestorentCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";

export const Body = () => {
  const [listRestorents, setRestorentList] = useState([]);
  const [filterRestoList, setFilterRestorentList] = useState([]);
  const [searchText, setSearchText] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const jsonData = await data.json();
    const cards = (jsonData?.data?.cards).slice(3);
    setRestorentList(cards);
    setFilterRestorentList(cards);
  };

  if (listRestorents.length === 0) {
    //return <h2>Loading...</h2>
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search-filter">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filterRestoList = listRestorents.filter((res) =>
              res?.card?.card?.info?.name
                .toLowerCase()
                .includes(searchText?.toLowerCase())
            );
            setFilterRestorentList(filterRestoList);
          }}
        >
          Search
        </button>
      </div>
      <button
        className="filter-btn"
        onClick={() => {
          const filteredResList = listRestorents.filter(
            (res) => res?.card?.card?.info?.avgRating >= 4
          );
          setFilterRestorentList(filteredResList);
        }}
      >
        Top Rated Restorent
      </button>
      <div className="res-container">
        {filterRestoList.map((item, index) => (
          <RestorentCard key={index} restData={item?.card?.card?.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
