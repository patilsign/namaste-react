import { useEffect, useState } from "react";
import useRestorentMenu from "../utils/useRestorentMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import RestorentCategory from "./RestorentCategory";

const RestorentMenu = () => {
  const [restorentMenuList, setrestorentMenuList] = useState([]);
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  const resInfo = useRestorentMenu(resId);

  const minifiedMenu =
    resInfo?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards;

  const itemList = minifiedMenu.filter((item) => {
    return (
      item.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });
  useEffect(() => {
    setrestorentMenuList(itemList);
  }, []);

  if (restorentMenuList === null) {
    return <Shimmer />;
  }

  return (
    <div className="m-4 p-4 border-black">
      {restorentMenuList.map((item, index) => (
        <RestorentCategory
          key={item?.card?.card?.title}
          category={item?.card?.card}
          showItems={index == showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestorentMenu;
