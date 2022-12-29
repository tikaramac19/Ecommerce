import React, { useCallback, memo } from "react";

const Child: React.FC = () => {
  console.log("shehehe");
  return (
    <>
      <h1>memo</h1>
    </>
  );
};

export default memo(Child);
