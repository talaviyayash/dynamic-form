import React, { memo } from "react";
import DDLabel from "./DDLabel";

const RadioBtn = ({ element, error, state, handelChange }) => {
  const { children = [], name, patterns } = element;

  return (
    <>
      {children?.map(({ attributes = {}, label = {} }, index) => {
        return (
          <div key={index}>
            <input
              type="radio"
              {...attributes}
              onChange={(e) => handelChange({ e, patterns, name })}
            />
            <DDLabel label={label} />
          </div>
        );
      })}
    </>
  );
};

export default memo(RadioBtn);
