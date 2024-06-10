import { Fragment, memo } from "react";
import { checkBox } from "../../description/form";
import DDLabel from "../DDLabel";
import DDFormSwitch from "./DDFormSwitch";
import DDError from "../DDError";
import DDFormContainer from "../../dynamic-form/container/DDForm.container";

const DDFormDiffLabelPosition = ({ configArray }) => {
  const {
    handelChangeType,
    state,
    validateAllField,
    errorFind,
    handelChangeCheckBox,
    error,
  } = DDFormContainer({
    configArray,
  });
  return (
    <div className="container">
      {configArray.map((element, index) => {
        const { type, name, label, required } = element;
        return (
          <Fragment key={index}>
            <div className="flex">
              <DDLabel label={label} required={required} />
              <DDFormSwitch
                state={state?.[name]}
                handelChange={
                  type === checkBox ? handelChangeCheckBox : handelChangeType
                }
                element={element}
              />
            </div>
            <DDError error={error?.[name]} />
          </Fragment>
        );
      })}
      <button onClick={() => validateAllField()}>Validate</button>
    </div>
  );
};

export default memo(DDFormDiffLabelPosition);
