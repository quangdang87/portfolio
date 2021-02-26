import React, {Fragment, useState, useEffect} from "react";
import {Card, Col, Row} from "react-bootstrap";

const WorkExperiences = () => {
  const experienced = [
    {
      id: 1,
      company: "Infinite Options LLC",
      role: "Software Engineer Intern",
      duration: "Mar 2020 - Sep 2020",
      achieved: [
        "Applied HTML, CSS, and JavaScript to build a web client.",
        "Worked directly with designers to build features for web clients by using Reactjs",
        "Developed MySQL queries by using MySQLWorkBench and Amazon Relational Database Service (RDS) to support the REST APIs servers",
        "Applied Python to develop endpoints for a REST API server and using Zappa with Amazon AWS Lambda Function to maintain a serverless REST APIs application",
        "Collaborated with a talented team to identify and develop the unit test for the REST API servers by using Python’s unit test.",
      ],
    },
    {
      id: 2,
      company: "Chabot College",
      role: "Student Assistant",
      duration: "Apr 2018 - Aug 2018",
      achieved: [
        "Worked directly with a high performing group to drive clerical and administrative needs to handle student records, management needs, and correspondence.",
        "Utilized critical thinking and organizational skills to obtain and streamline files and student records.",
      ],
    },
  ];
  const [current, setCurrent] = useState(experienced[0]);

  const show = (index) => {
    setCurrent(experienced[index]);
  };
  return (
    <Fragment>
      <Card
        className="box is_mobile"
        style={{background: "transparent", height: "420px", width: "100%"}}
      >
        <Card.Header>
          <Card.Title style={{textAlign: "center", paddingTop: "10px"}}>
            <h3 style={{color: "#fc4e03"}}>EXPERIENCES</h3>
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col xs="3">
              {experienced.map((item, index) => (
                <button
                  className={
                    "btn1 " +
                    (current !== null && current.id === item.id
                      ? "o-100 btn_active"
                      : "o-50")
                  }
                  onClick={() => {
                    show(index);
                  }}
                  key={index}
                >
                  <p className="text1">{item.company}</p>
                  <ul
                    style={{listStyle: "none", maginTop: "0px"}}
                    className="list1"
                  >
                    <li
                      className="text2"
                      style={{fontWeight: "700", fontSize: "15px"}}
                    >
                      {" "}
                      {item.role}{" "}
                    </li>
                    <li className="text2" style={{fontSize: "13px"}}>
                      {item.duration}
                    </li>
                  </ul>
                </button>
              ))}
            </Col>
            {current !== null && (
              <Col xs="9">
                {current.achieved.map((val, id) => (
                  <ul className="list1" key={id}>
                    <li>{val}</li>
                  </ul>
                ))}
              </Col>
            )}
          </Row>
        </Card.Body>
      </Card>
      <Card className="box box_edu mobile">
        <Card.Header>
          <Card.Title style={{textAlign: "center", paddingTop: "10px"}}>
            <h3 style={{color: "#fc4e03"}}>EXPERIENCES</h3>
          </Card.Title>
        </Card.Header>
        <Card.Body>
          {experienced.map((val, id) => (
            <Row>
              <Card.Header style={{textAlign: "center"}}>
                <p className="text1">{val.company}</p>
                <ul
                  style={{listStyle: "none", maginTop: "0px"}}
                  className="list1"
                >
                  <li
                    className="text2"
                    style={{fontWeight: "700", fontSize: "15px"}}
                  >
                    {" "}
                    {val.role}{" "}
                  </li>
                  <li className="text2" style={{fontSize: "13px"}}>
                    {val.duration}
                  </li>
                </ul>
              </Card.Header>
              <Card.Body>
                {val.achieved.map((a, id) => (
                  <ul className="list1" key={id} style={{paddingLeft: "10px"}}>
                    <li>{a}</li>
                  </ul>
                ))}
              </Card.Body>
            </Row>
          ))}
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default WorkExperiences;
