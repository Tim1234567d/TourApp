import React from "react";

const TeamInfo = () => {
    return (
        <div className="team">

            <h2 className="team__title">OUR TEAM</h2>

          <div className="team__cards">

            <div className="team__card">
              <div className="team__card-pic">
                <img
                  src="./img/pngCard/team-1.webp"
                  alt="123"
                  className="top__card-thumb" /> 
              </div>
              <h2 className="team-title">John Doe</h2>
              <p className="team-subtitle">STAFF</p>
              <p className="team__card-desc">
                Jump off balcony, onto stranger's head. Chase ball of string hide
                when guests come over. Being gorgeous with belly side up i could
                pee on this.
              </p>
              
            </div>
  
            <div className="team__card">
              <div className="team__card-pic">
                <img
                  src="./img/pngCard/team-2.jfif"
                  alt="123"
                  className="top__card-thumb"/>
               
              </div>
              <h2 className="team-title">Jean Doe</h2>
              <p className="team-subtitle">STAFF</p>
              <p className="team__card-desc">
                Jump off balcony, onto stranger's head. Chase ball of string hide
                when guests come over. Being gorgeous with belly side up i could
                pee on this.
              </p>
              
            </div>
  
            <div className="team__card">
              <div className="team__card-pic">
                <img
                  src="./img/pngCard/team-3.jfif"
                  alt="123"
                  className="top__card-thumb"/>
                
              </div>
              <h2 className="team-title">Claire Dormey</h2>
              <p className="team-subtitle">STAFF</p>
              <p className="team__card-desc">
                Jump off balcony, onto stranger's head. Chase ball of string hide
                when guests come over. Being gorgeous with belly side up i could
                pee on this.
              </p>
              
            </div>

          </div>
        </div>
      
    )
}

export default TeamInfo;