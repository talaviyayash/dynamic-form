import React, { memo } from "react";
import CheckBox from "../DDCheckBox";
import RadioBtn from "../DDRadioBtn";
import InputText from "../DDInputText";
import SelectBox from "../DDSelectBox";
import DDTextArea from "../DDTextArea";
import { emptyString } from "../../description/global.description";

const FormDynamic = ({ element, value, handelChange }) => {
  const { type = emptyString, attributes = {}, name, required } = element;
  switch (type) {
    case "text":
      return (
        <InputText
          element={element}
          value={value}
          handelChange={handelChange}
          required={required}
        />
      );
    case "select":
      return (
        <SelectBox
          element={element}
          value={value}
          handelChange={handelChange}
          required={required}
        />
      );
    case "checkbox":
      return (
        <CheckBox
          element={element}
          handelChange={handelChange}
          required={required}
        />
      );
    case "radio":
      return (
        <RadioBtn
          element={element}
          required={required}
          value={value}
          handelChange={handelChange}
        />
      );
    case "textarea":
      return (
        <DDTextArea
          element={element}
          required={required}
          value={value}
          handelChange={handelChange}
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
    case emptyString:
      break;
    default:
  }
  return <></>;
};

export default memo(FormDynamic);
