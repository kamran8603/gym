import React from "react";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="site-navbar">
      <a href="/" className="site-image">
        <img
          className="navbar_image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX1hXG5UTnFKNCymimoOqDZ_-I90I3dUjQpA&usqp=CAU"
          alt=""
        />
      </a>

      <ul>
        <li>
          <a className="home" href="/home">HOME</a>
        </li>

        <li>
          <a href="/About">ABOUT</a>
        </li>

        <li>

          
          <a href="/programmes">

          <div class="dropdown">
  <button class="dropbtn">PROGRAMMES <span>&#9660;</span></button>
  <div class="dropdown-content">
    <a href="/">1-2-1 PERSONAL TRAINING</a>
    <a href="/">SMALL GROUP PERSONAL TRAINING</a>
    <a href="/">NUTRITION COACHING</a>
    <a href="/">ONLINE TRAINING</a>
  </div>
</div>


          


          
          
          
          </a>
        </li>

        <li>
          <a href="/success_stories">SUCCESS STORIES</a>
        </li>

        <li>
          <a href="/contact">CONTACT</a>
        </li>
        <li>
          <a href="/blog">BLOG</a>
        </li>

        <li>
          <a href="/login">LOGIN</a>
        </li>
        <li>

        <a href="/search"><FaSearch /></a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
