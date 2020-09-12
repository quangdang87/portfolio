import React from "react";
import emailjs from "emailjs-com";
import {Modal, Button, Form} from "react-bootstrap";
const ContactUs = ({show, setShow}) => {
  const handleClose = () => {
    setShow(!show);
  };

  const sendEmail = e => {
    e.preventDefault();
    emailjs
      .sendForm(
        "quangdang_porfolio",
        "porfolio_0911",
        e.target,
        "user_WArhMyTPc7o6nDvsiUkgi"
      )
      .then(
        res => {
          console.log(res.text);
        },
        error => {
          console.log(error.text);
        }
      );
    e.target.reset();
    handleClose();
  };
  return (
    <>
      <Modal className='text7' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title
            style={{
              fontSize: "35px",
              fontWeight: "900",
              color: "#373063"
            }}
          >
            CONTACT ME!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={sendEmail}>
            <Form.Group>
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter your name'
                name='name'
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Your Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter your email'
                name='email'
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Your Phone Number</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter your phone number'
                name='phone_number'
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control
                as='textarea'
                row='10'
                placeholder='Message'
                name='message'
              />
            </Form.Group>
            <input
              type='submit'
              className='btn btn-primary btn-block'
              value='Send'
            />
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ContactUs;
