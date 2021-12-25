import React from "react";
import {fetchOurMission} from "../../../../redux/actions/ourMission"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const OurMission =() => { 
      
    const ourMission = useSelector((state) => state.ourMission.setOurMission)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch (fetchOurMission());
    }, []);


    const renderItems = ourMission.map((ourMission) => {
        const {info, imgUrl, title} = ourMission;


        return( 
        
            <div className="mission_wrap">    
                
                <div className="tottori__cards">
    
            <div className="tottori-text-2">
    
                <div className="title-2"><h2 className="title-2-2">{title}</h2></div>
    
            <div className="subtitle-2">  <p className="subtitle-2-2"> {info} </p></div>
    
                
            </div>
        </div>
        
        <div className="tottori__cards">
    
    <div className="tottori-card-21">
        <img src={imgUrl} alt="tottori" className="about-us-pic-2" />
    </div> 
    
    </div>  
    </div>
        
        )
    });
    
return <>{renderItems}</>
    
}

export default OurMission;