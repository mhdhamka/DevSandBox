import React from "react";
import { Col, Row } from "react-bootstrap";

import HTML from "../../Assets/TechIcons/html5.svg";
import CSS from "../../Assets/TechIcons/css3.svg";
import JavaScript from "../../Assets/TechIcons/javascript.svg";
import TypeScript from "../../Assets/TechIcons/typescript.svg";
import Bootstrap from "../../Assets/TechIcons/bootstrap.svg";
import Tailwind from "../../Assets/TechIcons/tailwind.svg";
import ReactIcon from "../../Assets/TechIcons/react.svg";
import Next from "../../Assets/TechIcons/next.svg";
import Angular from "../../Assets/TechIcons/angular.svg";
import Flutter from "../../Assets/TechIcons/flutter.svg";
import Vue from "../../Assets/TechIcons/vue.svg";
import Node from "../../Assets/TechIcons/node.svg";
import Express from "../../Assets/TechIcons/express.svg";
import PHP from "../../Assets/TechIcons/php.svg";
import Laravel from "../../Assets/TechIcons/laravel.svg";
import Python from "../../Assets/TechIcons/python.svg";
import Pandas from "../../Assets/TechIcons/pandas.svg";
import Jupyter from "../../Assets/TechIcons/jupyter.svg";
import TensorFlow from "../../Assets/TechIcons/tensorflow.svg";
import C from "../../Assets/TechIcons/c.svg";
import Cplus from "../../Assets/TechIcons/c++.svg";
import MySQL from "../../Assets/TechIcons/mysql.svg";
import SQLite from "../../Assets/TechIcons/sqlite.svg";
import PostgreSQL from "../../Assets/TechIcons/postgresql.svg";
import Mongo from "../../Assets/TechIcons/mongodb.svg";

function Techstack() {

const technologies = [
  // Frontend
  {
    name: "HTML5",
    icon: HTML,
  },
  {
    name: "CSS3",
    icon: CSS,
  },
  {
    name: "JavaScript",
    icon: JavaScript,
  },
  {
    name: "TypeScript",
    icon: TypeScript,
  },
  {
    name: "Bootstrap",
    icon: Bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: Tailwind,
  },
  {
    name: "React",
    icon: ReactIcon,
  },
  {
    name: "Next.js",
    icon: Next,
  },
   {
    name: "Angular",
    icon: Angular,
  },
   {
    name: "Flutter",
    icon: Flutter,
  },
   {
    name: "Vue.js",
    icon: Vue,
  },

  // Backend
  {
    name: "Node.js",
    icon: Node,
  },
  {
    name: "Express.js",
    icon: Express,
  },
  {
    name: "PHP",
    icon: PHP,
  },
  {
    name: "Laravel",
    icon: Laravel,
  },

  // Programming Languages
  {
    name: "Python",
    icon: Python,
  },
  {
    name: "Pandas",
    icon: Pandas,
  },
  {
    name: "Jupyter",
    icon: Jupyter,
  },
  {
    name: "TensorFlow",
    icon: TensorFlow,
  },
   {
    name: "C",
    icon: C,
  },
  {
    name: "C++",
    icon: Cplus,
  },

  // Databases
  {
    name: "MySQL",
    icon: MySQL,
  },
  {
    name: "SQLite",
    icon: SQLite,
  },
  {
    name: "PostgreSQL",
    icon: PostgreSQL,
  },
  {
    name: "MongoDB",
    icon: Mongo,
  },

];


return (

<Row style={{ justifyContent:"center", paddingBottom:"50px" }} >
  {
    technologies.map((tech,index)=>(

    <Col xs={4} md={2} className="tech-icons" key={index}>
      <img src={tech.icon} alt={tech.name}/>

      <div className="tech-icons-text">
        {tech.name}
      </div>
    </Col>

    ))
  }
</Row>

);

}


export default Techstack;