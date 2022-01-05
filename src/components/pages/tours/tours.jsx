import { useSelector } from "react-redux";
import { useParams } from "react-router";
import React, { useEffect } from "react";
import OneTour from "./onetour";
import { useDispatch } from "react-redux";
import { fetchTours } from "../../../redux/actions/tours";

 
const Tours = () => {
 

  const tours = useSelector((state) => state.tours.toursItem);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch (fetchTours());
    
  }, []);


  console.log("Products :", tours);
  

    return (
        <section className="section-tours">
        <div className="wrapper">
          <div className="photo-big-3"><img src="https://www.studylab.ru/upload/SimplePage/image/480/c197e4f4d1732f0aace9b4f4a523682c.jpg" alt="11"/></div>
          <h1 className="tours-title">Your trips start here</h1>
          <div className="top__cards">

          <OneTour />
          </div>
        </div> 
        
      </section> 
    )
}

export default Tours;

