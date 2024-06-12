import React, { memo } from "react";
import DDFormContainer from "../container/ddForm.container";
import { userForm } from "../description/userInfo.description";
import DDFormUserInfo from "../shared/DDForm/DDFormUserInfo";
const UserInfo = () => {
  const {
    handelChangeType,
    state,
    validateAllField,
    error,
    // errorFind,
    handelChangeCheckBox,
  } = DDFormContainer({
    configArray: userForm,
  });
  return (
    <>
      <form>
        <div className="container" style={{ display: "grid" }}>
          {/* <div className="wrap"> */}
          <DDFormUserInfo
            handelChangeType={handelChangeType}
            configArray={userForm}
            state={state}
            error={error}
            handelChangeCheckBox={handelChangeCheckBox}
          />
          {/* </div> */}
        </div>
      </form>
      <button onClick={validateAllField}>submit</button>
    </>
  );
};
export default memo(UserInfo);
