import React, { memo } from "react";
import CheckBox from "../DDCheckBox";
import RadioBtn from "../DDRadioBtn";
import InputText from "../DDInputText";
import SelectBox from "../DDSelectBox";

const FormDynamic = ({ element, state, handelChange }) => {
  const { value } = state;
  const { type = "", attributes = {}, name } = element;
  switch (type) {
    case "text":
      return (
        <InputText
          element={element}
          state={value}
          handelChange={handelChange}
        />
      );
    case "select":
      return (
        <SelectBox
          element={element}
          state={value}
          handelChange={handelChange}
        />
      );
    case "checkbox":
      return <CheckBox element={element} handelChange={handelChange} />;
    case "radio":
      return (
        <RadioBtn element={element} state={value} handelChange={handelChange} />
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
