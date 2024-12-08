import { useDispatch } from "react-redux";
import { CDN_IMG_URL } from "../utils/constants";
import { addItem } from "../utils/store/cartSlice";
import { useLocation } from "react-router";

const ItemList = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  const { pathname } = useLocation();
  return (
    <div>
      {item.map((item, index) => (
        <div key={item?.card.info.id} className="m-2 p-2 flex border-blue-200">
          <div className="w-9/12 text-left">
            <h3 className="text-lg px-2 font-bold">{item?.card?.info?.name}</h3>
            <h5 className="text-md font-bold px-2 my-2">
              ₹
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </h5>
            <p className="font-sm font-light  text-xs px-2">
              {item?.card?.info?.description}
            </p>
          </div>
          <div className="w-3/12">
            <img
              alt="xyz"
              className="w-40 h-auto mx-2 rounded-lg"
              src={CDN_IMG_URL + item.card.info.imageId}
            ></img>
            {pathname !== "/cart" && (
              <button
                className="ml-[50px] p-1 bg-black absolute text-white rounded-md"
                onClick={() => handleAddItem(item)}
              >
                Add+
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
