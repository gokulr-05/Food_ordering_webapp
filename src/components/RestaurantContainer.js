import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const RestaurantContainer = () => {
  return (
    <div className="res-container">
      {resList?.data?.cards.map((card) => {
        const { id, name, cuisines, avgRating, sla, cloudinaryImageId } =
          card?.card?.card?.info;
        return (
          <RestaurantCard
            key={id}
            title={name}
            cusion={cuisines}
            rating={avgRating}
            eta={sla?.slaString}
            imgId={cloudinaryImageId}
          />
        );
      })}
    </div>
  );
};

export default RestaurantContainer;
