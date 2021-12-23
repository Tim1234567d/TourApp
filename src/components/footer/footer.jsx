import React from "react";

const Footer = () => {
return (
    <footer className="footer">
      <div className="wrapper">
        <div className="logo">Logo</div>

        <ul className="list-icons">
          <li>
            <a href="#" className="icon-whatsapp"
              ><img src="./img/svg/Mask whatsapp.svg" alt="whatsapp"
            /></a>
          </li>
          <li>
            <a href="#" className="icon-telegram"
              ><img src="./img/svg/Mask telegram.svg" alt="telegram"
            /></a>
          </li>
          <li>
            <a href="#" className="icon-instagram"
              ><img src="./img/svg/Mask instagram.svg" alt="instagram"
            /></a>
          </li>
          <li>
            <a href="#" className="icon-facebook"
              ><img src="./img/svg/Mask facebook.svg" alt="facebook"
            /></a>
          </li> 
          <li>
            <a href="#" className="icon-tiktok"
              ><img src="./img/svg/Mask tiktok.svg" alt="tiktok"
            /></a>
          </li>
        </ul>

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