import React, { useState } from "react";
import { configArray } from "../description/form";
import DDForm from "../../shared/DDForm/DDForm";

const ShowForm = () => {
  const [error, setError] = useState({});
  const [state, setState] = useState({});
  console.log(state);
  return (
    <div>
      <form>
        <DDForm
          state={state}
          setState={setState}
          error={error}
          setError={setError}
          configArray={configArray}
        />
      </form>
      {/* <button onClick={() => validAll()}>Valid all</button> */}
    </div>
  );
};

export default ShowForm;
