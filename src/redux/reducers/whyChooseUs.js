import {ActionTypes} from "../contants/action-types";

const initialState ={
    whyChooseUs:[],
    isLoaded: false,
};

 export const WhyChooseUsReduser = (state= initialState, {type, payload}) => {

    switch(type) {
        case ActionTypes.SET__WHY__CHOOSE__US:
            return {...state,whyChooseUs:payload };
        case ActionTypes.FETCH__WHY__CHOOSE__US:
            return {...state,whyChooseUs:payload, isLoaded: true, };

            default :
                return state
    } 
    

};
