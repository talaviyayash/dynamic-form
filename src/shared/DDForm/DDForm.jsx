import React, { memo } from "react";
import DDFormContainer from "../../dynamic-form/container/DDForm.container";
import FormDynamic from "./DDFormSwitch";
import { checkBox, typeConfig } from "../../description/form";

const DDForm = ({ configArray }) => {
  const { handelChangeType, state,validateAllField, handelChangeCheckBox } = DDFormContainer({
    configArray,
  });
  return (
    <div className="container">
      {configArray.map((element, index) => {
        const { type, patterns = [], name } = element;
        let func;
        if (typeConfig.includes(type)) {
          func = (e) => handelChangeType({ e, patterns, name });
        } else if (type === checkBox) {
          func = (e) => handelChangeCheckBox({ e, name });
        }
        return (
          <FormDynamic
            key={index}
            state={state?.[name]}
            handelChange={func}
            element={element}
          />
        );
      })}
      <button onClick={validateAllField}>validate</button>
    </div>
  );
};

export default memo(DDForm);
