import React from "react";
import { Link } from "react-router-dom";
// import User from "../../pages/user";
// import Home from "../../pages/home";
// import Login from "../../pages/login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faVault,
  faGear,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  setToken,
  //   userProfileData,
  // setFirstName,
  // setLastName,
  //   setUserName,
} from "../../features/userSlice";

const EditNavigation = () => {
  const IsConnected = useSelector(setToken);
  // const UserFirstName = useSelector(setFirstName);
  // const UserLastName = useSelector(setLastName);
  // const UserName = useSelector(setUserName);
  const dispatch = useDispatch();

  // Fonction pour gérer la déconnexion de l'utilisateur
  const handleLogOut = () => {
    dispatch(setToken()); // Suppression du token du store Redux en le mettant à null
    localStorage.removeItem("token");
  };

  return (
    <nav className="main-nav">
      <div className={"main-nav-logo"}>
        <FontAwesomeIcon
          icon={faVault}
          className="icon"
          style={{
            color: "#00bc77",
          }}
        />

        <h1
          style={{
            color: "#00bc77",
            paddingLeft: "10px",
          }}
        >
          Argent Bank
        </h1>
      </div>
      <div className="main-nav">
        {IsConnected ? (
          <>
            <Link to="/user" className="main-nav-item main-nav a">
              <FontAwesomeIcon
                icon={faCircleUser}
                className="icon"
                style={{ color: "#00bc77" }}
              />
            </Link>

            <FontAwesomeIcon
              icon={faGear}
              className="icon"
              style={{
                color: "#00bc77",
              }}
            />

            <Link
              to="/"
              className="main-nav-item, main-nav a"
              onClick={handleLogOut}
            >
              <FontAwesomeIcon
                icon={faPowerOff}
                className="icon"
                style={{
                  color: " #00bc77",
                }}
              />
            </Link>
          </>
        ) : (
          <Link to="/login" className="main-nav-item, main-nav a">
            <FontAwesomeIcon icon={faCircleUser} className="icon" />
            &nbsp; Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default EditNavigation;
