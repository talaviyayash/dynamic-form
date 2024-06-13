import React, { memo } from "react";
import DDLabel from "./DDLabel";

const CheckBox = ({ element, handelChange, required }) => {
  const { children = [], name, patterns } = element;
  return (
    <>
      <div>
        {children.map(({ attributes = {}, label = {} }, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                onChange={(e) => handelChange({ e, patterns, name, required })}
                {...attributes}
              />
              <DDLabel label={label} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default memo(CheckBox);
