import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
  <div className="header">
    <div className="logo">
      <img
        alt="logo"
        src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018"
      ></img>
    </div>
    <div>
      <ul className="nav-items">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const restList = {
  data: [
    {
      img_url:
        "https://b.zmtcdn.com/data/pictures/4/19982534/1e983c74000b2d5490e9d38baff441f5_featured_v2.jpg?output-format=webp",
      restName: "KFC",
      cuisines: ["Burgers", "pizza", "chips", "finger chips"],
      deliveryTime: 30,
      avgRating: 4.5,
    },
    {
      img_url:
        "https://b.zmtcdn.com/data/pictures/4/19982534/1e983c74000b2d5490e9d38baff441f5_featured_v2.jpg?output-format=webp",
      restName: "Bavarchi",
      cuisines: ["Burgers", "pizza", "chips", "finger chips"],
      deliveryTime: 30,
      avgRating: 4.5,
    },
    {
      img_url:
        "https://b.zmtcdn.com/data/pictures/4/19982534/1e983c74000b2d5490e9d38baff441f5_featured_v2.jpg?output-format=webp",
      restName: "Paradice",
      cuisines: ["Burgers", "pizza", "chips", "finger chips"],
      deliveryTime: 30,
      avgRating: 4.5,
    },
    {
      img_url:
        "https://b.zmtcdn.com/data/pictures/4/19982534/1e983c74000b2d5490e9d38baff441f5_featured_v2.jpg?output-format=webp",
      restName: "DOminos",
      cuisines: ["Burgers", "pizza", "chips", "finger chips"],
      deliveryTime: 30,
      avgRating: 4.5,
    },
    {
      img_url:
        "https://b.zmtcdn.com/data/pictures/4/19982534/1e983c74000b2d5490e9d38baff441f5_featured_v2.jpg?output-format=webp",
      restName: "Manaco",
      cuisines: ["Burgers", "pizza", "chips", "finger chips"],
      deliveryTime: 30,
      avgRating: 4.5,
    },
    {
      img_url:
        "https://b.zmtcdn.com/data/pictures/4/19982534/1e983c74000b2d5490e9d38baff441f5_featured_v2.jpg?output-format=webp",
      restName: "Pizzahut",
      cuisines: ["Burgers", "pizza", "chips", "finger chips"],
      deliveryTime: 30,
      avgRating: 4.5,
    },
  ],
};

const RestorentCard = (props) => {
  const { restName, avgRating, cuisines, img_url, deliveryTime } =
    props.restData;
  return (
    <div className="res-card">
      <img alt="res-img" src={img_url}></img>
      <h4>{restName}</h4>
      <h5>{avgRating}</h5>
      <h5>{deliveryTime}</h5>
      <h5>{cuisines.join(" ")}</h5>
    </div>
  );
};

const Body = () => (
  <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
      {restList.data.map((item, index) => (
        <RestorentCard key={index} restData={item} />
      ))}
    </div>
  </div>
);

const AppLayout = () => (
  <div className="container">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
