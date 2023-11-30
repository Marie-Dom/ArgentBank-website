import React from "react";
import EditNavigation from "../../components/editNavigation";
import EditUserName from "../../components/editUserName";
import TransactionsUser from "../../components/transactions";

const EditUserInfos = () => {
  return (
    <div>
      <main>
        <EditNavigation />
        <EditUserName />
        <TransactionsUser />
        <TransactionsUser />
        <TransactionsUser />
      </main>
    </div>
  );
};

export default EditUserInfos;
