import { CDN_IMG_URL, IMG_URL } from "../utils/constants";

const RestorentCard = (props) => {
  const {
    name,
    avgRating,
    cloudinaryImageId,
    cuisines,
    deliveryTime,
  } = props.restData;
  return (
    <div className="m-2 p-2 bg-gray-100 w-[185px] h-auto rounded-md hover:bg-gray-200">
      <img className="w-52 h-40 rounded-lg" alt="res-img" src={CDN_IMG_URL + cloudinaryImageId}></img>
      <h4 className="font-bold mt-1 mb-1">{name}</h4>
      <h5 className="font-light mt-1 mb-1">{avgRating} stars</h5>
      <h5 className="font-light mt-1 mb-1">{deliveryTime} minutes</h5>
      <h5 className="font-light mt-1 mb-1">{cuisines.join(", ")}</h5>
    </div>
  );
};

export default RestorentCard;
