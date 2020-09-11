import React from "react";
import {Link} from "react-scroll";

const NavBar = ({isSticky}) => {
  return (
    <div className={isSticky ? "navbar_sticky" : "navbar"}>
      <div
        style={{
          paddingLeft: "20px",
          display: "flex"
        }}
      >
        <a
          id='name_link'
          className='d-flex mt-0 a_hover'
          href='https://www.linkedin.com/in/quangdang87/'
          target='_blank'
          style={{alignItems: "center"}}
        >
          <i
            className='fab fa-linkedin fa-2x'
            style={{marginRight: "20px"}}
          ></i>
          <h3 style={{color: "white"}} className='mt-3'>
            QUANG DANG{"  "}
          </h3>
        </a>
      </div>

      <ul style={{paddingRight: "50px", marginBottom: "0px"}}>
        <Link
          activeClass='active'
          to='home'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className='cursor'
        >
          Home
        </Link>

        <Link
          activeClass='active'
          to='contact'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className='cursor'
        >
          Contact
        </Link>
        <Link
          activeClass='active'
          to='projects'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className='cursor'
        >
          Projects
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
