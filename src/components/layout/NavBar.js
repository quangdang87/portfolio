import React, {useState} from "react";
import {Link} from "react-scroll";

const NavBar = ({isSticky}) => {
  const [show, setShow] = useState(false);
  const showSanwich = () => {
    console.log(show);
    setShow(!show);
  };
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

      <ul
        style={{paddingRight: "50px", marginBottom: "0px"}}
        className='is_mobile'
      >
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
          to='projects'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className='cursor'
        >
          Projects
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
      </ul>
      <ul className='mobile'>
        <button className='btn1' onClick={showSanwich}>
          <i className='fa fa-bars' style={{color: "white"}}></i>
        </button>
      </ul>
      {show && (
        <div className='sanwich' onClick={showSanwich}>
          <Link
            activeClass='active'
            to='home'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className='cursor'
            onClick={showSanwich}
          >
            Home
          </Link>

          <Link
            activeClass='active'
            to='projects'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className='cursor'
            onClick={showSanwich}
          >
            Projects
          </Link>
          <Link
            activeClass='active'
            to='contact'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className='cursor'
            onClick={showSanwich}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
