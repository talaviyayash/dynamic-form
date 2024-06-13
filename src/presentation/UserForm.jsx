import { memo } from "react";
import DDForm from "../shared/DDForm/DDForm";
import { configArray } from "../description/userForm.description";
import DDFormContainer from "../container/ddForm.container";

const UserForm = () => {
  const {
    handelChangeType,
    state,
    validateAllField,
    error,
    errorFind,
    handelChangeCheckBox,
  } = DDFormContainer({
    configArray,
  });

  return (
    <>
      <DDForm
        configArray={configArray}
        handelChangeType={handelChangeType}
        state={state}
        validateAllField={validateAllField}
        error={error}
        errorFind={errorFind}
        handelChangeCheckBox={handelChangeCheckBox}
      />
      {/* <button onClick={() => errorFind({ name: "password" })}>validate</button> */}
      <button onClick={() => validateAllField()}>validate</button>
    </>
  );
};

export default memo(UserForm);
