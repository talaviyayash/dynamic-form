import { useCallback, useState } from "react";
import { checkBox } from "../../description/form";

const DDFormContainer = ({ configArray }) => {
  const [state, setState] = useState({});
  const [error, setError] = useState({});

  const errorFind = ({ name }) => {
    const ele = configArray.filter((val) => val.name === name);
    const { patterns, required } = ele[0];
    const { value = "" } = state[name] ?? {};
    const errorMsg =
      patterns?.filter(({ regex }) => {
        const isValid = value?.match(regex);
        return !isValid;
      }) ?? [];
    setError((prev) => ({
      ...prev,
      [name]: required
        ? errorMsg[0]?.error
          ? errorMsg[0]?.error
          : value?.length === 0
          ? `Please fill the ${name} properly`
          : ""
        : value?.length === 0
        ? ""
        : errorMsg[0]?.error ?? "",
    }));
    const isAnyError = required
      ? errorMsg[0]?.error
        ? true
        : value.length === 0 && false
      : value.length === 0
      ? false
      : true;

    return isAnyError;
  };

  const handelChangeType = useCallback(({ e, patterns, name, required }) => {
    const value = e.target.value;
    const errorMsg =
      patterns?.filter(({ regex }) => {
        const isValid = value.match(regex);
        return !isValid;
      }) ?? [];
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError((prev) => ({
      ...prev,
      [name]: required
        ? errorMsg[0]?.error
          ? errorMsg[0]?.error
          : required
          ? value.length === 0 && `Please fill the field properly`
          : ""
        : value.length === 0
        ? ""
        : errorMsg[0]?.error,
    }));
  }, []);

  const handelChangeCheckBox = useCallback(({ e, name }) => {
    const isChecked = e.target.checked;
    setState((prev) => {
      let filteredArray = [];
      if (!isChecked) {
        filteredArray =
          prev?.[name]?.value?.filter((value) => !(e.target.value === value)) ??
          [];
      }
      setError((prev) => ({
        ...prev,
        [name]: isChecked
          ? ""
          : filteredArray.length === 0
          ? `Select at least one ${name}`
          : "",
      }));
      return {
        ...prev,
        [name]: isChecked
          ? [...(prev?.[name]?.value ?? []), e.target.value]
          : [...filteredArray],
      };
    });
  }, []);

  const validateAllField = (e) => {
    let isError = false;
    e?.preventDefault();
    const stateWithValidation = configArray.reduce(
      (objectOfState, val) => {
        const { name, patterns, type, required } = val;
        const value = state[name] ?? "";
        const lengthOfValueIsO = value?.length === 0;
        if (type === checkBox) {
          isError = isError
            ? isError
            : required
            ? lengthOfValueIsO && true
            : false;
          return {
            ...objectOfState,
            [name]: value?.length === 0 ? "please select filed" : "",
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
              : errorMsg[0]?.error
              ? true
              : false
            : lengthOfValueIsO
            ? false
            : true;
          return {
            ...objectOfState,
            [name]: required
              ? errorMsg[0]?.error
                ? errorMsg[0]?.error
                : lengthOfValueIsO
                ? `Please fill ${name} field properly`
                : ""
              : lengthOfValueIsO
              ? ``
              : errorMsg[0]?.error ?? "",
          };
        }
      },
      { value: { ...state }, error: { ...error } }
    );
    setError({ ...stateWithValidation });
  };
  return {
    state,
    handelChangeType,
    handelChangeCheckBox,
    validateAllField,
    errorFind,
    error,
  };
};

export default DDFormContainer;
