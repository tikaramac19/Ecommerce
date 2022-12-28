import React from "react";

interface myBtnProps {
  title: string;
  setPerson?: React.Dispatch<React.SetStateAction<IpersonInfo>>;
}
interface IpersonInfo {
  name: string;
  address: string;
  phone: number;
  age: number;
}

const MyBtn = (props:myBtnProps) => {
  const { title, setPerson } = props;
  return (
    <>
      <button
        onClick={() =>
          setPerson &&
          setPerson({ name: "Tikaram", address: "ktm", phone: 243343, age: 23 })
        }
      >
        {title}
      </button>
    </>
  );
};

export default MyBtn;
