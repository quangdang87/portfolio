import React from "react";

import {OverlayTrigger, Tooltip} from "react-bootstrap";
const SideBar = () => {
  return (
    <div className='sideBar text5'>
      <OverlayTrigger
        placement={"top"}
        overlay={
          <Tooltip>
            <strong>Linked In Profile</strong>
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
            <strong>GitHub</strong>
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
            <strong>Linked In Profile</strong>
          </Tooltip>
        }
      >
        <a href='#' target='_blank' className='icon_block'>
          <i className='far fa-envelope fa-2x'></i>
        </a>
      </OverlayTrigger>
    </div>
  );
};

export default SideBar;
