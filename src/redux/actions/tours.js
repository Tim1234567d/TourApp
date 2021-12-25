import {ActionTypes} from '../contants/action-types'
import api from '../../API/api';




export const  fetchTours = () =>  async (dispatch) => {
  const response = await api.get("/tours");

  dispatch({type:ActionTypes.FETCH__TOURS, payload:response.data})
  
};


export const  fetchSelectedTours = (id) =>  async (dispatch) => {
  const response = await api.get(`/tours/${id}`);

  dispatch({type:ActionTypes.SELECRED__TOUR, payload:response.data})
  
}; 


export const  setTours = (toursItems) => {
  return{
    type:ActionTypes.SET__TOURS,
    payload:toursItems,
  };
    
};

export const selectedTours = (toursItem) => {
  return {
    type: ActionTypes.SELECRED__TOUR,
    payload: toursItem,
  };
};

export const removeSelectedTour = () => {
  return {
    type: ActionTypes.REMOVE__SELECTED__TOUR,
  };
};