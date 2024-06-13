import { NavLink, Outlet } from "react-router-dom";
import "./Navbar.css";
const NavBar = () => (
  <>
    <header className="navbar">
      <NavLink to={"/userinfo"} className="navbar__title navbar__item">
        Cutco
      </NavLink>
      <NavLink to={"/login"} className="navbar__item">
        Login
      </NavLink>
      <NavLink to={"/forget-password"} className="navbar__item">
        Forget Password
      </NavLink>
      <NavLink to={"/register"} className="navbar__item">
        Register
      </NavLink>
      <NavLink to={"/employee"} className="navbar__item">
        Employee
      </NavLink>
    </header>
    <Outlet />
  </>
);

export default NavBar;
