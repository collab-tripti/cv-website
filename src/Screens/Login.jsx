import React, { Component } from "react";
import LoginComponent from "../component/loginComponent";
import logo from "../assets/logo.webp";

class Login extends Component {
  pushToHome = () => {
    this.props.history.push("/home");
  };

  render() {
    return (
      <>
        <div id="cvmakerdiv" class="">
          <div class="modal-content">
            <div class="md-head">
              <img src={logo} alt="test" style={{ width: "60px" }} />
              <h2 style={{ color: "black", "font-size": "25px" }}>
                The Best CV Maker Online.
              </h2>
            </div>
            <div class="md-body">
              <h2 class="h2blue">These awesome features are waiting for you</h2>

              <div class="title2 mdc3">
                <div class="innerdiv">
                  <p>
                    <span
                      class="submenu__icon"
                      style={{ display: "inline-block" }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        style={{
                          display: "block",
                          width: "2.2rem",
                          height: "auto",
                          fill: "none",
                          stroke: "currentColor",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": ".1rem",
                          transition:
                          "stroke .25s cubic-bezier(.45,.05,.55,.95) 0ms",
                        }}
                      >
                        <defs></defs>
                        <path
                          d="M5.25 2.249h-3a1.5 1.5 0 0 0-1.5 1.5v18a1.5 1.5 0 0 0 1.5 1.5h19.5a1.5 1.5 0 0 0 1.5-1.5v-18a1.5 1.5 0 0 0-1.5-1.5h-10.5"
                          class="a"
                        ></path>
                        <path
                          d="M11.25 11.249L8.25 9l-3 2.25V1.5A.75.75 0 0 1 6 .749h4.5a.75.75 0 0 1 .75.75zM5.25 18.749h10.5M5.25 14.249h13.5M18.75 9.749h-4.5"
                          class="a"
                        ></path>
                      </svg>
                    </span>
                  </p>
                  <span>
                    <b>Resume Examples</b>
                    <br />
                    See perfect resume samples that get jobs.
                  </span>
                </div>
                <div class="innerdiv">
                  <p>
                    <span
                      class="submenu__icon"
                      style={{ display: "inline-block" }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        style={{
                          display: "block",
                          width: "2.2rem",
                          height: "auto",
                          fill: "none",
                          stroke: "currentColor",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": ".1rem",
                          transition:
                            "stroke .25s cubic-bezier(.45,.05,.55,.95) 0ms",
                        }}
                      >
                        <defs></defs>
                        <path
                          d="M13.045 18.636l-3.712.53.53-3.712 9.546-9.546a2.25 2.25 0 0 1 3.182 3.182z"
                          class="a"
                        ></path>
                        <rect
                          width="7.5"
                          height="3"
                          x="5.25"
                          y=".749"
                          class="a"
                          rx=".75"
                          ry=".75"
                        ></rect>
                        <path
                          d="M12.75 2.249h3a1.5 1.5 0 0 1 1.5 1.5M17.25 18.749v3a1.5 1.5 0 0 1-1.5 1.5H2.25a1.5 1.5 0 0 1-1.5-1.5v-18a1.5 1.5 0 0 1 1.5-1.5h3M5.25 8.249h7.5M5.25 12.749h3"
                          class="a"
                        ></path>
                      </svg>
                    </span>
                  </p>
                  <span>
                    <b>Resume Format</b>
                    <br />
                    Pick the right resume format
                  </span>
                </div>
                <div class="innerdiv">
                  <p>
                    <span
                      class="submenu__icon"
                      style={{ display: "inline-block" }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        style={{
                          display: "block",
                          width: "2.2rem",
                          height: "auto",
                          fill: "none",
                          stroke: "currentColor",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": ".1rem",
                          transition:
                            "stroke .25s cubic-bezier(.45,.05,.55,.95) 0ms",
                        }}
                      >
                        <defs></defs>
                        <circle cx="5.249" cy="15.75" r="3" class="a"></circle>
                        <path
                          d="M9.473 23.25a4.474 4.474 0 0 0-8.449 0M21.516 14.589a3 3 0 0 1-5.192 2.927M22.973 23.25a4.474 4.474 0 0 0-8.449 0M21 .75h.75a1.5 1.5 0 0 1 1.5 1.5v8.25a1.5 1.5 0 0 1-1.5 1.5h-4.5l-4.5 4.5V12h-3a1.5 1.5 0 0 1-1.5-1.5V2.25a1.5 1.5 0 0 1 1.5-1.5h1.5M13.874 3.375a1.875 1.875 0 1 1 1.875 1.875"
                          class="a"
                        ></path>
                        <path
                          d="M15.749 8.25a.375.375 0 1 1-.375.375.375.375 0 0 1 .375-.375"
                          class="a"
                        ></path>
                      </svg>
                    </span>
                  </p>
                  <span>
                    <b>How to Write a Resume</b>
                    <br />
                    Learn how to make a resume{" "}
                  </span>
                </div>
              </div>
              <div class="lgnbx">
                <>
                  <LoginComponent pushToHome={this.pushToHome} />
                </>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
