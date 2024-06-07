import React from "react";
import { configArray } from "../../description/form";
import DDForm from "../../shared/DDForm/DDForm";

const ShowForm = () => {
  return (
    <div>
      <form>
        <DDForm configArray={configArray} />
      </form>
      {/* <button onClick={() => validAll()}>Valid all</button> */}
    </div>
  );
};

export default ShowForm;
