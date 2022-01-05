import React from "react";

const SocialItem = ({social}) => {
    return (
    
            <li>
            <a href="#">
                <img src={social.img} alt="whatsapp"/> 
            </a>
          </li>
        
    )
}

export default SocialItem;