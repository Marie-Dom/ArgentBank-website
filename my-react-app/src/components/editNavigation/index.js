import React from "react";
import { NavLink } from "react-router-dom";
import User from "../../pages/user";
import Home from "../../pages/home";
import Login from "../../pages/login";
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
  setFirstName,
  setLastName,
  //   setUserName,
} from "../../features/userSlice";

const EditNavigation = () => {
  const IsConnected = useSelector(setToken);
  const UserFirstName = useSelector(setFirstName);
  const UserLastName = useSelector(setLastName);
  // const UserName = useSelector(setUserName);
  const dispatch = useDispatch();

  // Fonction pour gérer la déconnexion de l'utilisateur
  const handleLogOut = () => {
    dispatch(setToken()); // Suppression du token du store Redux en le mettant à null
    localStorage.removeItem("token");
  };

  return (
    <nav className="main-nav">
      <div>
        <FontAwesomeIcon
          icon={faVault}
          style={{
            fontSize: "30px",
            color: "#00bc77",
            paddingBottom: "4px",
            marginTop: "20px",
            paddingLeft: "20px",
          }}
        />

        <h1
          style={{
            fontSize: "20px",
            color: "#00bc77",
            marginTop: "20px",
            paddingLeft: "10px",
          }}
        >
          Argent Bank
        </h1>
      </div>
      <div>
        {IsConnected ? (
          <>
            <span
              style={{
                fontSize: "16px",
                color: "#00bc77",
                textDecoration: "none",
              }}
            >
              {`${UserFirstName} - ${UserLastName}`}{" "}
            </span>
            &nbsp;&nbsp;
            <NavLink to={<User />} className="main-nav-item">
              <FontAwesomeIcon
                icon={faCircleUser}
                style={{ fontSize: "30px", color: "#00bc77" }}
              />
            </NavLink>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon
              icon={faGear}
              style={{
                fontSize: "23px",
                color: "#00bc77",
                paddingBottom: "4px",
                marginTop: "20px",
              }}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink
              to={<Home />}
              className="main-nav-item"
              onClick={handleLogOut}
            >
              <FontAwesomeIcon
                icon={faPowerOff}
                style={{
                  fontSize: "23px",
                  color: " #00bc77",
                  paddingBottom: "4px",
                }}
              />
            </NavLink>
          </>
        ) : (
          <NavLink to={<Login />} className="main-nav-item">
            <FontAwesomeIcon icon={faCircleUser} />
            &nbsp; Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default EditNavigation;
