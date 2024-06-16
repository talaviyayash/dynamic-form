import { useCallback, useEffect } from "react";
import { emptyString } from "../description/global.description";
import { useDispatch, useSelector } from "react-redux";
import {
  addValue,
  createForm,
  addError,
  clearForm,
} from "../store/slice/formSlice";

const DDFormContainer = ({ configArray, formName }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      createForm({
        name: formName,
      })
    );
    return () => dispatch(clearForm({ name: formName }));
  }, [dispatch, formName]);
  const formState = useSelector((state) => state?.form?.form?.[formName]);
  const { value: valueField = {}, error = {} } = formState ?? {};
  const singleErrorFind = useCallback(
    ({ value, patterns, required, name }) => {
      const lengthOfValueIsZero = value.length === 0;
      const { isRequired, defaultMsg } = required;

      let { error: errorMsg } =
        patterns?.find(({ regex = "" }) => {
          const isValid = value?.match(regex);
          return !isValid;
        }) ?? {};

      // const customValidationFunction = allValidationFunction?.[name];

      // if (customValidationFunction && !errorMsg) {
      //   setState((prev) => {
      //     errorMsg = customValidationFunction(prev);
      //     return prev;
      //   });
      // }
      let isAnyErrorMsg;

      isAnyErrorMsg = isRequired
        ? errorMsg ||
          (lengthOfValueIsZero
            ? defaultMsg || `Please fill ${name} field properly`
            : emptyString)
        : lengthOfValueIsZero
        ? emptyString
        : errorMsg || emptyString;
      dispatch(
        addError({
          name: formName,
          error: {
            [name]: isAnyErrorMsg,
          },
        })
      );
      return Boolean(isAnyErrorMsg);
    },
    [dispatch, formName]
  );

  const errorFind = ({ name }) => {
    const ele = configArray.find((val) => val.name === name);

    const { patterns, required } = ele;

    const value = valueField?.[name] ?? emptyString;

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
      dispatch(
        addValue({
          name: formName,
          value: { [name]: value },
        })
      );
      singleErrorFind({
        value: value.trim(),
        patterns,
        required,
        name,
      });
    },
    [singleErrorFind, dispatch, formName]
  );

  const handelChangeCheckBox = useCallback(
    ({ e, name, required, value }) => {
      const isChecked = e.target.checked;
      const { isRequired, defaultMsg } = required;

      let filteredArray = value ?? [];
      if (!isChecked) {
        filteredArray = value?.filter((val) => !(e.target.value === val)) ?? [];
      } else {
        filteredArray.push(e.target.value);
      }

      dispatch(
        addValue({
          value: {
            name: formName,
            [name]: [...filteredArray],
          },
          error: {
            [name]: isChecked
              ? emptyString
              : filteredArray.length === 0
              ? isRequired &&
                (defaultMsg || `Please fill ${name} field properly`)
              : emptyString,
          },
        })
      );
    },
    [dispatch, formName]
  );

  const validateAllField = (e) => {
    e?.preventDefault();
    let isError = false;

    configArray.forEach((val) => {
      const { name, patterns, required } = val;

      const value = valueField?.[name] ?? emptyString;

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
    state: valueField,
    handelChangeType,
    handelChangeCheckBox,
    validateAllField,
    errorFind,
    error,
  };
};

export default DDFormContainer;
