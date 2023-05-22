import { applyMiddleware, createStore, combineReducers } from "@reduxjs/toolkit";    
import logger from "redux-logger";                                                   
import thunkMiddleware from 'redux-thunk';                                           

import { themeReducer } from "../reducers/ThemeReducer";
import { specialOffersSliderReducer } from "../reducers/SpecialOffersSliderReducer";

export const rootReducer = combineReducers({
  theme: themeReducer,
  specialOffersSlider: specialOffersSliderReducer,
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

export default store;







