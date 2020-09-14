import React from "react";
import {Card, Row} from "react-bootstrap";
import photoID from "../static/images/Quang2.jpg";
import {bottom} from "@popperjs/core";

const Greetings = ({element}) => {
  return (
    <div ref={element} className='box mb-3'>
      <Card style={{background: "transparent"}}>
        <Card.Body className='no_padding'>
          <Row id='greeting_wrap'>
            <img src={photoID} id='greeting_img' alt='photo_id' />

            <h1 className='greeting greeting_font'>
              &emsp;Hi! My name is Quang Dang. I've just graduated from
              University of California - Santa Cruz. I like technologies and
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
