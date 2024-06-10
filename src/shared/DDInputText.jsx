import React, { memo } from "react";

const InputText = ({ element, value, handelChange }) => {
  const { name, patterns, required, attributes } = element;
  return (
    <>
      <input
        {...attributes}
        value={value ?? ""}
        onChange={(e) => handelChange({ e, patterns, name, required })}
      />
    </>
  );
};

export default memo(InputText);
