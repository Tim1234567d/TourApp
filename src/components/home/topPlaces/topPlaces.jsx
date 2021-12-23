import React from "react"
import Place from "./place";
import axios from "axios";
import { fetchTopPlaces } from "../../../redux/actions/topPlaces";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import {getPlaces} from "../../../API/places"
// import { fetchInfo } from "../../../redux/actions/info";
// import { setGuestsComments } from "../../../redux/actions/info";

 
const TopPlaces = () => {

  const topPlaces = useSelector((state) => state.topPlaces.topPlaceItems);
   const dispatch = useDispatch();
   console.log(topPlaces)
  
  useEffect(() => {
    dispatch(fetchTopPlaces());
  
  }, []);
 

  console.log("topPlaces :", topPlaces);
  

return (
    <section className="section-tours">
      <div className="wrapper">
        <h2 className="top__title section-title">Today top places to visit</h2>
        <div className="top__cards">

        <Place />
        </div>
      </div>
    </section>
    )

}

export default TopPlaces;
