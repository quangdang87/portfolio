import React from "react";
import "./App.css";

import NavBar from "./components/layout/NavBar";
import useSticky from "./components/UseSticky";
import TechnicalSkills from "./components/pages/TechnicalSkills";
import WorkExperiences from "./components/pages/WorkExperiences";
import Projects from "./components/pages/Projects";
import Education from "./components/pages/Education";
import Contact from "./components/pages/Contact";
import Greetings from "./components/Greetings";
import {Row, Col, Container} from "react-bootstrap";
import SideBar from "./components/SideBar";

function App() {
  const {isSticky, element} = useSticky();

  return (
    <div
      id='home'
      style={{
        backgroundImage: "linear-gradient(#102B35, #0E3B4C )"
      }}
    >
      <NavBar isSticky={isSticky} />
      <SideBar />
      <Container>
        <Row>
          <Greetings element={element} />
        </Row>
        <Row style={{marginTop: "20px"}}>
          <Col style={{paddingLeft: "0px"}}>
            <Education />
          </Col>
          <Col style={{paddingRight: "0px"}}>
            <TechnicalSkills />
          </Col>
        </Row>
        <Row style={{marginTop: "20px"}}>
          <WorkExperiences />
        </Row>
        <Row style={{marginTop: "20px"}}>
          <Projects />
        </Row>
        <Row style={{marginTop: "20px"}}>
          <Contact />
        </Row>
      </Container>
    </div>
  );
}

export default App;
