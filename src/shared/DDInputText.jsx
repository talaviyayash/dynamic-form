import React, { memo } from "react";
import DDLabel from "./DDLabel";
import DDError from "./DDError";

const InputText = ({ element, error, state, handelChange }) => {
  const { label = {}, name, patterns, attributes } = element;
  return (
    <>
      <div className={name}>
        <DDLabel label={label} />
        <input
          {...attributes}
          value={state}
          onChange={(e) => handelChange({ e, patterns, name })}
        />
        <DDError error={error} />
      </div>
    </>
  );
};

export default memo(InputText);
