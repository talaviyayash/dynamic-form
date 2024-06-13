import { memo, useCallback, useMemo } from "react";
import DDFormUserInfo from "../../../shared/DDForm/DDFormUserInfo";
import DDFormContainer from "../../../container/ddForm.container";

import "./forget-password.css";
import { forgetPasswordForm } from "../../../description/forgetPassword.description";
import { emptyString } from "../../../description/global.description";

const ForgetPassword = () => {
  const comparePasswords = useCallback(({ password, confirmPassword }) => {
    if (password !== confirmPassword) {
      return "Password and Confirm password not match";
    } else {
      return emptyString;
    }
  }, []);
  const containerObj = useMemo(() => {
    return {
      confirmPassword: comparePasswords,
    };
  }, [comparePasswords]);
  const {
    handelChangeType,
    state,
    validateAllField,
    error,
    handelChangeCheckBox,
  } = DDFormContainer({
    configArray: forgetPasswordForm,
    allValidationFunction: containerObj,
  });

  return (
    <>
      <div className="wrapper">
        <div className="style-form">
          {/* <form> */}
          <h1 className="center">Change Password</h1>
          <DDFormUserInfo
            configArray={forgetPasswordForm}
            handelChangeType={handelChangeType}
            state={state}
            error={error}
            handelChangeCheckBox={handelChangeCheckBox}
          />
          <div className="submit">
            <button onClick={validateAllField}>submit</button>
          </div>
          {/* </form> */}
        </div>
      </div>
    </>
  );
};

export default memo(ForgetPassword);
