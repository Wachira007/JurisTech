import React from "react";

const Practice = () => {
  return (
    <div style={{padding:"40px"}}>
      <div
        style={{
          display: "flex",
        justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div style={{  }}>
          <h1>Our Areas of Practice:</h1>
        </div>
        <div style={{ display: "flex", marginBottom: "30px", width:"70%", height:"200px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "pink",
              padding: "15px",
              marginRight: "30px",
              textAlign: "left",
            }}
          >
            <h3>Real Estate Law</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisses varius enim in eros elementum tristique.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "black",
              color: "#fff",
              padding: "15px",
              textAlign: "left",
            }}
          >
            <h3>Divorce Law</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisses varius enim in eros elementum tristique.
            </p>
          </div>
        </div>
        <div style={{ display: "flex",  width:"70%", height:"200px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "grey",
              padding: "15px",
              marginRight: "30px",
              textAlign: "left",
            }}
          >
            <h3>Injury Law</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisses varius enim in eros elementum tristique.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#fffdd0",
              padding: "15px",
              textAlign: "left",
            }}
          >
            <h3>Civil Law</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisses varius enim in eros elementum tristique.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;
