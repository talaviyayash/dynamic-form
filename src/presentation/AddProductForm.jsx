import React, { memo } from "react";
import DDFormContainer from "../container/ddForm.container";
import { addProductArray } from "../description/addProduct.description";
import DDForm from "../shared/DDForm/DDForm";
const AddProductForm = () => {
  const {
    handelChangeType,
    state,
    validateAllField,
    error,
    // errorFind,
    handelChangeCheckBox,
  } = DDFormContainer({
    configArray: addProductArray,
  });
  return (
    <>
      <div className="heading">Edit</div>
      <form>
        <div className="container">
          <DDForm
            configArray={addProductArray}
            handelChangeType={handelChangeType}
            state={state}
            error={error}
            handelChangeCheckBox={handelChangeCheckBox}
          />
        </div>
      </form>
      <button onClick={validateAllField}>submit</button>
    </>
  );
};
export default memo(AddProductForm);
