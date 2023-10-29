import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <h1>Mohammad Alawneh</h1>
      <div className="flex justify-between gap-5">
        <h2>About me</h2>
        <h2>My projects</h2>
        <h2>My Skills</h2>
        <h2>Contact me</h2>
      </div>
    </div>
  );
};

export default Navbar;
