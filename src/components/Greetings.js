import React from "react";
import {Card, Row, Col} from "react-bootstrap";
import photoID from "../static/images/Quang2.jpg";

const Greetings = ({element}) => {
  return (
    <div ref={element} className='box'>
      <Card style={{background: "transparent"}}>
        <Card.Body id='no_padding'>
          <Row id='greeting_wrap'>
            <img src={photoID} id='greeting_img' />

            <h1 className='greeting greeting_font'>
              &emsp;Hi! My name is Quang Dang. I've just graduated from
              University Of California - Santa Cruz. I like technologies and
              photography. I'm looking for a position where I can have the
              opportunity to use my abilities in Software development to work
              for a mission that I am passionate about.
            </h1>
          </Row>
          <div style={{clear: "both"}}></div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Greetings;
