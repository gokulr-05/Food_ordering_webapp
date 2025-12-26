import RestaurantContainer from './RestaurantContainer';
import { useState, useEffect } from 'react';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);

  console.log('restaurantList=', restaurantList);

  const isOnline = useOnlineStatus();
  console.log('restaurantList=', restaurantList);

  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9102677&lng=80.236662&collection=80424&tags=layout_CCS_Dosa&sortBy=&filters=&type=rcv2&offset=0&page_type=null',
    );
    const data = await response.json();

    const properResList = data?.data?.cards?.filter(
      (data) => data?.card?.card?.info !== undefined,
    );

    setRestaurantList(properResList);
    setFilteredRestaurantList(properResList);
  };

  if (!isOnline) {
    return <h1>🔴 You are offline! Please check your internet connection.</h1>;
  }

  return (
    <div className="body">
      <div className="filter-container">
        <div className="search-container">
          <input
            type="text"
            className="search-box"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredList = restaurantList.filter((res) =>
                res?.card?.card?.info?.name.toLowerCase().includes(search),
              );

              setFilteredRestaurantList(filteredList);
            }}
          >
            Search
          </button>
        </div>

        <button className="filter-btn" onClick={() => {}}>
          Top Rated
        </button>
      </div>
      <RestaurantContainer restaurantList={filteredRestaurantList} />
    </div>
  );
};

export default Body;
