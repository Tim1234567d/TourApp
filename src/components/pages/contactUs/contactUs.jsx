import React from "react";
// import Form from "./form/Form";

const ContactUs = () => {
    return(
<section className="section-contact">
      <div className="wrapper">
        <div className="photo-big-3">
          <img src="https://franks-travelbox.com/wp-content/uploads/2018/01/kirgistan-im-juli-und-august-werden-am-son-kul-see-in-kirgistan-eigene-gacc88ste-jurten-fucc88r-touristen-mit-erhocc88htem-komfort-errichtet-travel-experts-kyrgyzstan.jpg" alt="contactUs" />
        </div>
        <h1 className="contact-title">Contact Us</h1>
        <div className="contact-container">
          

          <form action="#" method="post" className="form-container1">
            <div className="form-group-name1">
              <div className="form-grup-item1"> 
                <input
                  type="text"
                  className="form-control1"
                  placeholder="First name"
                />
              </div> 
              <div className="form-grup-item1">
                <input
                  type="text"
                  className="form-control1"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div className="form-group-addresss1">
              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control1"
                  placeholder="Email address"
                />
              </div>
            </div>
            
            <div className="form-group-message1">
              <div className="col-md-12">
                <textarea
                  className="form-control1 textarea1"
                  placeholder="Write your message."
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>
            <div className="form-group-button1">
              <div>
                <input type="submit" className="form-btn1" value="Send Message" />
              </div>
            </div>
          </form>



          <div className="address">
            <h3 className="address-title">Contact Info</h3>
            <ul className="contact-list">
              <li className="contact-list-item">
                <span className="d-block text-black">Address:</span>
                <span>34 Street Name, City Name Here, United States</span>
              </li>
              <li className="contact-list-item">
                <span className="d-block text-black">Phone:</span
                ><span>+1 242 4942 290</span>
              </li>
              <li className="contact-list-item">
                <span className="d-block text-black">Email:</span
                ><span>info@yourdomain.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section> 
    )
}

export default ContactUs;