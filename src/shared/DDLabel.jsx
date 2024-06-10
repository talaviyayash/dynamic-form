import React from "react";

const DDLabel = ({ label }) => {
  return <label {...label?.attributes}>{label?.innerText}</label>;
};

export default DDLabel;
