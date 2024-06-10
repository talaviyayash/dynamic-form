import { Fragment, memo } from "react";
import DDForm from "../../shared/DDForm/DDForm";
import { configArray } from "../../description/form";

const ShowForm = () => {
  return (
    <>
      {/* <DDFormDiffLabelPosition configArray={configArray} /> */}
      <DDForm configArray={configArray} />
    </>
  );
};

export default memo(ShowForm);
