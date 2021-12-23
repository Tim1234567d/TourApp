import React, { useEffect} from "react";
import Slider from "./slider/slider";
import { SliderData } from "./slider/sliderData";
// import GetInTouch from "./getInTouch/getInTouch";
// import Info from "./info/info";
import TopPlaces from "./topPlaces/topPlaces"
import GetInTouch from "./getInTouch/getInTouch";
import { useDispatch } from "react-redux";
// import {fetchTopPlaces} from "./topPlaces/topPlaces"
// import {fetchInfo} from "../home/info/info"
// import { fetchInfo } from "../../redux/actions/info";
// import axios from "axios";
import { useParams } from "react-router-dom";
import Info from "./info/info";
import { fetchSelectedTopPlace,removeSelectedToplace } from "../../redux/actions/topPlaces";


const Home = () => {
  const { topPlacesId } = useParams();

  const dispatch = useDispatch();

  // useEffect(() => {
  
  //   fetchTopPlaces()
  // }, [dispatch]);

  // useEffect(() => {
  //   if (topPlacesId && topPlacesId !== "") dispatch(fetchSelectedTopPlace(topPlacesId));
  //   return () => {
  //     dispatch(removeSelectedToplace());
  //   };

  // }, [topPlacesId]);

//   dispatch (fetchInfo())
// useEffect(() => {
//   fetchInfo()
// }, [])

    return (
        <div>
          <Slider slides={SliderData}/> 
          <TopPlaces/>
          <Info />
          <GetInTouch/>
        </div>
    );
}

export default Home;

// import React, { useEffect } from "react";
// import MovieListing from "../MovieListing/MovieListing";

// import { useDispatch } from "react-redux";
// import {
//   fetchAsyncMovies,
//   fetchAsyncShows,
// } from "../../features/movies/movieSlice";
// const Home = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchAsyncMovies());
//     dispatch(fetchAsyncShows());
//   }, [dispatch]);
//   return (
//     <div>
//       <div className="banner-img"></div>
//       <MovieListing />
//     </div>
//   );
// };

// export default Home;