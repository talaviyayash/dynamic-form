import { memo } from "react";
import DDFormUserInfo from "../../../shared/DDForm/DDFormUserInfo";
import DDFormContainer from "../../../container/ddForm.container";
import "./employeeForm.css";
import { employeeForm } from "../../../description/employeeForm.description";

const EmployeeForm = () => {
  const {
    handelChangeType,
    state,
    validateAllField,
    error,
    handelChangeCheckBox,
  } = DDFormContainer({
    configArray: employeeForm,
    // allValidationFunction: {
    //   email: ({ email }) => {
    //     console.log(email);
    //   },
    // },
  });

  return (
    <>
      <div className="wrapper">
        <div className="style-form">
          <form>
            <h1 className="center">Employee Info</h1>
            <DDFormUserInfo
              configArray={employeeForm}
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

export default memo(EmployeeForm);
