import React, { useState } from "react";
import Form from "../container/Form";
import { configArray } from "../description/form";

const ShowForm = () => {
  const [state, setState] = useState(() =>
    configArray.reduce((tempState, ele) => {
      return {
        ...tempState,
        [ele.name]: {
          value: "",
        },
      };
    }, {})
  );
  const validAll = () => {
    const key = Object.keys(state);
    let isAnyError = 0;
    const tempState = key.reduce((tempState, ele) => {
      if (state[ele].value === undefined || state[ele].value.length > 0) {
        ++isAnyError;
      }
      return {
        ...tempState,
        [ele]: {
          value: state[ele].value,
          error: state[ele].error ?? "please fill this field properly",
        },
      };
    }, {});
    setState(tempState);
    return isAnyError;
  };
  return (
    <div>
      <Form configArray={configArray} state={state} setState={setState} />
      <button onClick={() => validAll()}>Valid all</button>
    </div>
  );
};

export default ShowForm;
