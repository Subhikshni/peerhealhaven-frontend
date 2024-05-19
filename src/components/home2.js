import React from "react";
import "../css/home2.css";
import Navbar2 from "./NavBar2.js";

function Home2() {
  return (
    <div className="NavBar">
      <Navbar2 />
      <div className="home-container">
        <div className="content">
          <h2>Peer Heal Haven</h2>
          <p>Hey buddy, I wanna be your friend!</p>
        </div>
      </div>
      <div className="about-container">
        <div className="about-text">
          <h2>About Peer Heal Haven</h2>
          <p>
            {" "}
            "Peer Heal Haven is your sanctuary for mental wellness. Our platform
            fosters connection and understanding among peers on similar
            journeys. Through open conversations and supportive communities, we
            provide a safe space for sharing experiences and finding solace.
            Join us for guided discussions, support groups, and resources to
            empower your path to healing. You're not alone on this journey – at
            Peer Heal Haven, you'll find compassion, acceptance, and support
            every step of the way. Welcome to your haven of healing and hope.
            Together, we thrive."
          </p>
        </div>
        <div className="about-image"></div>
      </div>
      <footer className="footer">
        <div className="social-icons">
          <a
            className="Github_logo"
            href="https://github.com/Subhikshni"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            className="Linkedin_logo"
            href="https://www.linkedin.com/in/subhikshni-v-s-33b971227"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
        <div className="footer-text">
          <p>Peer Heal Haven by subhikshni</p>
        </div>
      </footer>
    </div>
  );
}

export default Home2;
