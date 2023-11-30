import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import Account from "../../components/account";
import Button from "../../components/button";
import EditUserInfos from "../editUserInfos";
import { useNavigate } from "react-router-dom";

const User = () => {
  // const [handleModal, setHandleModal] = useState(false);

  // const toggleModal = () => {
  //   setHandleModal(!handleModal);
  // };

  const userName = useSelector((state) => state.user.userName);
  const token = useSelector((state) => state.user.token);
  const navigate = useNavigate();

  useEffect(() => {
    // redirection vers la page d'accueil en cas d'absence du token
    if (!token) {
      navigate("/");
    }
  });

  return (
    <div className="page">
      <Navigation />
      <div className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back <br></br>
            {userName}!
          </h1>{" "}
          <Button
            title="Edit name"
            className={"edit-button"}
            onClick={<EditUserInfos />}
          />
          {/* {handleModal && <EditUserNameModal onClose={toggleModal} />} */}
        </div>
        <h2 class="sr-only">Accounts</h2>
        <section class="account">
          <Account
            title={"Argent Bank Checking "}
            number={8349}
            amount={"$2,082.79"}
          />
          <Account
            title={"Argent Bank savings "}
            number={6712}
            amount={"$10,928.42"}
          />
          <Account
            title={"Argent Bank Credit Card "}
            number={8349}
            amount={"$184.30"}
          />
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default User;
