import { useState } from "react";

const DDFormContainer = ({ configArray }) => {
  const [state, setState] = useState(() => {
    return configArray.reduce((total, ele) => {
      return {
        ...total,
        [ele.name]: {
          value: "",
          error: "",
          required: ele?.required,
          patterns: ele.patterns ?? [],
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

  // const validateAllField = () => {
  //   const isError = Object.keys(state).forEach((val) => {
  //     console.log(state[val]);
  //     const { patterns, value, required, error } = state[val];
  //     if (!required && error) {
  //       return false;
  //     }
  //     const errorMsg = patterns?.filter(({ regex }) => {
  //       const isValid = value.match(regex);
  //       return !isValid;
  //     });
  //     return val;
  //   });
  // };
  // validateAllField();
  return {
    state,
    handelChangeType,
    handelChangeCheckBox,
  };
};

export default DDFormContainer;
