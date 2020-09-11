import React, {Fragment} from "react";
import {Card, Row, Col} from "react-bootstrap";

const Education = () => {
  return (
    <Fragment>
      <div className='box' style={{height: "520px"}}>
        <Card style={{background: "transparent", height: "100%"}}>
          <Card.Header>
            <Card.Title style={{textAlign: "center", paddingTop: "10px"}}>
              <h3 style={{color: "#fc4e03"}}>EDUCATION</h3>
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Row className='h-33'>
              <Col xs='9'>
                <Card.Title>University of California</Card.Title>
                <Card.Text>B.S. Computer Science</Card.Text>
              </Col>
              <Col>Jun 2020</Col>
            </Row>
            <Row className='h-33' style={{marginTop: "20px"}}>
              <Col xs='9'>
                <Card.Title>Chabot College</Card.Title>
                <Card.Text>A.S. Computer Science</Card.Text>
              </Col>
              <Col>May 2018</Col>
            </Row>
            <Row className='h-33' style={{marginTop: "20px"}}>
              <Col xs='9'>
                <Card.Title style={{fontWeight: "700"}}>
                  Chabot College
                </Card.Title>
                <Card.Text>A.S. Mathematics</Card.Text>
              </Col>
              <Col>May 2018</Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </Fragment>
  );
};

export default Education;
