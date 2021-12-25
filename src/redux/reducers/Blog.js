import {ActionTypes} from "../contants/action-types";

const initialState = {
    blogItems: [],
    isLoaded: false,
     
}; 

 export const blogReducer = (state= initialState, {type, payload}) => {

    switch(type) {
        case ActionTypes.SET__BLOG:
            return {...state,blogItems:payload };
        case ActionTypes.FETCH__BLOG:
            return {...state,blogItems:payload, isLoaded: true,};

            default :
                return state
    }
    

}

export const selectedBlogReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
      case ActionTypes.SELECTED__BLOG:
        return { ...state, ...payload };
      case ActionTypes.REMOVE__SELECTED__BLOG:
        return {};
      default:
        return state;
    }
  };







