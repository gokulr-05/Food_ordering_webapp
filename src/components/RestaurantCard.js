import { IMG_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { title, cusion, rating, eta, imgId } = props;
  return (
    <div className="res-card">
      <img className="res-img" src={IMG_URL + imgId} />
      <div className="res-details">
        <h3 className="res-title">{title}</h3>
        <h4 className="res-cusion">{cusion.join(", ")}</h4>
        <h4 className="res-rating">{rating}</h4>
        <h4 className="res-eta">{eta}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
