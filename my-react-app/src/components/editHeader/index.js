import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faVault,
  faGear,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../../features/userSlice";

const EditHeader = () => {
  const token = useSelector((state) => state.user.token);
  const userName = useSelector((state) => state.user.userName);
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
        {token ? (
          <>
            <span style={{ color: "#00bc77" }}>{userName}</span>
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

export default EditHeader;
