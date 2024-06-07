import React, { memo } from "react";
import DDFormContainer from "../../dynamic-form/container/DDForm.container";
import FormDynamic from "./DDFormSwitch";
import { checkBox, typeConfig } from "../../dynamic-form/description/form";

const DDForm = ({ configArray, state, setState, error, setError }) => {
  const { handelChangeType, handelChangeCheckBox } = DDFormContainer({
    configArray,
    state,
    setState,
    error,
    setError,
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
            value={state?.name?.value}
            handelChange={func}
            element={element}
            error={error?.[name]}
          />
        );
      })}
    </div>
  );
};

export default memo(DDForm);
