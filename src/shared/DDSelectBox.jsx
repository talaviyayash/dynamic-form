import React, { Fragment, memo } from "react";
import { emptyString } from "../description/global.description";

const SelectBox = ({ element, value, handelChange, required }) => {
  const {
    type = emptyString,
    attributes = {},
    children = [],
    name,
    patterns = [],
  } = element;
  return (
    <>
      <select
        type={type}
        {...attributes}
        style={{ height: "30px", borderRadius: "5px", padding: "5px" }}
        value={value}
        onChange={(e) => handelChange({ e, patterns, name, required })}
      >
        {children.map(({ innerText = emptyString, value }, index) => {
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
