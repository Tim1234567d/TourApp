import {ActionTypes} from "../contants/action-types";

const initialState = {
    tourItem: [],
    isLoaded:false,
     
}; 

export const toursReducer = (state= initialState, {type, payload}) => {

    switch(type) { 
        case ActionTypes.SET__TOURS:
            return {...state,tourItem:payload };
        case ActionTypes.FETCH__TOURS:
            return {...state,tourItem:payload, isLoaded:true, };

            default :
                return state
    }
   

}

export const selectedTourReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
      case ActionTypes.SELECRED__TOUR:
        return { ...state, ...payload };
      case ActionTypes.REMOVE__SELECTED__TOUR:
        return {}; 
      default:
        return state;
    }
  };







