import { ActionTypes } from "../contants/action-types";
import api from '../../API/api';


export const  fetchOurStory = () =>  async (dispatch) => {
 const response = await api.get("/ourStory");
 console.log(response)

 dispatch({type:ActionTypes.FETCH__OUR__STORY, payload:response.data})
 
};

export const  setOurStory = (setOurStory) => {
   return{
     type:ActionTypes.SET__OUR__STORY,
     payload:setOurStory,
   };
     
 };