import React, { Fragment, memo } from "react";
import FormDynamic from "./DDFormSwitch";
import DDLabel from "../DDLabel";
import DDError from "../DDError";
import { checkBox } from "../../description/ddform.description";

const DDForm = ({
  configArray,
  handelChangeType,
  state,
  error,
  handelChangeCheckBox,
}) => {
  return (
    <>
      {configArray.map((element, index) => {
        const { type, name, label, required } = element;
        const { isRequired } = required;
        return (
          <Fragment key={index}>
            <DDLabel label={label} isRequired={isRequired} />
            <div>
              <FormDynamic
                value={state?.[name]}
                handelChange={
                  type === checkBox ? handelChangeCheckBox : handelChangeType
                }
                element={element}
              />
              <DDError error={error?.[name]} />
            </div>
          </Fragment>
        );
      })}
    </>
  );
};

export default memo(DDForm);
