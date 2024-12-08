import { useEffect, useState } from "react";
import { RESTORENT_API } from "./constants";
import { restData } from "./mockdata";

const useRestorents = () => {
  /* const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTORENT_API);
    const jsonData = await data.json;
    console.log(data, "main restorent api data");
   // setResInfo(json.data);
  }; */
  return restData.data.cards[4];
};
export default useRestorents;
