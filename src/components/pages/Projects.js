import React from "react";
import {Card, Col, Row, Carousel} from "react-bootstrap";
import ptyd_home from "../../static/images/PTYD-home.png";
import ptyd_giftcard from "../../static/images/PTYD-giftcard.png";
import ptyd_mealschedule from "../../static/images/PTYD-Mealschedule.png";
import ptyd_menu from "../../static/images/PTYD-menu.png";
import ptyd_mealplan from "../../static/images/PTYD-mealPlan.png";
import ptyd_findus from "../../static/images/PTYD-findus.png";
import ptyd_menuthisweek from "../../static/images/PTYD-menuthisweek.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Prep-To-Your-Door",
      achieved: [
        "Worked directly with the designer to build features for the client/front-end by using Reactjs.",
        "Implemented the Sign-Up and Login functionality which allow the client access to protected endpoints on the REST APIs server.",
        "Implemented the payment process for the checkout page by using Stripe on Python and Reactjs.",
        "Implemented Google Analytics and Facebook Pixel to track the website traffic and user behaviors.",
        "Maintained the customer’s data by using Amazon AWS S3 Bucket."
      ],
      img: [
        ptyd_findus,
        ptyd_giftcard,
        ptyd_home,
        ptyd_mealplan,
        ptyd_mealschedule,
        ptyd_menu,
        ptyd_menuthisweek
      ],
      url: "https//preptoyourdoor.netlify.app"
    },
    {
      id: 2,
      name: "Contact Keeper",
      achieved: [
        "Applied Node.js, Express JS to develop a REST APIs server.",
        "Applied CSS and Reactjs to develop features for the front-end.",
        "Managed and maintain user’s information through the database by using MongoDB."
      ],
      img: [],
      url: "#"
    },
    {
      id: 3,
      name: "Swag Company",
      achieved: [
        "Worked closely with the designer to build the website’s features by applying HTML, CSS, JavaScript.",
        "Applied JQuery to develop animative and responsive web pages."
      ],
      img: [],
      url: "#"
    }
  ];
  return (
    <Card
      id='projects'
      className='box'
      style={{background: "transparent", height: "100%", width: "100%"}}
    >
      <Card.Header>
        <Card.Title style={{textAlign: "center", paddingTop: "10px"}}>
          <h3 style={{color: "#fc4e03"}}>PROJECTS</h3>
        </Card.Title>
      </Card.Header>
      <Card.Body>
        {projects.map((project, id) => (
          <Row key={id} className='project_box'>
            <Col xs='3'>
              <a href={project.url} className='text1'>
                {project.name}
              </a>
            </Col>
            <Col>
              <ul key={id} class>
                {project.achieved.map((val, id) => (
                  <li>{val}</li>
                ))}
              </ul>
            </Col>
          </Row>
        ))}
      </Card.Body>
    </Card>
  );
};

export default Projects;
