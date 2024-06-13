import { useCallback, useMemo } from "react";

const UserInfo = () => {
  const dob = useCallback(() => {
    console.log("validationForDate called");
  }, []);
  const returnObj = useMemo(
    () => ({
      dob,
    }),
    [dob]
  );
  return returnObj;
};

export default UserInfo;
