import React, { memo, useEffect } from "react";
import DDFormContainer from "../../dynamic-form/container/DDForm.container";
import FormDynamic from "./DDFormSwitch";
import { checkBox } from "../../description/form";

const DDForm = ({ configArray }) => {
  const { handelChangeType, state, validateAllField, handelChangeCheckBox } =
    DDFormContainer({
      configArray,
    });
  return (
    <div className="container">
      {configArray.map((element, index) => {
        const { type, name } = element;
        return (
          <FormDynamic
            key={index}
            state={state?.[name]}
            handelChange={
              type === checkBox ? handelChangeCheckBox : handelChangeType
            }
            element={element}
          />
        );
      })}
      <button onClick={validateAllField}>validate</button>
    </div>
  );
};

export default memo(DDForm);
