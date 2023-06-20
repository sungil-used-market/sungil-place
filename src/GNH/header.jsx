import React from "react";
import "./head.css";
import "./headers.js";

const HeaderMenu = () => {
  return (
    <body>
      <header>
        <div class="opacity"></div>
        <div>
          <h1>Title(fixed header)</h1>
          <div class="menu-bar">
            <ul>
              <li id="test">
                <a href="" >LOGIN</a>
              </li>
              <li>
                <a href="">LOGOUT</a>
              </li>
              <li>
                <a href="">POST-PAGE</a>
              </li>
              <li>
                <a href="">REGISTER</a>
              </li>
              <li>
                <a href="">MESSEGE</a>
              </li>
            </ul>
          </div>
          <div id="container">
            {/* <button id="Nav-Button">
              <div class="menu-toggle"></div>
              <div class="menu-toggle"></div>
              <div class="menu-toggle"></div>
            </button> */}

            <div class="toggle">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
    </body>
  );
};
export default HeaderMenu;

// const toggle = document.querySelector(".toggle");
// toggle.addEventListener("click", function () {
//   this.classList.toggle("active");
// });
// window.onload = function () {
//   const toggle = document.querySelector(".toggle");
//   toggle.addEventListener("click", function () {
//     this.classList.toggle("active");
//   });
// };
