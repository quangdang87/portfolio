import React from "react";
import {Link} from "react-scroll";
import photoID from "../../static/images/quang1.png";

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
          style={{alignItems: "center"}}
        >
          <img src={photoID} />
          <h3 style={{color: "white"}} className='mt-3'>
            QUANG DANG{"  "}
          </h3>

          <i class='fab fa-linkedin fa-2x' style={{marginLeft: "20px"}}></i>
        </a>
      </div>

      <ul style={{paddingRight: "50px"}}>
        <Link
          activeClass='active'
          to='home'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
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
        >
          Projects
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
