import { useCallback, useState } from "react";
import { emptyString } from "../description/global.description";

const DDFormContainer = ({ configArray, allValidationFunction }) => {
  const [state, setState] = useState({});

  const [error, setError] = useState({});

  const singleErrorFind = useCallback(
    ({ value, patterns, required, name }) => {
      const lengthOfValueIsZero = value.length === 0;
      const { isRequired, defaultMsg } = required;

      let { error: errorMsg } =
        patterns?.find(({ regex = "" }) => {
          const isValid = value?.match(regex);
          return !isValid;
        }) ?? {};

      const customValidationFunction = allValidationFunction?.[name];

      if (customValidationFunction && !errorMsg) {
        setState((prev) => {
          errorMsg = customValidationFunction(prev);
          return prev;
        });
      }
      let isAnyErrorMsg;

      setError((prev) => {
        isAnyErrorMsg = isRequired
          ? errorMsg ||
            (lengthOfValueIsZero
              ? defaultMsg || `Please fill ${name} field properly`
              : emptyString)
          : lengthOfValueIsZero
          ? emptyString
          : errorMsg || emptyString;
        return {
          ...prev,
          [name]: isAnyErrorMsg,
        };
      });

      return Boolean(isAnyErrorMsg);
    },
    [allValidationFunction]
  );

  const errorFind = ({ name }) => {
    const ele = configArray.find((val) => val.name === name);

    const { patterns, required } = ele;

    const value = state[name] ?? emptyString;

    const isErrorFind = singleErrorFind({
      value: value,
      patterns,
      required,
      name,
    });
    return isErrorFind;
  };

  const handelChangeType = useCallback(
    ({ e, patterns, name, required }) => {
      const value = e.target.value;
      setState((prev) => ({
        ...prev,
        [name]: value,
      }));

      singleErrorFind({
        value: value.trim(),
        patterns,
        required,
        name,
      });
    },
    [singleErrorFind]
  );

  const handelChangeCheckBox = useCallback(({ e, name, required }) => {
    const isChecked = e.target.checked;
    const value = e.target.value;
    const { isRequired, defaultMsg } = required;

    setState((prev) => {
      let filteredArray = prev?.[name] ?? [];
      if (!isChecked) {
        filteredArray = prev?.[name]?.filter((val) => !(value === val)) ?? [];
      } else {
        filteredArray.push(value);
      }

      setError((prev) => ({
        ...prev,
        [name]: isChecked
          ? emptyString
          : filteredArray.length === 0
          ? isRequired && (defaultMsg || `Please fill ${name} field properly`)
          : emptyString,
      }));

      return {
        ...prev,
        [name]: [...filteredArray],
      };
    });
  }, []);

  const validateAllField = (e) => {
    e?.preventDefault();
    let isError = false;

    configArray.forEach((val) => {
      const { name, patterns, required } = val;

      const value = state[name] ?? emptyString;

      const errorFound = singleErrorFind({
        value: value,
        patterns,
        required,
        name,
      });

      isError = isError || errorFound;
    }, {});
    return !isError;
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
