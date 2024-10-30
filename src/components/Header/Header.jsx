import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Home
        </NavLink>

        {isLoggedIn && (
          <>
            <div>Welcome, {user.name}</div>
            <NavLink
              to="/contacts"
              className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            >
              Contacts
            </NavLink>
            <button
              onClick={() => dispatch(logout())}
              className={s.logoutButton}
            >
              Exit
            </button>
          </>
        )}

        {!isLoggedIn && (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            >
              Register
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
