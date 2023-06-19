import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "50px",
        }}
      >
        <div style={{ width: "50%" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.808912045821!2d35.93788857474857!3d-0.12442758510787061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1829f789573181a7%3A0xb9b8433f60bbc0c!2sKampi%20Ya%20Moto!5e0!3m2!1sen!2ske!4v1687178686096!5m2!1sen!2ske"
            width="796"
            height="900"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
        <div style={{ width: "35%" }}>
          <div>
            <h2 style={{ textAlign: "center", fontSize:"40px" }}>Contact Us</h2>
            <h5 style={{ fontSize: "12px", textAlign: "center" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </h5>
          </div>
          <form style={{ width: "100%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "20px 0 10px 0",
                  width: "50%",
                }}
              >
                <label style={{ margin: "10px 0" }}>First Name:</label>
                <input
                  type="text"
                  style={{ marginLeft: "10px", margin: 0, padding: "10px" }}
                  required
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "20px 0 10px 0",
                  width: "50%",
                }}
              >
                <label style={{ margin: "10px 0" }}>Last Name:</label>
                <input
                  type="text"
                  style={{ marginLeft: "10px", margin: 0, padding: "10px" }}
                  required
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "15px 0 10px 0",
                  width: "50%",
                }}
              >
                <label style={{ margin: "10px 0" }}>Email:</label>
                <input
                  type="email"
                  id="email"
                  style={{ marginLeft: "12px", margin: 0, padding: "10px" }}
                  required
                />
              </div>
              <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "15px 0 10px 0",
                    width: "50%",
                }}
              >
                <label style={{ margin: "10px 0" }}>Phone Number:</label>
                <input
                  type="text"
                  style={{  margin: 0, padding: "10px" }}
                  required
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "15px 0 10px 0",
              }}
            >
              <label style={{ margin: "10px 0" }}>Message:</label>
              <textarea
                rows="8"
                cols="30"
                style={{ marginLeft: "2px", margin: 0 }}
                required
              ></textarea>
            </div>
          </form>
          <div>
            <div>
              <input type="checkbox" />
              <label htmlFor="accept" style={{}}>
                I accept the terms
              </label>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "20px",
            }}
          >
            <button
              style={{
                width: "100px",
                backgroundColor: "#FF5E5B",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "10px",
              }}
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
