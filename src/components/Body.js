import RestorentCard from "./RestorentCard";
import { restList } from "../utils/mockdata";

export const Body = () => (
  <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
      {restList.data.map((item, index) => (
        <RestorentCard key={index} restData={item} />
      ))}
    </div>
  </div>
);

export default Body;
