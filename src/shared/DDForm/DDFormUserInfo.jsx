import { Fragment, memo } from "react";
import { checkBox } from "../../description/ddform.description";
import DDLabel from "../DDLabel";
import DDFormSwitch from "./DDFormSwitch";
import DDError from "../DDError";

const DDFormUserInfo = ({
  configArray,
  handelChangeCheckBox,
  handelChangeType,
  state,
  error,
  formName
}) => {
  return (
    <>
      <div className="DDFcontainer" style={{ display: "grid" }}>
        {configArray.map((element, index) => {
          const { type, name, label, required, wrapElementStyle } = element;
          return (
            <Fragment key={index}>
              <div
                style={wrapElementStyle}
                className={`${name + "-form DDFWrappingInput"} `}
              >
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
      </div>
    </>
  );
};

export default memo(DDFormUserInfo);
