import React, { memo } from "react";

const DDLabel = ({ label, required }) => {
  const { innerText, ...attribute } = label;
  return (
    <label {...attribute}>
      {innerText}
      {required && "*"}
    </label>
  );
};

export default memo(DDLabel);
