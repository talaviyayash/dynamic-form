import React, { Fragment } from "react";

const InputText = ({ element, state, handelChange }) => {
  const { label = {}, name, attributes } = element;
  return (
    <>
      <div className={name}>
        <label {...label?.attributes}>{label?.innerText}</label>
        <input
          {...attributes}
          value={state?.[name]?.value}
          onChange={handelChange}
        />
        <div className="error">{state?.[name]?.error}</div>
      </div>
    </>
  );
};

export default InputText;
