import React from "react";

import {OverlayTrigger, Tooltip} from "react-bootstrap";
const SideBar = ({show, setShow}) => {
  const sendEmail = () => {
    setShow(!show);
  };
  return (
    <div className='sideBar text5'>
      <OverlayTrigger
        placement={"top"}
        overlay={
          <Tooltip>
            <strong> LinkedIn Profile </strong>
          </Tooltip>
        }
      >
        <a
          href='https://www.linkedin.com/in/quangdang87/'
          target='_blank'
          className='icon_block'
        >
          <i className='fab fa-linkedin-in fa-2x'></i>
        </a>
      </OverlayTrigger>

      <OverlayTrigger
        placement={"top"}
        overlay={
          <Tooltip>
            <strong> GitHub </strong>
          </Tooltip>
        }
      >
        <a
          href='https://github.com/quangdang87'
          target='_blank'
          className='icon_block'
        >
          <i className='fab fa-github fa-2x'></i>
        </a>
      </OverlayTrigger>

      <OverlayTrigger
        placement={"top"}
        overlay={
          <Tooltip>
            <strong>Email Me!</strong>
          </Tooltip>
        }
      >
        <a type='button' onClick={sendEmail} className='icon_block'>
          <i className='far fa-envelope fa-2x'></i>
        </a>
      </OverlayTrigger>
    </div>
  );
};

export default SideBar;
