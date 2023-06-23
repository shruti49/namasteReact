import React from "react";
import User from "../components/User";

const About = () => {
  const user = {
    name: "Shruti",
    location: "Delhi",
    contact: "shruti49/github.com",
  };

  return (
    <div>
      <h1>About</h1>
      <h2>Namster React Practise</h2>
      <User user={user} />
    </div>
  );
};

export default About;
