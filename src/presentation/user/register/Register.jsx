import { memo } from "react";
import DDFormUserInfo from "../../../shared/DDForm/DDFormUserInfo";
import DDFormContainer from "../../../container/ddForm.container";

import "./register.css";
import { registerForm } from "../../../description/register.description";
const Register = () => {
  const {
    handelChangeType,
    state,
    validateAllField,
    error,
    handelChangeCheckBox,
  } = DDFormContainer({
    configArray: registerForm,
  });

  return (
    <>
      <div className="wrapper">
        <div className="style-form">
          <form>
            <h1 className="center">Register Form</h1>
            <DDFormUserInfo
              configArray={registerForm}
              handelChangeType={handelChangeType}
              state={state}
              error={error}
              handelChangeCheckBox={handelChangeCheckBox}
            />
            <div className="submit">
              <button onClick={validateAllField}>submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default memo(Register);
