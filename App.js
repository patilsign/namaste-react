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

const RestorentCard = () => (
  <div className="res-card">
    <img
      alt="res-img"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8xgP9LZJ3t4oQsSUffpdXPpIah-XbLanByA&s"
    ></img>
    <h4>Meghana Foods</h4>
    <h5>Rating 4.5</h5>
    <h5>20 min</h5>
    <h5>North Indian Food, Meals Special</h5>
  </div>
);
const Body = () => (
  <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
      <RestorentCard />
      <RestorentCard />
      <RestorentCard />
      <RestorentCard />
      <RestorentCard />
      <RestorentCard />
      <RestorentCard />
      <RestorentCard />
      <RestorentCard />
      <RestorentCard />
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
