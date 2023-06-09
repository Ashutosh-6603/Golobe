import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between mx-20 rounded-lg">
      <div className="flex gap-4">
        <div>Find Flight</div>
        <div>Find Stays</div>
      </div>
      <div>Golobe</div>
      <div className="flex gap-4">
        <p>Login</p>
        <p>Sign Up</p>
      </div>
    </div>
  );
};

export default Navbar;
