import React, { Component } from "react";
import logo from "../../images/logo.jpg";
import profile from "../../images/profile.png";
import "./Menu.css";
import { Link } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <header class="header">
        <div class="headerTop">
          <img src={logo} alt="image" />
          <div id="infoBox">
            <div class="profile">
              <img src={profile} alt="image"></img>
              <div class="welcome">
                <span class="name">서 진</span>
                <span class="welcomeText">님 환영합니다!</span>
              </div>
            </div>
            <Link to="/">
              <button class="logoutBtn">로그아웃</button>
            </Link>
          </div>
        </div>
        <div class="headerBottom"></div>
      </header>
    );
  }
}

export default Menu;
