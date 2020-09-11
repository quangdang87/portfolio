import React, {Fragment} from "react";
import {Card, Row, Col} from "react-bootstrap";

const TechnicalSkills = () => {
  const languages = [
    "Linux/Unix",
    "Windows",
    "C",
    "C++",
    "Python",
    "Javascipt",
    "HTML",
    "CSS",
    "MySQL",
    "PostgreSQL",
    "Perl"
  ];
  const tools = [
    "ReactJS",
    "NodeJS",
    "Django",
    "Vue.js",
    "Git",
    "Amazon AWS",
    "Stripe",
    "Bootstrap"
  ];
  return (
    <Fragment>
      <div className='box' style={{height: "520px"}}>
        <Card style={{background: "transparent", height: "100%"}}>
          <Card.Header>
            <Card.Title style={{textAlign: "center", paddingTop: "10px"}}>
              <h3 style={{color: "#fc4e03"}}>SKILLS</h3>
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col>
                <Card.Header>
                  <Card.Title
                    style={{
                      textAlign: "center",
                      color: "#b86783",
                      fontFamily: "Times New Roman"
                    }}
                  >
                    Programing Languages
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <ul style={{paddingLeft: "10px"}}>
                    {languages.map((val, i) => (
                      <li key={i}>{val}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Col>
              <Col>
                <Card.Header>
                  <Card.Title
                    style={{
                      textAlign: "center",
                      color: "#b86783",
                      fontFamily: "Times New Roman"
                    }}
                  >
                    Tools
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <ul>
                    {tools.map((val, i) => (
                      <li key={i}>{val}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </Fragment>
  );
};

export default TechnicalSkills;
