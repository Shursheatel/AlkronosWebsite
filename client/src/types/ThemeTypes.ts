export enum ThemeActionTypes {
  SET_DEFAULT_THEME = 'SET_DEFAULT_THEME',
  TOGGLE_THEME = 'TOGGLE_THEME',
}

type InitApplicationAction = {
  type: ThemeActionTypes.SET_DEFAULT_THEME,
  payload: 'dark' | 'light'
};

type ToggleTheme = {
  type: ThemeActionTypes.TOGGLE_THEME,
  payload: 'dark' | 'light'
};

export type ThemeAction = InitApplicationAction | ToggleTheme

export type Theme = 'dark' | 'light'
  
export type ThemeState = {
  value: 'dark' | 'light';
}

export type ThemeSwitcherProps = {
  theme: ThemeState;
}