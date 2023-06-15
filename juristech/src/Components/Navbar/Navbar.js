import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ position: "relative" }}>
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
            <a
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
            </a>
            <a
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
            </a>
            <a
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
            </a>
            <a
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
            </a>
            <a
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
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
