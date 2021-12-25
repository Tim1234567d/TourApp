import {ActionTypes} from '../contants/action-types'
import api from '../../API/api';



export const  fetchTeamInfo = () =>  async (dispatch) => {
  const response = await api.get("/teamInfo");

  dispatch({type:ActionTypes.FETCH__TEAM__INFO, payload:response.data})
  
};


export const  setTeamInfo = (setTeamInfo) => {
    return{
      type:ActionTypes.SET__TEAM__INFO,
      payload:setTeamInfo,
    };
      
  };