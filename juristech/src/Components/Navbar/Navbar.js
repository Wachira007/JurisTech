import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <div>
            <h1>JurisTech</h1>
          </div>
          <div style={{ display: "flex" }}>
            <Link href="/" variant="body2" style={{ textDecoration: "none" }}>
              Home
            </Link>
            <Link href="/" variant="body2" style={{ textDecoration: "none" }}>
              About Us
            </Link>
            <Link href="/" variant="body2" style={{ textDecoration: "none" }}>
              Reviews
            </Link>
            <Link href="/" variant="body2" style={{ textDecoration: "none" }}>
              Practice Areas
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
