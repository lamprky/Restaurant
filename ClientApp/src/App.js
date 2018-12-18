import React, { Component } from "react";
import "./App.css";
import { Route, BrowserRouter, Link } from "react-router-dom";
import Home from "./Home/home.js";
import Login from "./User/login";

class App extends Component {

  constructor() {
    super();

    this.state = {
      user: ""
    };

    this.onLogin = this.onLogin.bind(this);
  }
  onLogin(user){
    this.setState({
      user : user
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="container">
            <div className="header col-10 col-sm-11 col-md-8 col-lg-6 col-xl-5">
              <Link to="/" alt="Blue Lemón">
                <div className="logo">
                  <div className="logo-label">
                    BLUE LEMóN
                    <div className="logo-descr">Fine Dinning</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="navigation">
              <div className="row">
                <div className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2 menu-button">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 menu-item">
                    <Link to="/">Home</Link>
                  </div>
                </div>
                <div className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2 menu-button">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 menu-item">
                    <Link to="/">About us</Link>
                  </div>
                </div>
                <div className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2 menu-button">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 menu-item">
                    <Link to="/">Menu</Link>
                  </div>
                </div>
                <div className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2 menu-button">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 menu-item">
                    <Link to="/">Book a table</Link>
                  </div>
                </div>
                <div className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2 menu-button">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 menu-item">
                  {(this.state.user == "") ?
                    <Link to="/login">Sign In/Up</Link>
                  :
                    <Link to="/login">My account</Link>
                  }
                  </div>
                </div>
                <div className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2 menu-button">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 menu-item">
                    <Link to="/">Contact Us</Link>
                  </div>
                </div>
              </div>
            </div>

            <Route
              exact
              path="/"
              render={() => {
                return <Home />;
              }}
            />

            <Route
              exact
              path="/login"
              render={() => {
                return <Login 
                onLogin = {this.onLogin}/>;
              }}
            />
          </div>

          <footer className="page-footer font-small blue pt-4">
            {/* <div className="container-fluid text-center text-md-left">
              <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                  <h5 className="text-uppercase">Footer Content</h5>
                  <p>
                    Here you can use rows and columns here to organize your
                    footer content.
                  </p>
                </div>

                <hr className="clearfix w-100 d-md-none pb-3" />

                <div className="col-md-3 mb-md-0 mb-3">
                  <h5 className="text-uppercase">Links</h5>

                  <ul className="list-unstyled">
                    <li>
                      <a href="#!">Link 1</a>
                    </li>
                    <li>
                      <a href="#!">Link 2</a>
                    </li>
                    <li>
                      <a href="#!">Link 3</a>
                    </li>
                    <li>
                      <a href="#!">Link 4</a>
                    </li>
                  </ul>
                </div>

                <div className="col-md-3 mb-md-0 mb-3">
                  <h5 className="text-uppercase">Links</h5>

                  <ul className="list-unstyled">
                    <li>
                      <a href="#!">Link 1</a>
                    </li>
                    <li>
                      <a href="#!">Link 2</a>
                    </li>
                    <li>
                      <a href="#!">Link 3</a>
                    </li>
                    <li>
                      <a href="#!">Link 4</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}

            <div className="footer-copyright text-center py-3">
              © 2019 Copyright:
              <a href="https://www.linkedin.com/in/lamprky/">
                {" "}
                Lampropoulou Kyriaki
              </a>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
