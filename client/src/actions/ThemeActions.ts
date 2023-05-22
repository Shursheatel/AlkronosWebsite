import { ThemeActionTypes } from "../types/ThemeTypes"

export const setDefaultTheme = () => {
  return {
    type: ThemeActionTypes.SET_DEFAULT_THEME,
    payload: 'dark'
  }
}

export const toggleTheme = (newTheme: string) => {
  return {
    type: ThemeActionTypes.TOGGLE_THEME,
    payload: newTheme
  }
}