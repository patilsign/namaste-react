
import { Link } from "react-router";
import RestorentCard, { withRestorentLabel } from "./RestorentCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import useRestorents from "../utils/useRestorents";

const Body = () => {
  const [listRestorents, setRestorentList] = useState([]);
  const [filterRestoList, setFilterRestoList] = useState([]);

  const RestorentCardPromoted = withRestorentLabel(RestorentCard);
  
  const [searchText, setSearchText] = useState();
  const restorentData = useRestorents();
  const minifiedData =
    restorentData?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  useEffect(() => {
    setRestorentList(minifiedData);
    setFilterRestoList(minifiedData);
  }, []);

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
                res?.info?.name
                  .toLowerCase()
                  .includes(searchText?.toLowerCase())
              );
              setFilterRestoList(filterRestoList);
            }}
          >
            Search
          </button>

          <button
            className="m-1 p-1 bg-green-300 rounded-lg"
            onClick={() => {
              const filteredResList = listRestorents.filter(
                (res) => res?.info?.avgRating >= 4
              );
              setFilterRestoList(filteredResList);
            }}
          >
            Top Rated Restorent
          </button>
        </div>
      </div>
      {
        <div className="m-4 p-4 flex flex-wrap  border-black">
          {filterRestoList.map((item, index) => (
            <Link key={index} to={"/restorent/" + item?.info?.id}>
              {index == 5 ? (
                <RestorentCardPromoted restData={item?.info} />
              ) : (
                <RestorentCard key={index} restData={item?.info} />
              )}
            </Link>
          ))}
        </div>
      }
    </div>
  );
};
export default Body;
