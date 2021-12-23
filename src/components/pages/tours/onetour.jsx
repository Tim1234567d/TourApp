import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const OneTour = () => { 

  
  const tour = useSelector(({tours}) => tours.tourItem);

  const renderTours = tour.map((tour) => {
    const { id, name, imageUrl, info, body} = tour;

    return (
      <div key={id}>
      <Link to={`/tour/${id}`}>
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
        {body}
      </p>
      <a href="#" className="top__cardMore">SEE MORE</a>
    </div>
    </Link>
    </div>
    
  )


  });
return <> {renderTours} </>
   
}

export default OneTour;