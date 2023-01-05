import React, { useState, createContext } from "react";
import SocialLogin from "./SocialLogin";
import OtpLogin from "./OtpLogin";

interface nameProps {
  name: string;
}
interface loginContextInterface {
  fname: string;
  lname: string;
  age: number;
}

const loginInfo: loginContextInterface = {
  fname: "narayan",
  lname: "yadav",
  age: 22,
};

export const LoginStatus = createContext<loginContextInterface | null>(null);

const Facebook: React.FC = () => {
  const [name, setName] = useState<string>("");

  const updateName: any = (values: string) => {
    setName(values);
  };

  return (
    <>
      <LoginStatus.Provider value={loginInfo}>
        <div className="fb-container">
          <OtpLogin updateName={updateName} />
          {name}
          <SocialLogin name={name} updateName={updateName} />
        </div>
      </LoginStatus.Provider>
    </>
  );
};

export default Facebook;
