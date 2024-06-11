import React from "react";
import { emptyString } from "../description/userForm.description";

const DDTextArea = ({ element, value, handelChange }) => {
  const { name, patterns, required, attributes } = element;
  return (
    <>
      <textarea
        {...attributes}
        value={value ?? emptyString}
        onChange={(e) => handelChange({ e, patterns, name, required })}
      />
    </>
  );
};
export default DDTextArea;
