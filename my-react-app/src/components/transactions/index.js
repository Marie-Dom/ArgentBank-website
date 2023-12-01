import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const TransactionsUser = () => {
  return (
    <div>
      <section className="account-transaction">
        <div className="account-content-wrapper">
          <h3 className="account-title-user">Argent Bank Checking (x3448)</h3>
          <p className="account-white">$48,098.43</p>
          <p className="account-white-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <Link to="/checkTransaction">
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ color: "white", fontSize: "50px" }}
            />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TransactionsUser;
