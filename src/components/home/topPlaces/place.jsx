import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Place = () => {  
 
  const tour = useSelector(({topPlaces}) => topPlaces.topPlaceItems);

  const renderItems = tour.map((tour) => {
    const { id, name, imageUrl, info, shortDescription} = tour;

    return (
       
      <div  key={id}>
      <Link to={`/tour/${id}`} >
      <div className="top__card">
          <div className="top__cardPic">
            <img
              src={imageUrl}
              alt="123"
              className="top__cardThumb"
            />
            <div className="top__cardStats">
              <h3 className="top__cardTitle">{name}</h3>
          
            </div>
          </div>
          <p className="top__cardDesc">
           {shortDescription}
          </p>
          <a href="#" className="top__cardMore">SEE MORE</a>
        </div>
        </Link>
        </div>
        
  );

  });

return <>{renderItems}</>
    
}

export default Place;



