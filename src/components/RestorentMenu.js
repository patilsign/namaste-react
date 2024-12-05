import { useEffect, useState } from "react";
import { API_MENU_RESTO, API_MENU_TEST } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestorentMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchRestoMenuData();
  }, []);

  const fetchRestoMenuData = async () => {
    const URL = API_MENU_TEST + resId;
    const data = await fetch(URL);
    const json = await data.json();
    console.log(json, "api data");
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }
  return (
    <div className="menu-container">
      {resInfo.cards.map((restorent, index) => (
        <div className="menu-items">
          <p>Restorent {index}</p>
          <p>{restorent?.card?.card?.info?.name}</p>
        </div>
      ))}
    </div>
  );
};

export default RestorentMenu;
