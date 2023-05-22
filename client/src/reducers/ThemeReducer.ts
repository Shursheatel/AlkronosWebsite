import { ThemeState, ThemeAction, ThemeActionTypes } from '../types/ThemeTypes';

const initialState : ThemeState = {
  value: 'dark'
}

export const themeReducer = (
  state = initialState, 
  action: ThemeAction): ThemeState => {
  switch (action.type) {
    case ThemeActionTypes.TOGGLE_THEME:
      return {...state, value: action.payload}
    default: 
      return state
  }
}