import { useEffect, useState } from "react";
import { API_MENU_RESTO, API_MENU_TEST, RESTAURANT_MENU_API } from "./constants";
import { restorentMenuData }  from "./mockdata"

const useRestorentMenu = (resId) => {
/*   const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_MENU_API + resId);
    const json = await data.json;
    console.log(data,"api data")
    setResInfo(json.data);
  }; */
  return restorentMenuData;
};
export default useRestorentMenu;
