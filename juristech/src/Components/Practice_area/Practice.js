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
        <div style={{ display: "flex", marginBottom: "30px", width:"70%", height:"450px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "pink",
              padding: "25px",
              marginRight: "30px",
              height: "350px",
              textAlign: "left",
            }}
          >
            <h3>Information Technology Law</h3>
            <p>
            Our Juristech IT Law experts provide comprehensive legal advice tailored to our clients' specific needs. We assist in drafting and reviewing IT agreements, creating data protection policies, conducting compliance assessments, and advising on global regulations such as GDPR and CCPA. With our in-depth knowledge of the legal intricacies surrounding technology, we empower our clients to make informed decisions and minimize potential risks.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "black",
              color: "#fff",
              padding: "25px",
              height: "350px",
              textAlign: "left",
            }}
          >
            <h3>Civil Law</h3>
            <p>
            Our Civil Law practice covers a broad spectrum of areas, including contract disputes, tort claims, property disputes, employment law matters, personal injury cases, and more. Whether you are seeking compensation, defending your rights, or seeking resolution through negotiation or litigation, our experienced civil law attorneys will work diligently to protect your interests and achieve the best possible outcome for your case
            </p>
          </div>
        </div>
        <div style={{ display: "flex",  width:"70%", height:"200px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "grey",
              padding: "25px",
              height: "350px",
              marginRight: "30px",
              textAlign: "left",
            }}
          >
            
            <h3>Corporate Law</h3>
            <p>
            Our Corporate Law practice covers a wide range of areas, including entity formation, contract drafting and negotiation, mergers and acquisitions, corporate restructuring, shareholder agreements, corporate governance, and regulatory compliance. We assist clients in structuring their businesses, ensuring compliance with applicable laws and regulations, and mitigating risks associated with corporate transactions. With Juristech's practical and strategic legal advice that aligns with your business objectives, you can navigate the corporate landscape with confidence.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#fffdd0",
              padding: "25px",
              height: "350px",
              textAlign: "left",
            }}
          >
            <h3>Divorce Law</h3>
            <p>
            Our Civil Law practice covers a broad spectrum of 
            areas, including contract disputes, tort claims, 
            property disputes, employment law matters, personal
            injury cases, and divorce law. With a specialization
            in Divorce Law, Juristech offers expertise in helping
            clients navigate the complexities of divorce proceedings,
            division of assets, child custody, alimony, and related
            matters. Whether you are seeking compensation, defending 
            your rights, or seeking resolution through negotiation or 
            litigation, our experienced civil law attorneys will work 
            diligently to protect your interests and achieve the best possible outcome for your case.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;
