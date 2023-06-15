import React from "react";
import image from "../../assets/newimg.jpg";

const Lawyers = () => {
  return (
    <div style={{ padding: "30px" }}>
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
          <div style={{ width: "60%", height: "25vh" }}>
            <h1 style={{ fontWeight: "700", fontSize: "40px" }}>
              Lawyers you <br /> can trust
            </h1>
          </div>
          <div
            style={{
              width: "50%",
              textAlign: "left",
              fontSize: "14px",
              height: "25vh",
            }}
          >
            <h2
              style={{ fontSize: "14px", fontWeight: "400", textAlign: "left", paddingBottom:"20px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum
              tristique. Duis cursus, mi quis viverra ornare, eros dolor
              interdum nulla, ut commodo diam libero vitae erat.
            </h2>
            <h2 style={{ fontSize: "14px", fontWeight: "400", textAlign: "left"  }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </h2>
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
