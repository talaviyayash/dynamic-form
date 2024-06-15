import { memo } from "react";
import DDFormUserInfo from "../../../shared/DDForm/DDFormUserInfo";
import DDFormContainer from "../../../container/ddForm.container";
import { loginForm } from "../../../description/login.description";
import "./login.css";
const Login = () => {
  const {
    handelChangeType,
    state,
    validateAllField,
    error,
    handelChangeCheckBox,
  } = DDFormContainer({
    configArray: loginForm,
    formName :  "loginForm"
  });

  return (
    <>
      <div className="wrapper">
        <div className="style-form">
          <form>
            <h1 className="center">Login Form</h1>
            <DDFormUserInfo
              configArray={loginForm}
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

export default memo(Login);
