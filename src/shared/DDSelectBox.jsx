import React, { Fragment, memo } from "react";

const SelectBox = ({ element, state, error, handelChange }) => {
  const {
    type = "",
    attributes = {},
    label = {},
    children = [],
    name,
  } = element;
  return (
    <>
      <div className={name}>
        <div>
          <label {...label?.attributes}>{label?.innerText}</label>
          <select
            type={type}
            {...attributes}
            value={state}
            onChange={handelChange}
          >
            {children.map(({ innerText = "", value }, index) => {
              return (
                <option key={index} value={value}>
                  {innerText}
                </option>
              );
            })}
          </select>
        </div>
        <div className="error">{error}</div>
      </div>
    </>
  );
};

export default memo(SelectBox);