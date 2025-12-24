import { useState, useEffect } from "react";
import { getMenuById } from "../utils/constant";
import { useParams } from "react-router-dom";
import axios from "axios";

const RestaurantMenu = () => {
  const [menuList, setMenuList] = useState();
  const { resId } = useParams();

  const fetchData = async () => {
    const r1 = await axios.get(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=21477"
    );
    console.log("r1=", r1);

    // const res = await fetch(
    //   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=21477"
    // );
    // const data = await res.json();

    // console.log("menuData=", data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Restaurant Name</h1>
      <h2>Restaurant Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Pizza</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
