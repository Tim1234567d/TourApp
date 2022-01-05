import React from "react";
import { Link } from "react-router-dom";

const GetInTouch = () => {
    return (
        <section className="section-connect">
        <div className="site-section bg-image overlay">
          <div className="container">
            <div className="container__justify-content-center">
              <div className="container__content">
                <h2 className="container__title">Join and Trip With Us</h2>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Delectus ut, doloremque quo molestiae nesciunt officiis veniam,
                  beatae dignissimos!
                </p>
                <p className="text">
                  <Link className="get-in-touch-btn" to='/contactUs'>
                  Get In Touch
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default GetInTouch;