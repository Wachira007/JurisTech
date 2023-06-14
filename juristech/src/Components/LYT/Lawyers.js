import React from "react";
import image from "../../assets/newimg.jpg";

const Lawyers = () => {
  return (
    <div style={{ padding:"12px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems:"center" }}>
        <div style={{ width: "40%",textAlign:"left" }}>
          <h1 style={{fontWeight:"700",fontSize:"40px"}}>Lawyers you <br /> can trust</h1>
        </div>
        <div style={{ width: "50%", textAlign:"left", fontSize:"14px" }}>
          <p style={{fontSize:"14px"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <p style={{fontSize:"14px"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "50%",
          // width:"80%"
        }}
      >
        <img
          src={image}
          alt="this is an "
          style={{
            // width: "100%",
            // height: "100%",
            // objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default Lawyers;
