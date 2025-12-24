export const IMG_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const getMenuById = (redId) => {
  return `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9102677&lng=80.236662&restaurantId=${redId}&catalog_qa=undefined&query=Biryani&submitAction=ENTER`;
};
