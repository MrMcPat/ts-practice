import React, { useState } from "react";

const users = [
  { name: "Sarah", age: 20 },
  { name: "Alex", age: 20 },
  { name: "Michael", age: 20 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setUser(foundUser);
  }

  return (
    <div>
      User Search
      <form onSubmit={onSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Find User</button>
      </form>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
