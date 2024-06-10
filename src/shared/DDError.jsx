import React, { memo } from "react";

const DDError = ({ error }) => {
  return <div className="error">{error}</div>;
};

export default memo(DDError);
