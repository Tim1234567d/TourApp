import React, { useState } from "react";
import AboutUsInfo from "./aboutUsInfo/aboutUsInfo";

import TeamInfo from "./teamInfo/teamInfo";


const AboutUs = () => {

  

    return( 
    <section className="section-about-us">
      <div className="wrapper">

      <div className="photo-big-3"><img src="https://www.wildernesstravel.com/images/trips/asia/kyrgyzstan/kyrgyzstan-hiking-in-the-celestial-mountains/1-slide-kyrgysztan-yurts-at-tash-raba-pano.jpg" alt=""/>
      </div>
          <AboutUsInfo/>
          <TeamInfo/>    
      </div>

  </section> 
    )
}

export default AboutUs;