import { useState, useRef, useEffect } from "react";
interface Iuser {
  name?: string;
  age?: number;
}
const users = [
  {
    name: "tikaram",
    age: 22,
  },
  {
    name: "paras",
    age: 20,
  },
];
const UserDetails: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [user, setUser] = useState<Iuser | undefined>();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSearch = () => {
    const searchUser = users.find((user) => {
      return user.name === name;
    });

    setUser(searchUser);
  };

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }

    inputRef.current.focus();

    // anotherway to check  is optional checking

    // inputRef.current?.focus();

  }, []);

  return (
    <>
      <div>
        <h1>User search</h1>
        <div>
          <h1>{user?.name}</h1>
          <h1>{user?.age}</h1>
        </div>
        <input
          type="text"
          ref={inputRef}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleSearch}>Find User</button>
      </div>
    </>
  );
};
export default UserDetails;
