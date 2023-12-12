import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import { setUserName, editUserName } from "../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";

const EditUserName = () => {
  const [error, setError] = useState(null);
  const [newUserName, setNewUserName] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // Gestion de la soumission du formulaire de modification du nom d'utilisateur
  const handleUserNameSubmit = () => {
    if (newUserName !== "") {
      dispatch(setUserName(newUserName)); // Si un nouveau nom d'utilisateur est saisi, mise à jour du store Redux avec le nouveau nom.
      dispatch(editUserName()); // Lance une action pour effectuer la modification du nom d'utilisateur côté serveur.
      navigate("/user");
    } else if (newUserName === "") {
      setError("Please fill in all the required fields."); // Si le champ du nouveau nom d'utilisateur est vide, affiche un message d'erreur.
    }
  };

  const handleCancel = () => {
    setUserName();
    navigate("/user");
  };

  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);

  return (
    <div className="div-edit-form">
      <FontAwesomeIcon icon={faUserPen} className="icon" />
      <h2>Edit User infos</h2>
      <form action="" className="edit-form">
        <div className="input-wrapper">
          <label htmlFor="username">User name:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={(e) => setNewUserName(e.target.value)}
          />
        </div>{" "}
        <div className="input-wrapper">
          <label htmlFor="firstName">First name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder={firstName}
            disabled
          />
        </div>{" "}
        <div className="input-wrapper ">
          <label htmlFor="lastName">Last name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder={lastName}
            disabled
          />
        </div>
      </form>{" "}
      {error && <p className="error-message">{error}</p>}{" "}
      <div className="button-flex">
        <Button
          title="Save"
          className={"edit-button"}
          onClick={handleUserNameSubmit}
        />{" "}
        <Button
          title="Cancel"
          className={"edit-button"}
          onClick={() => handleCancel()}
        />
      </div>
    </div>
  );
};

export default EditUserName;
