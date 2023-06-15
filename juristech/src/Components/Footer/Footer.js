import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{ padding: "70px 2px"}}>
        <div style={{display: "flex",
          justifyContent: "center",
          alignItems: "center",}}>

      <div
        style={{
          display:"flex",
          alignItems:"center",
          justifyContent:"space-between"
 }}
      >
        <div style={{paddingRight:"500px"}}>
          <h1>JURISTECH</h1>
        </div>
        <div
          style={{
            display: "flex",
            // justifyContent: "space-evenly",
            color: "#000",
            paddingRight:"500px"
          }}
        >
          <Link
            href="/"
            variant="body2"
            style={{
              textDecoration: "none",
              marginRight: "10px",
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
              paddingRight: "10px",
              fontSize: "20px",
              color: "#000",
            }}
          >
            About_Us
          </Link>
          <Link
            href="/contact"
            variant="body2"
            style={{
              textDecoration: "none",
              marginRight: "10px",
              fontSize: "20px",
              color: "#000",
            }}
          >
            Contact_Us
          </Link>
          <Link
            href="/practice"
            variant="body2"
            style={{
              textDecoration: "none",
              marginRight: "10px",
              fontSize: "20px",
              color: "#000",
            }}
          >
            Practice_Areas
          </Link>
        </div>
        <div>
          <h4 >Instagram</h4>
        </div>
      </div>
        </div>
        <hr />
        <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
            <p>2023</p>
            <p>All Rights Reserved</p>
            <p>Privacy Policy</p>
        </div>
    </div>
  );
};

export default Footer;
