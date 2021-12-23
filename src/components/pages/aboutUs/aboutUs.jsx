import React, { useState } from "react";
import AboutUsInfo from "./aboutUsInfo/aboutUsInfo";
import Modal from "./aboutUsInfo/modal/modal";
import TeamInfo from "./teamInfo/teamInfo";


const AboutUs = () => {

  

    return( 
    <section className="section-about-us">
      <div className="wrapper">

      <div className="photo-big-3"><img src="./img/pngCard/Burana-Tower.jpg" alt=""/>
      </div>
          <AboutUsInfo/>
          <TeamInfo/>    
      </div>

  </section> 
    )
}

export default AboutUs;