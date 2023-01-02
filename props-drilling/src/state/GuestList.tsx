import React, { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [guests, setGuests] = useState<string[]>([]);
  const handleAddbtn = () => {
    setGuests([...guests, name]);
  };
  return (
    <>
      <div>
        <h1>GUest List</h1>
        <div>
          {guests.map((guest, id: number) => {
            return <h1>{guest}</h1>;
          })}
        </div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <button onClick={handleAddbtn}>Add Guest</button>
      </div>
    </>
  );
};

export default GuestList;
