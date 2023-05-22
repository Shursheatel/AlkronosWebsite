import ThemeSwitcher from "./ThemeSwitcher";

import logo from "../img/icons/jest.svg"

import '../styles/Navbar.css';
import { NavLink } from "react-router-dom";
import { FC } from "react";

const Navbar: FC = () => {

  const getNavLinkClassName = ({
    isActive,
    isPending,
  }: {
    isActive: boolean;
    isPending: boolean;
  }): string => {
    if (isPending) {
      return "pending";
    } else if (isActive) {
      return "nav-list__link nav-list__link--active";
    } else {
      return "nav-list__link";
    }
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <ul className="nav-list">
            <img 
              src={logo} 
              alt="Logo" 
              className="logo"
            />
            <NavLink to="/" className={getNavLinkClassName}>
              Главная
            </NavLink>
            {/* <NavLink to="/wiki" className={getNavLinkClassName}>
              Инфа
            </NavLink> */}
            <NavLink to="/map" className={getNavLinkClassName}>
              Карта
            </NavLink>
          </ul>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;