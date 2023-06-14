import React from "react";
import "./head.css";
import "./headers.js";

const HeaderMenu = () => {
  return (
    <header>
      <div>
        <h1>Title(fixed header)</h1>
        <div id="container">
          <button id="Nav-Button" >
            <div class="menu-toggle"></div>
            <div class="menu-toggle"></div>
            <div class="menu-toggle"></div>
          </button>
        </div>
      </div>
    </header>
  );
};
export default HeaderMenu;
