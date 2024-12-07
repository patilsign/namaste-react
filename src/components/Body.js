import { Link } from "react-router";
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
    console.log(jsonData, "main api data");
    const cards = jsonData?.data?.cards.slice(3);
    setRestorentList(cards);
    setFilterRestorentList(cards);
  };

  if (listRestorents.length === 0) {
    //return <h2>Loading...</h2>
    return <Shimmer />;
  }

  return (
    <div className="body bg-grey-50">
      <div className="m-4 p-4  border-black">
        <div className="m-1 p-1">
          <input
            className="m-1 p-1 bg-gray-300"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="m-1 p-1 bg-green-300 rounded-lg"
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

          <button
            className="m-1 p-1 bg-green-300 rounded-lg"
            onClick={() => {
              const filteredResList = listRestorents.filter(
                (res) => res?.card?.card?.info?.avgRating >= 4
              );
              setFilterRestorentList(filteredResList);
            }}
          >
            Top Rated Restorent
          </button>
        </div>
      </div>
      <div className="m-4 p-4 flex flex-wrap  border-black">
        {filterRestoList.map((item, index) => (
          <Link
            key={item?.card?.card?.info?.id}
            to={"/restorent/" + item?.card?.card?.info?.id}
          >
            <RestorentCard
              key={item?.card?.card?.info?.id}
              restData={item?.card?.card?.info}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
