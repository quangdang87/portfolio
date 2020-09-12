import React, {Component} from "react";
import {
  Card,
  Col,
  Row,
  Carousel,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";

import ptyd_home from "../../static/images/PTYD-home.png";
import ptyd_giftcard from "../../static/images/PTYD-giftcard.png";
import ptyd_mealschedule from "../../static/images/PTYD-Mealschedule.png";
import ptyd_menu from "../../static/images/PTYD-menu.png";
import ptyd_mealplan from "../../static/images/PTYD-mealPlan.png";
import ptyd_findus from "../../static/images/PTYD-findus.png";
import ptyd_menuthisweek from "../../static/images/PTYD-menuthisweek.png";
import cs_shop from "../../static/images/CS-shop.png";
import cs_search from "../../static/images/CS-search.png";
import cs_index from "../../static/images/CS-index.png";
import cs_buypost from "../../static/images/CS-buypost.png";

class Projects extends Component {
  constructor(props) {
    super();
    this.state = {
      projects: [
        {
          id: 1,
          name: "Prep-To-Your-Door",
          description:
            "A full life-cycle web application that assists the business driving services to their customers.",
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
          url: "https//preptoyourdoor.netlify.app",
          github: "https://github.com/infinite-options/Prep-To-Your-Door"
        },
        {
          id: 2,
          name: "Contact Keeper",
          description:
            "A full-stack web application that helps the user manage their contacts.",
          achieved: [
            "Applied Node.js, Express JS to develop a REST APIs server.",
            "Applied CSS and Reactjs to develop features for the front-end.",
            "Managed and maintain user’s information through the database by using MongoDB."
          ],
          img: [],
          url: null,
          github: "https://github.com/quangdang87/contact-keeper"
        },
        {
          id: 3,
          name: "Swag Company",
          description:
            "A full-stack web application where users can exchange their old company swags.",
          achieved: [
            "Worked closely with the designer to build the website’s features by applying HTML, CSS, JavaScript.",
            "Applied JQuery to develop animative and responsive web pages."
          ],
          img: [cs_search, cs_shop, cs_index, cs_buypost],
          url: null,
          github: "https://github.com/infinite-options/swag-marketplace"
        }
      ]
    };
  }
  render() {
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
          {this.state.projects.map((project, id) => (
            <div key={id} className='project_box'>
              <div>
                <div className='project_box'>
                  {project.url ? (
                    <OverlayTrigger
                      placement={"top"}
                      overlay={
                        <Tooltip>
                          <strong>Go to website</strong>
                        </Tooltip>
                      }
                    >
                      <a href={project.url} className='text3' id='name_link'>
                        {project.name}
                      </a>
                    </OverlayTrigger>
                  ) : (
                    <OverlayTrigger
                      placement={"top"}
                      overlay={
                        <Tooltip>
                          <strong>
                            Sorry! This project has not been deploy yet.
                          </strong>
                        </Tooltip>
                      }
                    >
                      <h2 className='text3'>{project.name}</h2>
                    </OverlayTrigger>
                  )}

                  <OverlayTrigger
                    placement={"top"}
                    overlay={
                      <Tooltip>
                        <strong>View Code in GitHub</strong>
                      </Tooltip>
                    }
                  >
                    <a
                      href={project.github}
                      target='_blank'
                      className='text4'
                      style={{float: "right", padding: "0px"}}
                    >
                      <i className='fas fa-code'></i>
                    </a>
                  </OverlayTrigger>
                  <h2 className='text6'>{project.description}</h2>
                </div>
              </div>
              <Row key={id} className='example'>
                <Col>
                  <Card.Header className='text-center'>
                    <h2 className='text4'>THINGS I HAVE DONE</h2>
                  </Card.Header>
                  <Card.Body>
                    <ul>
                      {project.achieved.map((val, id) => (
                        <li key={id}>{val}</li>
                      ))}
                    </ul>
                  </Card.Body>
                </Col>
                {project.img.length !== 0 && (
                  <Col>
                    <Card.Header className='text-center'>
                      <h2 className='text4'>EXAMPLE</h2>
                    </Card.Header>
                    <Card.Body className='d-flex text-center'>
                      <Carousel
                        style={{
                          height: "100%",
                          margin: "auto",
                          display: "flex"
                        }}
                      >
                        {project.img.map((img, id) => (
                          <Carousel.Item key={id}>
                            <img src={img} className='img_carousel' />
                          </Carousel.Item>
                        ))}
                      </Carousel>
                    </Card.Body>
                  </Col>
                )}
              </Row>
            </div>
          ))}
        </Card.Body>
      </Card>
    );
  }
}
export default Projects;
