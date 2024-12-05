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
    <div className="res-card">
      <img alt="res-img" src={CDN_IMG_URL + cloudinaryImageId}></img>
      <h4>{name}</h4>
      <h5>{avgRating} stars</h5>
      <h5>{deliveryTime} minutes</h5>
      <h5>{cuisines.join(", ")}</h5>
    </div>
  );
};

export default RestorentCard;
