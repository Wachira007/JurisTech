import React from "react";
import "./landing.css";

const Landing = () => {
  return (
    <div className="landing">
      <div style={{ position: "absolute", left: 0, bottom: 0 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            padding:"60px",
            color:"#fff"
          }}
        >
          <h1 style={{ fontSize: "42px", textAlign: "left", lineHeight:"60px" }}>
            Bridging Technology and <br />Law for a Connected Future
          </h1>
          <h4 style={{lineHeight:"32px", fontWeight:"300"}}>
            JurisTech is a leading consultancy firm specializing in the
            intersection of technology<br /> and the law. With a team of highly
            skilled professionals, we offer comprehensive<br /> services to
            businesses, organizations, and individuals seeking expert guidance<br /> 
            in navigating the legal complexities of the rapidly evolving
            technological landscape.
          </h4>
          <div style={{ display: "flex", gap:"10px" }}>
            <button style={{width: "130px",
                backgroundColor: "#FF5E5B",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                padding: "14px",}}>What We Do</button>
            <button style={{width: "130px",
                backgroundColor:"transparent",
                border: "1px solid #ffffff",
                color:"#fff",
                borderRadius: "6px",
                padding: "14px",}}>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
