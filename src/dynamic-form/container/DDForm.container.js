import { useCallback, useState } from "react";
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

  const handelChangeType = useCallback(({ e, patterns, name }) => {
    const value = e.target.value;
    const errorMsg =
      patterns?.filter(({ regex }) => {
        const isValid = value.match(regex);
        return !isValid;
      }) ?? [];
    setState((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        value,
        error: errorMsg[0]?.error ?? "",
      },
    }));
  }, []);

  const handelChangeCheckBox = useCallback(({ e, name }) => {
    const isChecked = e.target.checked;
    setState((prev) => {
      let filteredArray = [];
      if (!isChecked) {
        filteredArray = prev?.[name]?.value?.filter(
          (value) => !(e.target.value === value)
        );
      }
      return {
        ...prev,
        [name]: {
          ...prev[name],
          value: isChecked
            ? [...(prev?.[name]?.value || []), e.target.value]
            : [...filteredArray],
          error: isChecked
            ? ""
            : filteredArray.length === 0
            ? `Select at least one ${name}`
            : "",
        },
      };
    });
  }, []);

  const validateAllField = (e) => {
    let isError = false;
    e?.preventDefault();
    const stateWithValidation = configArray.reduce(
      (total, val) => {
        const { name, patterns, type, required } = val;
        const { value } = state[name];
        const lengthOfValueIsO = value?.length === 0;
        if (type === checkBox) {
          isError = isError
            ? isError
            : required
            ? lengthOfValueIsO && true
            : false;
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
          isError = isError
            ? isError
            : required
            ? lengthOfValueIsO
              ? true
              : errorMsg[0]?.error === undefined && false
            : false;
          return {
            ...total,
            [name]: {
              value,
              error: errorMsg[0]?.error
                ? errorMsg[0]?.error
                : lengthOfValueIsO
                ? "Please fill this field"
                : "",
            },
          };
        }
      },
      { ...state }
    );
    setState({ ...stateWithValidation });
  };

  return {
    state,
    handelChangeType,
    handelChangeCheckBox,
    validateAllField,
  };
};

export default DDFormContainer;
