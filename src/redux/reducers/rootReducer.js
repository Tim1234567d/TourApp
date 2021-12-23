import {combineReducers } from "redux";
import topPlacesReducer from './topPlaces'
import { selectedTopPlaceReducer } from "./topPlaces";
import { WhyChooseUsReduser } from "./whyChooseUs";
import { toursReducer } from "./tour";
import { selectedTourReducer } from "./tour";
import { blogReducer, selectedBlogReducer } from "./Blog";
import { guestsCommentsReduser } from "./guestsComment";
// import { guestsCommentsReduser } from "./info";
import aboutKyrgyzstanReduser from "./aboutKyrgyzstan"
import Tours from "../../components/pages/tours/tours";

const rootReducer=combineReducers({
    topPlaces:topPlacesReducer,
    selectedtopPlace:selectedTopPlaceReducer,
    whyChooseUs:WhyChooseUsReduser,
    tours:toursReducer,
    selectedTour:selectedTourReducer,
    blog:blogReducer,
    selectedBlog:selectedBlogReducer,
    guestsComments:guestsCommentsReduser,
    aboutKyrgyzstan: aboutKyrgyzstanReduser,

});

export default rootReducer;