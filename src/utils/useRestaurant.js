import { useState, useEffect, use } from "react";
import { getMenuById } from "../utils/constant";

const useRestaurant = (resId) => {
  const [resMenu, setResMenu] = useState();
  useEffect(() => {
    fetchResMenu();
  }, []);

  const fetchResMenu = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
        resId
    );
    const data = await res.json();
    console.log("resMenu data=", data);

    setResMenu(data);
  };

  return resMenu;
};

export default useRestaurant;
