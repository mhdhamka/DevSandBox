import React from "react";
import Card from "react-bootstrap/Card";
import { FaCode } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I am <span className="highlight">Mohd Hamka</span>, a passionate{" "}
            <span className="highlight">Software Developer</span> from{" "}
            <span className="highlight">Kuching, Sarawak</span>.
            <br />
            <br />
            I specialize in building{" "}
            <span className="highlight">
            full-stack web applications, backend systems, & scalable solutions 
            </span>
             using modern technologies. I enjoy transforming ideas into{" "}
            <span className="highlight">
            reliable, efficient, and user-focused software
            </span>
            .
            <br />
            <br />
            My technical interests include{" "}
            <span className="highlight">
            software engineering, web development, cybersecurity, and system
            design
            </span>
            . I am continuously learning and exploring new technologies to improve
            my skills and build impactful digital solutions.
           <br />
           <br />
           Outside of coding, I enjoy activities that help me stay creative and
           inspired:
          </p>

          <ul>
            <li className="about-activity">
              <FaCode /> Developing full-stack applications and solving real-world problems 
            </li>
            <li className="about-activity">
              <FaCode /> Exploring software engineering practices, system design, and new technologies
            </li>
            <li className="about-activity">
              <FaCode /> Strengthening my knowledge in cybersecurity, cloud, and emerging technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building technology that solves problems and creates meaningful impact."
          </p>

          <footer className="blockquote-footer">
            mdhamka
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
