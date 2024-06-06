import React from "react";
import CheckBox from "./AllForm/CheckBox";
import RadioBtn from "./AllForm/RadioBtn";
import InputText from "./AllForm/InputText";
import SelectBox from "./AllForm/SelectBox";

const FormDynamic = ({ element, state, handelChange }) => {
  const { type = "", attributes = {}, name } = element;
  switch (type) {
    case "text":
      return (
        <InputText
          element={element}
          state={state}
          handelChange={handelChange}
        />
      );
    case "select":
      return (
        <SelectBox
          element={element}
          state={state}
          handelChange={handelChange}
        />
      );
    case "checkbox":
      return (
        <CheckBox element={element} state={state} handelChange={handelChange} />
      );
    case "radio":
      return (
        <RadioBtn element={element} state={state} handelChange={handelChange} />
      );
    case "button":
      return (
        <>
          <div className={name}>
            <input type={type} {...attributes} />
          </div>
        </>
      );
    case "":
      break;
    default:
  }
  return undefined;
};

export default FormDynamic;
