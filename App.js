import React from "react";
import ReactDOM from "react-dom/client";

/*
Header:
- LOGO
- Nav items

Body:
- Search
- Restaurant container
- Restaurant card

Footer:
- Copyright
- Links
- Address
- Contact

*/

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/3/27/bc960282-e31e-4e77-97e9-6c6ec9cec813_c46e6499-a9ca-43e8-91d5-85aa6f0afa15.jpg"
      />
      <div className="res-details">
        <h3 className="res-title">Manis Biryani</h3>
        <h4 className="res-cusion">South Indian, Asian</h4>
        <h4 className="res-rating">4.3</h4>
      </div>
    </div>
  );
};

const RestaurantContainer = () => {
  return (
    <div className="res-container">
      <RestaurantCard />
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <RestaurantContainer />
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7wOSrMcqD_2sy8k4q3MXsoXbyORCJTVP7pQ&s"
          alt="food app logo"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
