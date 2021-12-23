import React from "react"
import { useSelector } from "react-redux";


 
const WhyChooseUs = () => {

  const whyChooseUs  = useSelector(({whyChooseUs}) => whyChooseUs.whyChooseUs);

  const renderItems = whyChooseUs.map((whyChooseUs) => {
    const { title, text} = whyChooseUs; 
console.log(whyChooseUs, "whychooseUs")

    return (  
      <div className="section-info__right">
      <div className="title-2"><h2 className="title-2-2">{title}</h2></div>
      <div className="tottori-card-1">
      <div className="subtitle-2">
        <p className="subtitle-2-2">
           {text}
        </p>
      </div>

      <div><a href="#" className="card-link"></a></div>
    </div>
  </div>
  )

  }) 

return <>{renderItems}</>
    
}

export default WhyChooseUs;