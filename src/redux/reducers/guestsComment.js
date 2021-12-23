import {ActionTypes} from "../contants/action-types";

const initialState ={
    guestsComments:[], 
};


export const guestsCommentsReduser = (state= initialState, {type, payload}) => {

    switch(type) {
        case ActionTypes.SET__GUESTS__COMMENTS:
            return {...state,guestsComments:payload };
        case ActionTypes.FETCH__GUESTS__COMMENTS:
            return {...state,guestsComments:payload };

            default :
                return state
    } 
   

}

