import React, { memo } from "react";

const CheckBox = ({ element, state, error, handelChange }) => {
  const { label = {}, children = [], name } = element;
  return (
    <>
      <div className={name}>
        <div>
          <label {...label?.attributes}>{label?.innerText}</label>
          {children.map(({ attributes = {}, label = {} }, index) => {
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  onChange={handelChange}
                  {...attributes}
                />
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

export default memo(CheckBox);
