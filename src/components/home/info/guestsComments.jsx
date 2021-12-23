import React from "react";
import { useSelector } from "react-redux";

const GuestsComments = () => { 

    const guestsComments  = useSelector(({guestsComments}) => guestsComments.guestsComments);
 
    console.log(guestsComments , "guestsComments")
  const renderItems = guestsComments.map((guestsComments) => {
    const { title, text} = guestsComments;  
    return (
        <div className="section-info__left">
        <div className="title-2">
          <h2 className="title-2-2">{title}</h2> 
        </div>

        <div className="slick-wrap">
            <div>
                <div className="tottori-card-2">
                <div className="ava"><img src="./img/pngCard/avatar-1.jpg" alt="ava"/></div>
                <div className="ava-info">
                    <p className="ava-info-text">{text}</p>
                    {/* <p className="ava-name">Denis Green</p>
                    <span>Guest from London</span> */}
                </div>
              </div>
            </div>
            
        </div> 
    </div>
    )
  });

   return <>{renderItems}</>
}

export default GuestsComments;