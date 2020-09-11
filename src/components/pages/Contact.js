import React, {Fragment} from "react";
import {Card} from "react-bootstrap";
import emoji from "emoji-dictionary";
const Contact = () => {
  return (
    <Fragment>
      <Card
        id='contact'
        className='box'
        style={{
          background: "transparent",
          height: "100%",
          width: "100%",
          marginBottom: "50px"
        }}
      >
        <Card.Header>
          <Card.Title style={{textAlign: "center", paddingTop: "10px"}}>
            <h3 style={{color: "#fc4e03"}}>Contact</h3>
          </Card.Title>
        </Card.Header>

        <Card.Body className=' backgroundFlower'>
          <Card.Text className='greeting_font'>
            &#x1F606; Thank you for your time to go through all of this. If you
            like my page and want to help me, Please feel free to contact me
            thru my email at{" "}
            <span style={{fontSize: "52px"}}>vinhquangdang1@gmail.com</span> or
            my number is <span>1 (510)-584-6166</span>. I am looking forward to
            hear from you. Hope that we can have a chance to work together.
            Thank You and see you...{" "}
            <span role='img' aria-label='end'>
              {emoji.getUnicode("wink")}
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default Contact;
