import { useCallback } from "react";

const UserInfo = () => {
  const dob = useCallback(() => {
    console.log("validationForDate called");
  }, []);
  return {
    dob,
  };
};

export default UserInfo;
