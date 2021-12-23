 import { ActionTypes } from "../contants/action-types";
 import api from '../../API/api';
 
 
 export const  fetchWhyChooseUs = () =>  async (dispatch) => {
  const response = await api.get("/whyChooseUs");
  console.log(response)

  dispatch({type:ActionTypes.FETCH__WHY__CHOOSE__US, payload:response.data})
  
};
 
export const  setWhyChooseUs = (setWhyChooseUs) => {
    return{
      type:ActionTypes.SET__WHY__CHOOSE__US,
      payload:setWhyChooseUs,
    };
      
  };


 export const  fetchGuestsComments = () =>  async (dispatch) => {
  const response = await api.get("/guestscomments");
  console.log(response)

  dispatch({type:ActionTypes.FETCH__GUESTS__COMMENTS, payload:response.data})
  
};
 
export const  setGuestsComments = (setGuestsComments) => {
    return{
      type:ActionTypes.SET__GUESTS__COMMENTS,
      payload:setGuestsComments,
    };
      
  };