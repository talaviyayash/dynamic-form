import React, { memo } from "react";
import DDLabel from "./DDLabel";

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
        <div className="error">{error}</div>
      </div>
    </>
  );
};

export default memo(InputText);
