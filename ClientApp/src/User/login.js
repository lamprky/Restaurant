import React, { Component } from "react";

class Login extends Component {

  constructor(props) {
    super(props);
  }

  onLoginClicked() {
    fetch("api/user/5")
      .then(response => response.json())
      .then(res => {
        this.props.onLogin(res);
      })
      .catch(err => alert("Error retrieving user" + err));

    // this.setState({ displArtist: selectedArtist });
  }

  render() {
    return (
      <div className="container">
        <div className="row i-row">
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <div className="container">
                    <h1>New User</h1>
                    <p>Create an account for</p>
                    <ul>
                      <li>Online table bookings</li>
                      <li>Earn points and receives discounts</li>
                      <li>Stay tuned</li>
                    </ul>
                    <button
                      className="btn btn-secondary"
                      onClick={() => {
                        this.onLoginClicked();
                      }}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <div className="container">
                    <h1>Login</h1>
                    <div className="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                      />
                      <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                      </small>
                    </div>
                    <div className="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                    <button
                      className="btn btn-secondary"
                      onClick={() => {
                        this.onLoginClicked();
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
