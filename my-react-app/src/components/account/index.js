import React from "react";
import Button from "../button";

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
        <Button title="View transactions" className={"transaction-button"} />
      </div>
    </section>
  );
};

export default Account;
