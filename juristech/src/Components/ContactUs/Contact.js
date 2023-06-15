import React from "react";

const Contact = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "20%", marginRight: "20px", textAlign: "left" }}>
          <h1 style={{ textAlign: "left" }}>Contact Us</h1>
          <p>hello@juristech.com</p>
          <p>+254712345678</p>
          <p>Kabarak, Nakuru</p>
        </div>
        <div style={{ width: "50%" }}>
          <form style={{ textAlign: "left", width: "50%" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "20px 0 10px 0",
              }}
            >
              <label style={{ margin: "10px 0" }}>Name:</label>
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
                margin: "15px 0 10px 0",
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            <div>
              <input type="checkbox" />
              <label htmlFor="accept" style={{}}>
                I accept the terms
              </label>
            </div>
            <br />
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

export default Contact;
