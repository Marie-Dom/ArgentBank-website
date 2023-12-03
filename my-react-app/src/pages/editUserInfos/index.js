import React from "react";
import EditHeader from "../../components/editHeader";
import EditUserName from "../../components/editUserName";
import TransactionsUser from "../../components/transactions";

const EditUserInfos = () => {
  return (
    <div>
      <main>
        <EditHeader />
        <EditUserName />
        <TransactionsUser />
        <TransactionsUser />
        <TransactionsUser />
      </main>
    </div>
  );
};

export default EditUserInfos;
