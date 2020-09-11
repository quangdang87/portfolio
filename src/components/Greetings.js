import React from "react";
import {Card} from "react-bootstrap";
const Greetings = ({element}) => {
  const greeting = {
    fontFamily: "'Dancing Script', sans serif",
    fontSize: "32px",
    fontStyle: "normal",
    fontVariant: "normal",
    fontWeight: "300",
    lineHeight: "48px",
    width: "90%",
    padding: "20px 10px 10px 30px"
  };
  return (
    <div ref={element} className='box'>
      <Card style={{background: "transparent"}}>
        <Card.Body>
          <h1 style={greeting}>
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
