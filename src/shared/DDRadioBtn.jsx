import React, { memo } from "react";

const RadioBtn = ({ element, error, state, handelChange }) => {
  const { label = {}, children = [], name } = element;

  return (
    <>
      <div className={name}>
        <div>
          <label {...label?.attributes}>{label?.innerText}</label>
          {children?.map(({ attributes = {}, label = {} }, index) => {
            return (
              <div key={index}>
                <input type="radio" {...attributes} onChange={handelChange} />
                <label {...label?.attributes}>{label?.innerText}</label>
              </div>
            );
          })}
        </div>
        <div className="error">{error}</div>
      </div>
    </>
  );
};

export default memo(RadioBtn);
