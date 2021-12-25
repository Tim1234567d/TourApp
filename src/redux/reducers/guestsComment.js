import {ActionTypes} from "../contants/action-types";

const initialState ={
    guestsComments:[], 
    isLoaded: false,
};


export const guestsCommentsReduser = (state= initialState, {type, payload}) => {

    switch(type) {
        case ActionTypes.SET__GUESTS__COMMENTS:
            return {...state,guestsComments:payload };
        case ActionTypes.FETCH__GUESTS__COMMENTS:
            return {...state,guestsComments:payload, isLoaded: true};

            default :
                return state
    } 
}

