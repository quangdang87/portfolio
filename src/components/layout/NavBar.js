import React from "react";
import {Link} from "react-scroll";
import photoID from "../../static/images/quang1.png";

const NavBar = ({isSticky}) => {
  return (
    <div className={isSticky ? "navbar_sticky" : "navbar"}>
      <div
        style={{
          paddingLeft: "20px",
          display: "flex",
          textAlign: "center"
        }}
      >
        <img src={photoID} />
        <h3 style={{color: "white"}}>QUANG DANG</h3>
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
