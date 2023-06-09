import React from "react";
import image from "../../assets/newimg.jpg";

const Lawyers = () => {
  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ width: "100%", height: "15vh" }}>
            <h1 style={{ fontWeight: "700", fontSize: "40px" }}>
              Hear From Our Clients
            </h1>
          </div>
          <div
            style={{
              width: "50%",
              textAlign: "left",
              fontSize: "14px",
              height: "15.1vh",
            }}
          >
            {/* <p style={{ fontSize: "14px" }}>
            Hear from our clients how we helped them achieve their goals with 
            <br/>our innovative solutions and expert guidance. Whether it's increasing sales, improving efficiency, or enhancing customer satisfaction, we have the right tools and strategies for any business challenge.
             
            </p> */}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "75vh",
            width: "90%",
          }}
        >
          <img
            src={image}
            alt="this is an "
            style={{
              width: "100%",
              height: "100%",
              objectFit: "object-fit",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Lawyers;
