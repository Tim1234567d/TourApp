import { ActionTypes } from "../contants/action-types";
import api from '../../API/api';


export const  fetchOurMission = () =>  async (dispatch) => {
 const response = await api.get("/ourMission");
 console.log(response)

 dispatch({type:ActionTypes.FETCH__OUR__MISSION, payload:response.data})
 
};

export const  setOurMission = (setOurMission) => {
   return{
     type:ActionTypes.SET__OUR__MISSION,
     payload:setOurMission,
   };
     
 };