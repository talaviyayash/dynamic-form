import { Fragment, memo } from "react";
import { checkBox } from "../../description/ddform.description";
import DDLabel from "../DDLabel";
import DDFormSwitch from "./DDFormSwitch";
import DDError from "../DDError";

const DDFormUserInfo = ({
  configArray,
  handelChangeType,
  state,
  validateAllField,
  error,
  handelChangeCheckBox,
}) => {
  return (
    <>
      {configArray.map((element, index) => {
        const { type, name, label, required } = element;
        console.log("required", required);
        return (
          <Fragment key={index}>
            <div className={`${name + "-form"} wrap-input`}>
              <DDLabel label={label} required={required} />
              <DDFormSwitch
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

export default memo(DDFormUserInfo);
