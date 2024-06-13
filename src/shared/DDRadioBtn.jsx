import React, { memo } from "react";
import DDLabel from "./DDLabel";

const RadioBtn = ({ element, handelChange, required }) => {
  const { children = [], name, patterns } = element;

  return (
    <>
      <div>
        {children?.map(({ attributes = {}, label = {} }, index) => {
          return (
            <div key={index}>
              <input
                type="radio"
                {...attributes}
                onChange={(e) => handelChange({ e, patterns, name, required })}
              />
              <DDLabel label={label} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default memo(RadioBtn);
