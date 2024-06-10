import React, { Fragment, memo } from "react";

const SelectBox = ({ element, state, error, handelChange }) => {
  const {
    type = "",
    attributes = {},
    label,
    children = [],
    name,
    patterns,
  } = element;
  return (
    <>
      <select
        type={type}
        {...attributes}
        value={state}
        onChange={(e) => handelChange({ e, patterns, name })}
      >
        {children.map(({ innerText = "", value }, index) => {
          return (
            <option key={index} value={value}>
              {innerText}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default memo(SelectBox);
