import React, { useContext } from "react";
import { LoginStatus } from "./Facebook";
interface nameProps {
  name: string;
}

const RenderName: React.FC<nameProps> = (props) => {
  const loginItem = useContext(LoginStatus);
  return (
    <>
      <h4>{props.name}</h4>
      <h3>
        {loginItem?.fname} {loginItem && loginItem.lname} {loginItem?.age}
      </h3>
    </>
  );
};

export default RenderName;
