import React from "react";
import SocialItem from "./socialItem";

const SocialList = ({social}) => {
    return(
        <ul className="list-icons">
            {
                social.map((social) => 
                <SocialItem social={social} />
                )
            }

        </ul>
    )
}

export default SocialList;