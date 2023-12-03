import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/components/header";
import Footer from "../src/components/footer";
import Home from "./pages/home";
import Login from "./pages/login";
import User from "./pages/user";
import EditUserInfos from "./pages/editUserInfos";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/editUserInfos" element={<EditUserInfos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
