import React, { memo } from "react";
import { emptyString } from "../description/global.description";

const InputText = ({ element, value, handelChange }) => {
  const { name, patterns, required, attributes } = element;
  return (
    <>
      <input
        {...attributes}
        className={
          attributes.type === "file"
            ? ""
            : `input-text ${attributes?.className}`
        }
        value={value ?? emptyString}
        onChange={(e) => handelChange({ e, patterns, name, required })}
        autocomplete="off"
      />
    </>
  );
};

export default memo(InputText);
