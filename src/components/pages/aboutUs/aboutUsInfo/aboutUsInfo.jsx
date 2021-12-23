import React from "react";
import Modal from "./modal/modal";
import { useState } from "react";

const AboutUsInfo = () => {

    const [modalActive, setModalActive] = useState(false);

    return(
        <div className="tottori__all">
  
        <div className="tottori__cards">

            <div className="tottor-card-1">
                <img src="./img/pngCard/our-story.jfif" alt="tottori" className="about-us-pic-1" />
            </div>   
        </div>

        <div className="tottori__cards">

            <div className="tottori-text-1">

                <div className="title-1"> <h2 className="title-1-1">Our Story</h2></div>

                <div className="subtitle-1"><p className="subtitle-1-1">Kyrgyz Tourism is a travel company providing tours in Kyrgyzstan and Central Asia.

                  We began our venture into tourism 15 years ago. For over 10 years our work was devoted to Community Based Tourism in Kyrgyzstan. During this time, we have developed from local tour guides to reliable tourism professionals. Our experience and strong convictions give us an opportunity to make our tour products diverse, authentic, and genuine experiences. </p></div>

            <div>
               <button className="card-link" onClick={() => setModalActive(true)}>VIEW MORE</button>        
            </div>
        </div>


        </div>


        <div className="tottori__cards">

            <div className="tottori-text-2">

                <div className="title-2"><h2 className="title-2-2">Our Mission Statement</h2></div>

            <div className="subtitle-2">  <p className="subtitle-2-2">We are a team of local tourism experts with complementary skills in culture and adventure tourism. We collaborate with communities around the region to create and implement unique, customized tour products. This enables our guests to have unforgettable, exciting, enriching, immersive experiences while at the same time giving back through cross-cultural exchange, support for the preservation of traditions and ecology, and enhancement of regional and global integration. </p></div>

                <div><button className="card-link" onClick={() => setModalActive(true)}>VIEW MORE</button>  </div>
            </div>
        </div>

        <div className="tottori__cards">

            <div className="tottori-card-21">
                <img src="./img/pngCard/our-mission.webp" alt="tottori" className="about-us-pic-2" />
            </div> 
        </div>

        <Modal active= {modalActive} setActive={setModalActive} onModalClose={() => setModalActive(false)}> 
      <div>

                <div className='photo'>
                    <img src="./img/pngCard/our-story.jfif" alt="tottori" className="about-us-pic-1" />
                </div>   
          

            <div className="tottori__cards">

                <div className="tottori-text-1">

                    <div className="title-1"> <h2 className="title-1-1">Our Story</h2></div>

                    <div className="subtitle-1">
                        <p className="subtitle-1-1">
                        Kyrgyz Tourism is a travel company providing tours in Kyrgyzstan and Central Asia.
                        We began our venture into tourism 15 years ago. For over 10 years our work was devoted to Community Based Tourism in Kyrgyzstan. During this time, we have developed from local tour guides to reliable tourism professionals. Our experience and strong convictions give us an opportunity to make our tour products diverse, authentic, and genuine experiences. 
                        </p>
                        <p className="subtitle-1-1">
                        Kyrgyz Tourism is a travel company providing tours in Kyrgyzstan and Central Asia.
                        We began our venture into tourism 15 years ago. For over 10 years our work was devoted to Community Based Tourism in Kyrgyzstan. During this time, we have developed from local tour guides to reliable tourism professionals. Our experience and strong convictions give us an opportunity to make our tour products diverse, authentic, and genuine experiences. 
                        </p>
                        <p className="subtitle-1-1">
                        Kyrgyz Tourism is a travel company providing tours in Kyrgyzstan and Central Asia.
                        We began our venture into tourism 15 years ago. For over 10 years our work was devoted to Community Based Tourism in Kyrgyzstan. During this time, we have developed from local tour guides to reliable tourism professionals. Our experience and strong convictions give us an opportunity to make our tour products diverse, authentic, and genuine experiences. 
                        </p>
                       
                        </div>

                
                </div>
            </div>
            
            </div>
      </Modal>

    </div> 

    )
}

export default AboutUsInfo;