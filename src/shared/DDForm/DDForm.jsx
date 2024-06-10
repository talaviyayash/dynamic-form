import React, { Fragment, memo } from "react";
import DDFormContainer from "../../dynamic-form/container/DDForm.container";
import FormDynamic from "./DDFormSwitch";
import { checkBox } from "../../description/form";
import DDLabel from "../DDLabel";
import DDError from "../DDError";

const DDForm = ({ configArray }) => {
  const { handelChangeType, state, validateAllField, handelChangeCheckBox } =
    DDFormContainer({
      configArray,
    });
  return (
    <div className="container">
      {configArray.map((element, index) => {
        const { type, name, label } = element;
        return (
          <Fragment key={index}>
            <div className="flex">
              <DDLabel label={label} />
              <FormDynamic
                state={state?.[name]}
                handelChange={
                  type === checkBox ? handelChangeCheckBox : handelChangeType
                }
                element={element}
              />
            </div>
            <DDError error={state?.[name]?.error} />
          </Fragment>
        );
      })}
      <button onClick={validateAllField}>validate</button>
    </div>
  );
};

export default memo(DDForm);
