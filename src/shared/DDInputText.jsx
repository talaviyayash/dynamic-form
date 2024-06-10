import React, { memo } from "react";
import DDLabel from "./DDLabel";
import DDError from "./DDError";

const InputText = ({ element, state, handelChange }) => {
  const { name, patterns, attributes } = element;
  return (
    <>
      <input
        {...attributes}
        value={state}
        onChange={(e) => handelChange({ e, patterns, name })}
      />
    </>
  );
};

export default memo(InputText);
