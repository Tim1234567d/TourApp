import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {fetchOurStory} from '../../../../redux/actions/ourStory'



const OurStory = () => {  
 
    const ourStore = useSelector((state) => state.ourStory.setOurStory)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch (fetchOurStory());
    }, []); 

    const renderItems = ourStore.map((ourStore) => {
        const {info, imgUrl, title} = ourStore;

        return (

            <div className=" mission_wrap">
    
    <div className="tottori__cards">
    
    <div className="tottor-card-1">
        <img src={imgUrl} alt="tottori" className="about-us-pic-1" />
    </div>   
    </div>
            <div className="tottori__cards">
    
            <div className="tottori-text-1">
    
                <div className="title-1"> <h2 className="title-1-1">{title}</h2></div>
    
                <div className="subtitle-1"><p className="subtitle-1-1"> {info}</p></div>
    
            
        </div> 
        
    
        </div>
        </div>
        )

    });
    

    
      

return <>{renderItems}</>
    
}
export default OurStory;