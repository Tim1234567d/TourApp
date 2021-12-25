import {ActionTypes} from "../contants/action-types";

const initialState ={
    setAboutKyrgyzstan:[],
    isLoaded: false,
    
};

 const aboutKyrgyzstanReduser = (state= initialState, {type, payload}) => {

    switch(type) {
        case ActionTypes.SET__ABOUT__KYRGYZSTAN:
            return {...state,setAboutKyrgyzstan:payload };
        case ActionTypes.FETCH__ABOUT__KYRGYZSTAN:
            return {...state,setAboutKyrgyzstan:payload, isLoaded: true, };

            default :
                return state
    } 
   

};
export default aboutKyrgyzstanReduser;






