import { useDispatch, connect } from 'react-redux';

import { setDefaultTheme, toggleTheme } from '../actions/ThemeActions'
import { Theme, ThemeSwitcherProps } from '../types/ThemeTypes';
import { RootState } from '../types/StoreTypes'

import dark_sun from "../img/icons/dark_sun.svg"
import light_sun from "../img/icons/light_sun.svg"
import dark_moon from "../img/icons/dark_moon.svg"
import light_moon from "../img/icons/light_moon.svg"

import '../styles/ThemeSwitcher.css';
import { FC } from 'react';

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ theme }) => {

  const dispatch = useDispatch();

  dispatch(setDefaultTheme())

  const [moonIcon, sunIcon] = theme.value === 'dark' ? [dark_moon, dark_sun] : [light_moon, light_sun];

  const handleButtonClick = () => {
    const newTheme: Theme  = document.body.classList.contains('dark')
      ? 'light'
      : 'dark'

    dispatch(toggleTheme(newTheme))
    const toggleThemeBtn: HTMLElement | null = document.querySelector(".toggle-theme-btn");
    if (toggleThemeBtn) {
      toggleThemeBtn.classList.toggle("toggle-theme-btn--active");
    }
  }

  return (
    <button className="toggle-theme-btn" onClick={handleButtonClick}>
      <img 
        src={moonIcon} 
        alt="Moon" 
        className="toggle-theme-btn__icon"
      />
      <img 
        src={sunIcon} 
        alt="Sun" 
        className="toggle-theme-btn__icon"
      />
    </button>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    theme: state.theme
  };
};

export default connect(mapStateToProps)(ThemeSwitcher);