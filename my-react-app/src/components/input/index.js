import React from "react";

const Input = ({ classNameInput, inputType, id, labelName }) => {
  return (
    <div className={`input-${classNameInput}`}>
      {" "}
      <label htmlFor={id}>{labelName}</label>
      <input type={inputType} id={id} />
    </div>
  );
};

export default Input;
