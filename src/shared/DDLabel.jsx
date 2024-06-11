import React, { memo } from "react";

const DDLabel = ({ label, isRequired }) => {
  const { innerText, ...attribute } = label;
  return (
    <label {...attribute}>
      {innerText}
      <span className="required">{isRequired && "*"}</span>
    </label>
  );
};

export default memo(DDLabel);
