import React, { useState } from "react";
import SocialList from "./socialList";

const Footer = () => {

  const [social, setSocial] = useState([
    {"img": "./img/svg/Mask whatsapp.svg"}, 
    {"img": "./img/svg/Mask telegram.svg"}, 
    {"img": "./img/svg/Mask instagram.svg"}, 
    {"img": "./img/svg/Mask facebook.svg"}, 
    {"img": "./img/svg/Mask tiktok.svg"}, 
  ])

return ( 
    <footer className="footer">
      <div className="wrapper">
        <div className="logo">Logo</div>

        <SocialList  social ={social}/>

        <div className="footer__cantacts">
          <div className="contact-tel">+996 500 000 000</div>
          <div className="contact-address">ул.Ибраимова 115/1</div>
          <div className="contact-email">tours@gmail.com</div>
        </div>
      </div>
    </footer>
)
}

export default Footer;