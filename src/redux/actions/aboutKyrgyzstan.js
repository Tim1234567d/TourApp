import { ActionTypes } from "../contants/action-types";
import api from '../../API/api';


export const  fetchAboutKyrgyzstan = () =>  async (dispatch) => {
 const response = await api.get("/aboutKyrgyzstan");
 console.log(response)

 dispatch({type:ActionTypes.FETCH__ABOUT__KYRGYZSTAN, payload:response.data})
 
};

export const  setAboutKyrgyzstan = (setAboutKyrgyzstan) => {
   return{
     type:ActionTypes.SET__ABOUT__KYRGYZSTAN,
     payload:setAboutKyrgyzstan,
   };
     
 };