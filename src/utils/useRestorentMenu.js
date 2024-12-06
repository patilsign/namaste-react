import { useEffect, useState } from "react";
import { API_MENU_RESTO, API_MENU_TEST } from "./constants";

const useRestorentMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_MENU_TEST + resId);
    const json = await data.json;
    console.log(data,"api data")
    setResInfo(json.data);
  };
  return resInfo;
};
export default useRestorentMenu;
