import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import User from "./pages/user";
import EditUserInfos from "./pages/editUserInfos";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/editUserInfos" element={<EditUserInfos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
