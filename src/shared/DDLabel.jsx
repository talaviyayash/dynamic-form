import React, { memo } from "react";

const DDLabel = ({ label }) => {
  const { innerText, ...attribute } = label;
  return <label {...attribute}>{innerText}</label>;
};

export default memo(DDLabel);
