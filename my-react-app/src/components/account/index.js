import React from "react";
import Button from "../button";
import { Link } from "react-router-dom";

const Account = ({ title, amount, description, number }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">
          {title}(x{number})
        </h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <Link to="/checkTransactions" style={{ textDecoration: "none" }}>
          <Button title="View transactions" className={"transaction-button"} />
        </Link>
      </div>
    </section>
  );
};

export default Account;
