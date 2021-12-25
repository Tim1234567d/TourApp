import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import TeamItem from "./teamItem";
import {fetchTeamInfo} from "../../../../redux/actions/teamInfo"

const TeamInfo = () => {

  const teamInfo = useSelector((state) => state.teamInfo.setTeamInfo);
   const dispatch = useDispatch();
   console.log(teamInfo)
  
  useEffect(() => {
    dispatch(fetchTeamInfo());
  
  }, []); 
    return (
        <div className="team"> 

            <h2 className="team__title">OUR TEAM</h2>

          <div className="team__cards">

           <TeamItem /> 
  
            
              
            
  
            

          </div>
        </div>
      
    )
}

export default TeamInfo; 