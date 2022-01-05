import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useSelector } from "react-redux";
import WhyChooseUs from "./whyChooseUs";
import {fetchWhyChooseUs } from "../../../redux/actions/whyChooseUs"
import { fetchGuestsComments } from "../../../redux/actions/whyChooseUs";
import GuestsComments from "./guestsComments";


 


const Info = () => { 
 
const whyChooseUs = useSelector((state) => state.whyChooseUs.setWhyChooseUs);
const guestsComments = useSelector((state) => state.guestsComments.guestsComments)

const dispatch = useDispatch();
   console.log(whyChooseUs)
   console.log(guestsComments)
  
  useEffect(() => {
    dispatch(fetchWhyChooseUs());
    dispatch(fetchGuestsComments())
  
  }, []);

  return (
    <section className="section-info">
  <div className="wrapper">
    <div className="info-container">
    <div className="section-info__all">
    <WhyChooseUs />
     <GuestsComments />
      </div>
    </div>
  </div>
  
</section>
)

}

export default Info;