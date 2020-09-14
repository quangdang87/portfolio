import React, {Fragment} from "react";

import {OverlayTrigger, Tooltip} from "react-bootstrap";
const SideBar = ({show, setShow}) => {
  const sendEmail = () => {
    setShow(!show);
  };
  return (
    <Fragment>
      <div className='sideBar text5 is_mobile'>
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
      <div className='sideBar1 text5 mobile'>
        <a
          href='https://www.linkedin.com/in/quangdang87/'
          target='_blank'
          className='icon_block'
        >
          <i className='fab fa-linkedin-in'></i>
        </a>
        <a
          href='https://github.com/quangdang87'
          target='_blank'
          className='icon_block'
        >
          <i className='fab fa-github'></i>
        </a>
        <a onClick={sendEmail} className='icon_block'>
          <i className='far fa-envelope'></i>
        </a>
      </div>
    </Fragment>
  );
};

export default SideBar;
