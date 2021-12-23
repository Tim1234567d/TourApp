import { useSelector } from "react-redux";
import { useParams } from "react-router";
import React, { useEffect } from "react";
import OneTour from "./onetour";
// import axios from "axios";
import { useDispatch } from "react-redux";
// import { setTours } from "../../../redux/actions/tours";
import { fetchTours } from "../../../redux/actions/tours";

 
const Tours = () => {
 

  const tours = useSelector((state) => state.tours.toursItem);
  const dispatch = useDispatch();

  // const fetchTours = async () => {
  //   const response = await axios
  //     .get("http://localhost:3001/tours")
  //     .catch((err) => {
  //       console.log("Err: ", err);
        
  //     }); 
  //   dispatch( setTours(response.data));
  //   console.log(response)
  // };      

  useEffect(() => {
    dispatch (fetchTours());
    
  }, []);


  console.log("Products :", tours);
  

    return (
        <section className="section-tours">
        <div className="wrapper">
          <div className="photo-big-3"><img src="./img/pngCard/Burana-Tower.jpg" alt=""/></div>
          <h1 className="tours-title">Your trips start here</h1>
          <div className="top__cards">

          {/* { itemss && itemss.map (tours => (
            <OneTour key = {tours.id} {...tours}/>
          ))} */}
          <OneTour />
            
            
          </div>
        </div>
        
      </section> 
    )
}

export default Tours;

