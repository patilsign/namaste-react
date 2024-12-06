import useRestorentMenu from "../utils/useRestorentMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestorentMenu = () => {
     
  const { resId } = useParams();
  const resInfo = useRestorentMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }
  return (
    <div className="menu-container">
      {resInfo?.cards?.map((restorent, index) => (
        <div className="menu-items">
          <p>Restorent {index}</p>
          <p>{restorent?.card?.card?.info?.name}</p>
        </div>
      ))}
    </div>
  );
};

export default RestorentMenu;
