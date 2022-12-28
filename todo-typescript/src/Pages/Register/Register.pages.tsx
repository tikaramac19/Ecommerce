import React, { useState } from "react";
import MyBtn from "../../common/Practice/Btn.common";
import ExampleTypes from "../../common/Types/Example.common";
import "./_Register.scss";

interface IpersonInfo {
  name: string;
  address: string;
  phone: number;
  age: number;
}

const Register: React.FC = () => {
  const [enteredText, setEnteredText] = useState<string | undefined>();
  const [to, setTo] = useState<string | undefined>('Ural');

  const [person, setPerson] = useState<IpersonInfo>({
    name: "Prakash",
    address: "surkhet",
    phone: 9833363,
    age: 20,
  });

  let arr: string[] = ["a", "b", "c", "d"];
  // const fullname = (values: string | number) => {
  //   if (typeof values === "string") {
  //     console.log(values.toLocaleUpperCase());
  //   } else {
  //     console.log(values);
  //   }
  // };

  // fullname("tikaram Ac");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredText(e.target.value);
  };

  const sendMessage = () => {
    setTimeout(() => {
      alert(`you say ${enteredText} to ${to}`);
    }, 5000);
  };

  return (
    <>
      <div>
        <h2>person Info</h2>
        <h5>Name : {person.name}</h5>
        <h5>address : {person.address}</h5>
        <h5>phone : {person.phone}</h5>
        <h5>age : {person.age}</h5>
      </div>
      <MyBtn title="Change person" setPerson={setPerson} />

      {/* <div>
        {arr.map((item: string, id: number) => {
          return (
            <>
              <h1>{item.toUpperCase()}</h1>
            </>
          );
        })}
      </div> */}

      <div className="chat-container">
        <div>
          <h2>Chat</h2>
          <span>To:</span>
          <select onChange={(e) => setTo(e.target.value)}>
            <option value="Ural">Ural</option>
            <option value="Anjal"> Anjal</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="enter something "
          onChange={(e) => handleChange(e)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>

      <ExampleTypes />

    </>
  );
};
export default Register;
