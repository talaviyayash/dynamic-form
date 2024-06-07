import React, { memo } from "react";
import CheckBox from "../CheckBox";
import RadioBtn from "../DDRadioBtn";
import InputText from "../DDInputText";
import SelectBox from "../DDSelectBox";

const FormDynamic = ({ element, state, handelChange }) => {
  const { value, error } = state;
  const { type = "", attributes = {}, name } = element;
  switch (type) {
    case "text":
      return (
        <InputText
          element={element}
          state={value}
          handelChange={handelChange}
          error={error}
        />
      );
    case "select":
      return (
        <SelectBox
          element={element}
          state={value}
          handelChange={handelChange}
          error={error}
        />
      );
    case "checkbox":
      return (
        <CheckBox element={element} handelChange={handelChange} error={error} />
      );
    case "radio":
      return (
        <RadioBtn
          element={element}
          state={value}
          handelChange={handelChange}
          error={error}
        />
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
  return <></>;
};

export default memo(FormDynamic);
