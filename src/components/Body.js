import RestaurantContainer from "./RestaurantContainer";
import { useState, useEffect } from "react";

const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {}}>
          Top Rated
        </button>
      </div>
      <RestaurantContainer />
    </div>
  );
};

export default Body;
