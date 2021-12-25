import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import TourLoader from './loader/tourLoader'

const OneTour = () => { 

   
  const tour = useSelector(({tours}) => tours.tourItem);
  const isLoaded= useSelector(({tours}) => tours.isLoaded);

  const renderTours = isLoaded ? tour.map((tour) => {
    const { id, name, imageUrl,shortDescription,} = tour;

    return ( 
      <div key={id}> 
      <Link to={`/tourDetail/${id}`}> 
      <div className="top__card"> 
      <div className="top__cardPic  ">
        <img
          src={imageUrl}
          alt="123"
          className="top__cardThumb"
        />
        <div className="top__cardStats ">
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
    
  )


  }) : Array (9).fill(<TourLoader />) 
return <> {renderTours} </>
   
}

export default OneTour;