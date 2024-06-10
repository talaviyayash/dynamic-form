import { useState } from "react";
import { checkBox } from "../../description/form";

const DDFormContainer = ({ configArray }) => {
  const [state, setState] = useState(() => {
    return configArray.reduce((total, ele) => {
      return {
        ...total,
        [ele.name]: {
          value: "",
          error: "",
        },
      };
    }, {});
  });
  const handelChangeType = ({ e, patterns, name }) => {
    const value = e.target.value;
    const errorMsg = patterns?.filter(({ regex }) => {
      const isValid = value.match(regex);
      return !isValid;
    });
    setState((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        value,
        error: errorMsg[0]?.error ?? "",
      },
    }));
  };
  const handelChangeCheckBox = ({ e, name }) => {
    if (e.target.checked) {
      setState((prev) => ({
        ...prev,
        [name]: {
          ...prev[name],
          value: [...(prev?.[name]?.value || []), e.target.value],
          error: "",
        },
      }));
    } else {
      const filteredHobby = state?.[name].value?.filter(
        (value) => !(e.target.value === value)
      );
      setState((prev) => ({
        ...prev,
        [name]: {
          ...prev[name],
          value: [...filteredHobby],
          error:
            filteredHobby.length === 0 ? "please fill this field properly" : "",
        },
      }));
    }
  };

  const validateAllField = (e) => {
    let isError = false;
    e?.preventDefault();
    const error = configArray.reduce(
      (total, val) => {
        const { name, patterns, type } = val;
        const { value } = state[name];
        if (type === checkBox) {
          const lengthOfValue = value?.length === 0;
          isError = isError ? isError : lengthOfValue ? true : false;
          return {
            ...total,
            [name]: {
              value,
              error: value?.length === 0 ? "please select filed" : "",
            },
          };
        } else {
          const errorMsg =
            patterns?.filter(({ regex }) => {
              const isValid = value.match(regex);
              return !isValid;
            }) ?? [];
          return {
            ...total,
            [name]: {
              value,
              error: errorMsg[0]?.error ? errorMsg[0]?.error : "",
            },
          };
        }
        return;
      },
      { ...state }
    );
    console.log(error);
  };
  // validateAllField();
  return {
    state,
    handelChangeType,
    handelChangeCheckBox,
    validateAllField,
  };
};

export default DDFormContainer;
