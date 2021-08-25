import React from "react";
import "./nav.css";
import { GiBeard } from "react-icons/gi";
import { BsGrid } from "react-icons/bs";
import { BsCollection } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { BsBook } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="sidebar close">
      <div className="logo-details">
        <i>
          <GiBeard />
        </i>
        <span className="logo_name">Tom C</span>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/">
            <i>
              <BsGrid />
            </i>
            <span className="link_name">Dashboard</span>
          </a>
        </li>
        <li>
          <div className="icon-link">
            <a href="/">
              <i>
                <BsCollection />
              </i>
              <span className="link_name">Category</span>
            </a>
            <i>
              <BsChevronDown />
            </i>
          </div>
          <ul className="sub-menu">
            <li>
              <a className="link_name" href="/">
                Category
              </a>
              <a href="/">HTML & CSS</a>
              <a href="/">JavaScript</a>
              <a href="/">PHP & MySQL</a>
            </li>
          </ul>
        </li>
        <li>
          <div className="icon-link">
            <a href="/">
              <i>
                <BsBook />
              </i>
              <span className="link_name">Posts</span>
            </a>
            <i>
              <BsChevronDown />
            </i>
          </div>
          <ul className="sub-menu">
            <li>
              <a className="link_name" href="/">
                Posts
              </a>
              <a href="/">Web Design</a>
              <a href="/">Card Design</a>
              <a href="/">Login Forms</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
