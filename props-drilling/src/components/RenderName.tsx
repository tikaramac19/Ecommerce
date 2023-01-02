import React from "react";

interface nameProps {
  name: string;
}

const RenderName: React.FC<nameProps> = (props) => {
  return (
    <>
      <h4>{props.name}</h4>
      <h3>{}</h3> 
    </>
  );
};

export default RenderName;

