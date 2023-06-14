import React from "react";
import image from "../../assets/Image.png";

const Lawyers = () => {
  return (
    <div style={{ padding:"2%" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "40%",textAlign:"left" }}>
          <h1 style={{fontWeight:"700",fontSize:"40px"}}>Lawyers you <br /> can trust</h1>
        </div>
        <div style={{ width: "50%", textAlign:"left" }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <p>
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
          textAlign:"center",
          height: "70vh",
          backgroundColor:"green"
        }}
      >
        <img
          src={image}
          alt="this is an "
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default Lawyers;
