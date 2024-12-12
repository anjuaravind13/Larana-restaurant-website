import React from "react";
import "./Ourteam.css";
import Footer from "../Footer/Footer";

function Ourteam() {
  return (
    <div className="our-team">
      <video
        className="background-video"
        autoPlay
        muted
        playsInline
        loop
        src="https://fidalgo.qodeinteractive.com/wp-content/uploads/2024/03/video-sushi.mp4"
        style={{
          width: "100%",
          height: "433.35px",
          //   borderRadius: "10px",
          objectFit: "cover",
        }}
      />{" "}
      {/* <iframe
        width="100%"
        height="500px"
        src="https://www.youtube.com/embed/xPPLbEFbCAo?si=WBq58mfpnBtXiKUk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>{" "} */}
      <h1 className="section-title">M E E T . O U R . C H E F S</h1>
      <p
        className="team-description"
        style={{ color: "white", textAlign: "center" }}
      >
        At Larana, we believe that the heart of an unforgettable dining
        experience lies in the passion and expertise of our team. Our talented
        chefs and front-of-house professionals work harmoniously to craft dishes
        and moments that delight your senses. Meet the culinary artists and
        service experts who make it all happen
      </p>
      <div className="team-chef">
        <div className="our-team-chef">
          <img src="./chef1a.jpg" alt="" />
          <h2
            className="chef-name"
            style={{
              color: "goldenrod",
              fontSize: "24px",
              textAlign: "center",
            }}
          >
            Ndemi Otieno
          </h2>
          <p
            className="chef-role"
            style={{ color: "white", textAlign: "center" }}
          >
            Dumpling Chef
          </p>
        </div>
        <div className="our-team-chef">
          <img src="./chef2a.jpg" alt="" />
          <h2
            className="chef-name"
            style={{
              color: "goldenrod",
              fontSize: "24px",
              textAlign: "center",
            }}
          >
            Rufus Stewart
          </h2>
          <p
            className="chef-role"
            style={{ color: "white", textAlign: "center" }}
          >
            Front-of-House Chef
          </p>
        </div>
        <div className="our-team-chef">
          <img src="./chef3.jpg" alt="" />
          <h2
            className="chef-name"
            style={{
              color: "goldenrod",
              fontSize: "24px",
              textAlign: "center",
            }}
          >
            Bailey Dupont
          </h2>
          <p
            className="chef-role"
            style={{ color: "white", textAlign: "center" }}
          >
            Head Chef
          </p>
        </div>
        <div className="our-team-chef">
          <img src="./chef4.jpg" alt="" />
          <h2
            className="chef-name"
            style={{
              color: "goldenrod",
              fontSize: "24px",
              textAlign: "center",
            }}
          >
            Yael Amari
          </h2>
          <p
            className="chef-role"
            style={{ color: "white", textAlign: "center" }}
          >
            Dim Sum Chef
          </p>
        </div>
      </div>
      <div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Ourteam;
