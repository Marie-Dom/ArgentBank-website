import React from "react";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import SignInForm from "../../components/signInForm";

const Login = () => {
  return (
    <div className="page">
      <Navigation />
      <div className="main bg-dark">
        <SignInForm />
      </div>
      <Footer />
    </div>
  );
};

export default Login;
