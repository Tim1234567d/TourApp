import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeSelectedTour, fetchSelectedTours } from '../../../redux/actions/tours';
import Form from "./form/Form";
 
 

const TourDetail = () => {

  const { toursId } = useParams();   

  let tour = useSelector((state) => state.selectedTour);
  const { name, imageUrl, title, subTitle } = tour;

  const dispatch = useDispatch();
  useEffect(() => {
    if (toursId && toursId !== "") dispatch (fetchSelectedTours(toursId)) ;
    return () => {
      dispatch(removeSelectedTour());
    };
  }, [toursId]); 


    return (
        <div className="wrapper">
            
      <div className="containerrr">
        <div className="main__info"> 
          <h1> </h1>
          <div class="photo"><img   src={imageUrl} alt="nature" class="nature-photo" /></div>
          <h3 className="tour__title">{name}</h3>
          <p className="tour_info">
             {title}
            <br />
            <br />
          {subTitle}
          </p>      
        </div>
        <div className="tour-sidebar"> <Form /></div>
       
      </div>
    

        </div>
    )
}

export default TourDetail;


