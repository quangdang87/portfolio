import React, {useState} from "react";
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
import ContactUs from "./components/pages/ContactUs";

function App() {
  const {isSticky, element} = useSticky();
  const [show, setShow] = useState(false);

  return (
    <div
      id='home'
      style={{
        backgroundImage: "linear-gradient(#102B35, #0E3B4C )"
      }}
    >
      <NavBar isSticky={isSticky} />
      <SideBar show={show} setShow={setShow} />
      {show && <ContactUs show={show} setShow={setShow} />}
      <Container>
        <Row>
          <Greetings element={element} />
        </Row>
        {/*for big screen*/}
        <Row className='is_mobile mb-3'>
          <Col style={{paddingLeft: "0px"}}>
            <Education />
          </Col>
          <Col style={{paddingRight: "0px"}}>
            <TechnicalSkills />
          </Col>
        </Row>

        {/*for media screen*/}
        <Row className='mobile'>
          <Education />
          <TechnicalSkills />
        </Row>
        {/*for media screen END*/}
        <Row className='mb-3'>
          <WorkExperiences />
        </Row>
        <Row style={{marginBottom: "30px"}}>
          <Projects />
        </Row>
        <Row className='mb-3'>
          <Contact />
        </Row>
      </Container>
    </div>
  );
}

export default App;
