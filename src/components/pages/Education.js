import React, {Fragment} from "react";
import {Card, Row, Col} from "react-bootstrap";

const Education = () => {
  const educations = [
    {
      id: 1,
      facility: "University of California",
      major: "B.S. Computer Science",
      graduated: "June 2020",
      gpa: 3.52
    },
    {
      id: 2,
      facility: "Chabot College",
      major: "A.S. Computer Science",
      graduated: "May 2018",
      gpa: 3.83
    },
    {
      id: 3,
      facility: "Chabot College",
      major: "A.S. Mathematics",
      graduated: "May 2018",
      gpa: 3.83
    }
  ];
  return (
    <Fragment>
      <div className='box box_edu mb-3'>
        <Card style={{background: "transparent", height: "100%"}}>
          <Card.Header>
            <Card.Title style={{textAlign: "center", paddingTop: "10px"}}>
              <h3 style={{color: "#fc4e03"}}>EDUCATION</h3>
            </Card.Title>
          </Card.Header>
          <Card.Body>
            {educations.map((edu, id) => (
              <Row key={id} className='h-33'>
                <Col xs='9'>
                  <Card.Title>{edu.facility}</Card.Title>
                  <Card.Text>{edu.major}</Card.Text>
                  <Card.Text>GPA: {edu.gpa}</Card.Text>
                </Col>
                <Col xs='3'>{edu.graduated}</Col>
              </Row>
            ))}
          </Card.Body>
        </Card>
      </div>
    </Fragment>
  );
};

export default Education;
