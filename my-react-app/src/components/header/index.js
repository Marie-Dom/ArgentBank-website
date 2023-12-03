import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ArgentBankLogo from "../../assets/img/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  setToken,
  userProfileData,
  setFirstName,
  setLastName,
  setUserName,
} from "../../features/userSlice";

const Header = () => {
  const token = useSelector((state) => state.user.token);
  const userName = useSelector((state) => state.user.userName);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      // récupération des données du profil de l'utilisateur à partir du serveur
      dispatch(userProfileData()).then((resultAction) => {
        // extrait les données du profil de la réponse
        const { firstName, lastName, userName } = resultAction.payload.body;

        // mise à jour le store Redux avec les données du profil
        dispatch(setFirstName(firstName));
        dispatch(setLastName(lastName));
        dispatch(setUserName(userName));
      });
    }
  }, [token, dispatch]);

  // Fonction pour gérer la déconnexion de l'utilisateur
  const handleLogOut = () => {
    dispatch(setToken()); // Suppression du token du store Redux en le mettant à null
    localStorage.removeItem("token");
  };

  const location = useLocation();

  // Vérifie si la route actuelle est "/editUserInfos"
  if (
    location.pathname === "/editUserInfos" ||
    location.pathname === "/checkTransactions"
  ) {
    return null; // Ne pas afficher le Header sur la page EditUserInfos
  }

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to={token ? "/user" : "/"}>
        <img
          className="main-nav-logo-image"
          src={ArgentBankLogo}
          alt="ArgentBank Logo"
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

export default Header;
