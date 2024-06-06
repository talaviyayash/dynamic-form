import React, { Fragment } from "react";

const SelectBox = ({ element, state, handelChange }) => {
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
            value={state?.[name]?.value}
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
        <div className="error">{state?.[name]?.error}</div>
      </div>
    </>
  );
};

export default SelectBox;
