import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{position:"relative"}}>
      <nav>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <div>
            <p style={{ fontSize: "30px" }}>JURISTECH</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              color: "#000",
            }}
          >
            <Link
              href="/"
              variant="body2"
              style={{
                textDecoration: "none",
                marginRight: "30px",
                fontSize: "20px",
                color: "#000",
              }}
            >
              Home
            </Link>
            <Link
              href="/about"
              variant="body2"
              style={{
                textDecoration: "none",
                paddingRight: "30px",
                fontSize: "20px",
                color: "#000",
              }}
            >
              About_Us
            </Link>
            <Link
              href="/reviews"
              variant="body2"
              style={{
                textDecoration: "none",
                marginRight: "30px",
                fontSize: "20px",
                color: "#000",
              }}
            >
              Reviews
            </Link>
            <Link
              href="/practice"
              variant="body2"
              style={{
                textDecoration: "none",
                marginRight: "35px",
                fontSize: "20px",
                color: "#000",
              }}
            >
              Practice_Areas
            </Link>
            <Link
              style={{
                backgroundColor: "#FF5E5B",
                color: "#fff",
                textDecoration: "none",
                border: "none",
                borderRadius: "6px",
                padding: "8px 25px",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
