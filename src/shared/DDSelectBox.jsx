import React, { Fragment, memo } from "react";

const SelectBox = ({ element, value, handelChange, required }) => {
  const { type = "", attributes = {}, children = [], name, patterns } = element;
  return (
    <>
      <select
        type={type}
        {...attributes}
        value={value}
        onChange={(e) => handelChange({ e, patterns, name, required })}
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
