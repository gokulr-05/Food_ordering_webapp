import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const RestaurantContainer = ({ restaurantList }) => {
  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="res-container">
      {restaurantList?.map((card) => {
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
