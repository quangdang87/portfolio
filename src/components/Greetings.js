import React from "react";
import {Card} from "react-bootstrap";
const Greetings = ({element}) => {
  return (
    <div ref={element} className='box'>
      <Card style={{background: "transparent"}}>
        <Card.Body>
          <h1 className='greeting'>
            Hi! My name is Quang Dang. I've just graduated from University Of
            California - Santa Cruz. I like technologies and photography. I'm
            looking for a position where I can have the opportunity to use my
            abilities in Software development to work for a mission that I am
            passionate about.
          </h1>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Greetings;
