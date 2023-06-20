import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image from "../../assets/profile.jpg";

const responsive = {
  0: { items: 1 },
  796: { items: 2 },
};

const items = [
  <div style={{ padding: "20px" }}>
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <p style={{ textAlign: "center", fontSize:"20px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
        Suspendisse varius enim in eros elementum tristique. Duis <br />
        cursus, mi quis viverra ornare, eros dolor interdum nulla,
        <br /> ut commodo diam libero vitae erat.
      </p>
      <img
        src={image}
        alt="this is an "
        style={{
          width: "10%",
          height: "10%",
          borderRadius: "50%",
        }}
      />
      <p style={{ textAlign: "center", fontSize:"20px" }}>Jane Doe</p>
      <p style={{ textAlign: "center", fontSize:"20px", margin:"0" }}>Consultant</p>
    </div>
  </div>,
  <div style={{ padding: "20px" }}>
  <div
    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    <p style={{ textAlign: "center", fontSize:"20px" }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
      Suspendisse varius enim in eros elementum tristique. Duis <br />
      cursus, mi quis viverra ornare, eros dolor interdum nulla,
      <br /> ut commodo diam libero vitae erat.
    </p>
    <img
      src={image}
      alt="this is an "
      style={{
        width: "10%",
        height: "10%",
        borderRadius: "50%",
      }}
    />
    <p style={{ textAlign: "center", fontSize:"20px" }}>Jane Doe</p>
    <p style={{ textAlign: "center", fontSize:"20px", margin:"0" }}>Consultant</p>
  </div>
</div>,
<div style={{ padding: "20px" }}>
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <p style={{ textAlign: "center", fontSize:"20px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
        Suspendisse varius enim in eros elementum tristique. Duis <br />
        cursus, mi quis viverra ornare, eros dolor interdum nulla,
        <br /> ut commodo diam libero vitae erat.
      </p>
      <img
        src={image}
        alt="this is an "
        style={{
          width: "10%",
          height: "10%",
          borderRadius: "50%",
        }}
      />
      <p style={{ textAlign: "center", fontSize:"20px" }}>Jane Doe</p>
      <p style={{ textAlign: "center", fontSize:"20px", margin:"0" }}>Consultant</p>
    </div>
  </div>,
  <div style={{ padding: "20px" }}>
  <div
    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    <p style={{ textAlign: "center", fontSize:"20px" }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
      Suspendisse varius enim in eros elementum tristique. Duis <br />
      cursus, mi quis viverra ornare, eros dolor interdum nulla,
      <br /> ut commodo diam libero vitae erat.
    </p>
    <img
      src={image}
      alt="this is an "
      style={{
        width: "10%",
        height: "10%",
        borderRadius: "50%",
      }}
    />
    <p style={{ textAlign: "center", fontSize:"20px" }}>Jane Doe</p>
    <p style={{ textAlign: "center", margin:"0", fontSize:"20px" }}>Consultant</p>
  </div>
</div>
];

const Testimonials = () => {
  return (
    <div style={{backgroundColor:"#FF5E5B", padding:"50px", color:"#fff"}}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p style={{ textAlign: "center", fontSize:"25px", fontWeight:600 }}>Client Testimonials</p>
        <p style={{ textAlign: "center", fontSize:"22px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <AliceCarousel
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={3000}
        animationDuration={3000}
        animationType="fadeout"
        infinite
        touchTracking={false}
        // disableDotsControls
        disableButtonsControls
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </div>
  );
};

export default Testimonials;
