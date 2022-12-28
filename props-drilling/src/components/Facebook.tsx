import React, { useState } from "react";
import SocialLogin from "./SocialLogin";
import OtpLogin from "./OtpLogin";
const Facebook: React.FC = () => {
  const [name, setName] = useState<string>("");

  const updateName: any = (values: string) => {
    setName(values);
  };

  return (
    <>
      <div className="fb-container">
        <SocialLogin updateName={updateName} />
        <div>{name}</div>
        <OtpLogin updateName={updateName} />
      </div>
    </>
  );
};

export default Facebook;
