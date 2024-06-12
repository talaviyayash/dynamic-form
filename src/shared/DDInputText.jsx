import React, { memo } from "react";
import { emptyString } from "../description/global.description";

const InputText = ({ element, value, handelChange }) => {
  const { name, patterns, required, attributes } = element;
  return (
    <>
      <input
        {...attributes}
        value={value ?? emptyString}
        onChange={(e) => handelChange({ e, patterns, name, required })}
      />
    </>
  );
};

export default memo(InputText);
