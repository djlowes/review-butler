import React, {Component} from "react";
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

class Login extends Component {

  constructor(props) {
    super(props);

    // bound functions
    this.compileFormData = this.compileFormData.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);

    // component state
    this.state = {
      email: '',
      password: ''
    };
  }

  // update state as email value changes
  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  // update state as password value changes
  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  compileFormData() {
    const {loginFunction} = this.props;
    const formData = this.state;
    loginFunction(formData);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg mb-4 top-bar navbar-static-top sps sps--abv">
          <div className="container">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse1" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"/>
            </button>
            <a className="navbar-brand mx-auto" href="/"><img className="logo" src="img/tux_blue.png"/>Review<span>Butler</span>
            </a>
            <div className="collapse navbar-collapse" id="navbarCollapse1">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/#benefits">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#contact">Team</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/signup">Sign Up</a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/login">Log In<span className="sr-only">(current)</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* About
    ================================================== */}
        <section className="signup-sec parallax-section">
          <div className="container">
            <div className="row">
              <div className="col-sm-10 col-md-6 col-lg-4 gradient">
                <Form>
                  <FormGroup>
                    <Label for="userEmail">Email</Label>
                    <Input className="form-control input-lg" type="email" name="email" id="login-email" placeholder="your@emailaddress.com" value={this.state.email} onChange={this.handleEmailChange}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="userPassword">Password</Label>
                    <Input className="form-control input-lg" type="password" name="password" id="login-password" placeholder="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                  </FormGroup>
                  <Button className="btn btn-lg btn-primary btn-block signup-btn" id="login-submit" onClick={this.compileFormData}>Login</Button>
                </Form>
                {/* <form action="/login" method="post" acceptCharset="utf-8" className="form" role="form">
                  <legend>Login</legend>
                  <br/>
                  <input type="text" name="email" className="form-control input-lg" placeholder="Your Email" id="login-email"/>
                  <br/>
                  <input type="password" name="password" className="form-control input-lg" placeholder="Password" id="login-password"/>
                  <br/>
                  <button className="btn btn-lg btn-primary btn-block signup-btn" type="submit" id="login-submit">
                    Login</button>
                </form> */}
              </div>
            </div>
          </div>
        </section>
        <section className="action-sec">
          <div className="container">
            <div className="action-box text-center">
              <h2>GET STARTED FOR FREE</h2>
              <a className="btn btn-success" href="#" target="_blank">Sign Up</a>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default Login;
