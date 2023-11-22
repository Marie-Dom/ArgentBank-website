import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../../features/userSlice";

const Navigation = () => {
  const token = useSelector((state) => state.user.token);
  const userName = useSelector((state) => state.user.userName);
  const dispatch = useDispatch();

  // Fonction pour gérer la déconnexion de l'utilisateur
  const handleLogOut = () => {
    dispatch(setToken(null)); // Suppression du token du store Redux en le mettant à null
    localStorage.removeItem("token");
  };

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to={token ? "/user" : "/"}>
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt=""
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      {token ? (
        <div className="main-nav-item-position">
          <NavLink className="main-nav-item" to="/user">
            <FontAwesomeIcon icon={faCircleUser} className="icon" />
            {userName}
          </NavLink>
          <NavLink className="main-nav-item" to="/" onClick={handleLogOut}>
            <FontAwesomeIcon icon={faRightFromBracket} className="icon" />
            Sign Out
          </NavLink>
        </div>
      ) : (
        <div>
          <NavLink className="main-nav-item" to="/login">
            <FontAwesomeIcon icon={faCircleUser} className="icon" />
            Sign In
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
