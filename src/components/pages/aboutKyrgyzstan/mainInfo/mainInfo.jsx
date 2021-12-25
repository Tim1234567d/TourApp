import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAboutKyrgyzstan } from "../../../../redux/actions/aboutKyrgyzstan";
// import axios from "axios";
import { useEffect } from "react";


const MainInfo = () => { 

  const aboutKyrgyzstan = useSelector((state) => state.aboutKyrgyzstan.setAboutKyrgyzstan)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch (fetchAboutKyrgyzstan());
    }, []);

  const renderItems = aboutKyrgyzstan.map((aboutKyrgyzstan) => {
  const {info, imageUrl, title} = aboutKyrgyzstan;

  return (
    <div className="main__info">
      <h1>Кыргызстан</h1>
      <div className="photo"><img   src={imageUrl} alt="nature" className="nature-photo" /></div>
      <h1>{title}</h1>
      <p className="kyrgyzstan-info">
        {info}
      </p>
    </div>
)

});

return <>{renderItems}</>

}

export default MainInfo;