import React, { memo } from "react";

const InputText = ({ element, error, state, handelChange }) => {
  const { label = {}, name, attributes } = element;
  return (
    <>
      <div className={name}>
        <label {...label?.attributes}>{label?.innerText}</label>
        <input {...attributes} value={state} onChange={handelChange} />
        <div className="error">{error}</div>
      </div>
    </>
  );
};

export default memo(InputText);
