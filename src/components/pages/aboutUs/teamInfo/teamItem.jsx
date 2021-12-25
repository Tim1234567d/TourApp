import React  from "react";
import { useSelector } from "react-redux";
 
const TeamItem = () => {


  const teamInfo = useSelector(({teamInfo}) => teamInfo.setTeamInfo);
  const isLoaded = useSelector(({topPlaces}) => topPlaces.isLoaded);


  const renderItems =  teamInfo.map((teamInfo) => {
    const { id, name, imgUrl, info,} = teamInfo;

    return ( 
      
      <div className="team__card">

      <div className="team__card-pic">
        <img
          src={imgUrl}
          alt="123"
          className="top__card-thumb" /> 
      </div>
      <h2 className="team-title">{name}</h2>
      <p className="team-subtitle">STAFF</p>
      <p className="team__card-desc">
        Jump off balcony, onto stranger's head. Chase ball of string hide
        when guests come over. Being gorgeous with belly side up i could
        pee on this.
      </p>
      
    </div>
   
 )
  });
  return <>{renderItems}</>
}

export default TeamItem;