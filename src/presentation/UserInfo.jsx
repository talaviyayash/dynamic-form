import React, { memo } from "react";
import DDFormContainer from "../container/ddForm.container";
import UserInfoContainer from "../container/userInfo.container";
import { userInfoForm } from "../description/userInfo.description";
import DDFormUserInfo from "../shared/DDForm/DDFormUserInfo";
const UserInfo = () => {
  const allValidationFunction = UserInfoContainer();
  const {
    handelChangeType,
    state,
    validateAllField,
    error,
    handelChangeCheckBox,
  } = DDFormContainer({
    configArray: userInfoForm,
    allValidationFunction,
  });

  return (
    <>
      <div className="wrapper">
        <div className="style-form">
          <form>
            <h1 className="center">User Info Form</h1>
            <DDFormUserInfo
              handelChangeType={handelChangeType}
              configArray={userInfoForm}
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

export default memo(UserInfo);
