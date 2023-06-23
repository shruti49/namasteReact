import { useEffect, useState } from "react";

const User = (props) => {
  const { name, location, contact } = props.user;

  const [count, setCount] = useState(0);
  // const [count2] = useState(1);

  useEffect(() => {
    console.log("useEffect Called without dependency array");
  });

  useEffect(() => {
    console.log("useEffect Called with empty dependency");
  }, []);

  useEffect(() => {
    console.log("useEffect Called with count dependency");
  }, [count]);

  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: {contact}</h4>

      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default User;
