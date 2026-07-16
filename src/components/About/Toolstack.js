import React from "react";
import { Col, Row } from "react-bootstrap";

import VSCode from "../../Assets/TechIcons/vscode.svg";
import Git from "../../Assets/TechIcons/git.svg";
import GitHub from "../../Assets/TechIcons/github.svg";
import Docker from "../../Assets/TechIcons/docker.svg";
import Postman from "../../Assets/TechIcons/postman.svg";

import Eclipse from "../../Assets/TechIcons/eclipse.svg";
import Figma from "../../Assets/TechIcons/figma.svg";
import Linux from "../../Assets/TechIcons/linux.svg";
import Splunk from "../../Assets/TechIcons/splunk.svg";

function Toolstack() {
  const tools = [
    {
      name: "VS Code",
      icon: VSCode,
    },
    {
      name: "Git",
      icon: Git,
    },
    {
      name: "GitHub",
      icon: GitHub,
    },
    {
      name: "Docker",
      icon: Docker,
    },
    {
      name: "Postman",
      icon: Postman,
    },
    {
      name: "Eclipse",
      icon: Eclipse,
    },
    {
      name: "Figma",
      icon: Figma,
    },
    {
      name: "Linux",
      icon: Linux,
    },
    {
      name: "Splunk",
      icon: Splunk,
    },
  ];

  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "50px",
      }}
    >
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <img src={tool.icon} alt={tool.name} />
          <div className="tech-icons-text">{tool.name}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
