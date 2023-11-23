import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import User from "./pages/user";
import { useDispatch, useSelector } from "react-redux";
import {
  // eslint-disable-next-line no-unused-vars
  setToken,
  userProfileData,
  setFirstName,
  setLastName,
  setUserName,
} from "./features/userSlice";

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);

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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
