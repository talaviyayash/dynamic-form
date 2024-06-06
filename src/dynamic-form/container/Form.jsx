import React, { Fragment } from "react";
import FormDynamic from "../presentation/FormDynamic";
import { checkBox, typeConfig } from "../description/form";
/* eslint-disable */

const Form = ({ configArray, state, setState }) => {
  return (
    <div className="container">
      {configArray.map((element, index) => {
        const { type, patterns = [], name } = element;
        let func;
        if (typeConfig.includes(type)) {
          func = (e) => {
            const value = e.target.value;
            console.log(value);
            const errorMsg = patterns?.filter(({ regex }) => {
              const isValid = value.match(regex);
              return !isValid;
            });
            setState((prev) => ({
              ...prev,
              [name]: {
                value: value,
                error: errorMsg[0]?.error || "",
              },
            }));
          };
        } else if (type === checkBox) {
          func = (e) => {
            if (e.target.checked) {
              setState((prev) => ({
                ...prev,
                [name]: {
                  value: [...(prev?.[name]?.value || []), e.target.value],
                  error: "",
                },
              }));
            } else {
              const filteredHobby = state?.[name]?.value?.filter(
                (value) => !(e.target.value === value)
              );
              setState((prev) => ({
                ...prev,
                [name]: {
                  value: [...filteredHobby],
                  error:
                    filteredHobby.length === 0
                      ? "please fill this field properly"
                      : "",
                },
              }));
            }
          };
        }
        return (
          <Fragment key={index}>
            <FormDynamic state={state} handelChange={func} element={element} />
          </Fragment>
        );
      })}
    </div>
  );
};

export default Form;
