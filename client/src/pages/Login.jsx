import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../assets/logo.png";

import { login } from "../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const initialState = { email: "", password: "" };
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;

  const [typePass, setTypePass] = useState(false);

  const dispatch = useDispatch();
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    dispatch(login(userData));
  };

  let history = useHistory();
  const RedirectRegister = () => {
    history.push("/register");
  };

  return (
    <>
      <div className="theme-layout">
        <div className="container-fluid pdng0">
          <div className="row merged">
            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">
              <div className="land-featurearea">
                <div className="land-meta">
                  <h1>Horizon Social</h1>
                  <p>
                    Horizon is free social network that helps people stay
                    connected and keep in touch with each other
                  </p>
                  <div className="friend-logo">
                    <span>
                      <img src={logo} alt style={{ marginLeft: "-8px" }} />
                    </span>
                  </div>
                  {/* <a href="#" title className="folow-me">
                    Follow Us on
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
              <div className="login-reg-bg">
                <div className="log-reg-area sign">
                  <h2 className="log-title">Login</h2>
                  <p>
                    Don’t use Horizon Yet?{" "}
                    {/* <a href="#" title>
                      Take the tour
                    </a>{" "}
                    or{" "}
                    <a href="#" title>
                      Join now
                    </a> */}
                  </p>
                  <form onSubmit={handleSubmitLogin}>
                    <div className="form-group">
                      <input
                        type="email"
                        required="required"
                        name="email"
                        value={email}
                        onChange={handleChangeInput}
                      />
                      <label className="control-label" htmlFor="input">
                        Email
                      </label>
                      <i className="mtrl-select" />
                    </div>
                    <div className="form-group">
                      <input
                        type={typePass ? "text" : "password"}
                        required="required"
                        name="password"
                        value={password}
                        onChange={handleChangeInput}
                      />
                      <label className="control-label" htmlFor="input">
                        Password
                      </label>
                      <i className="mtrl-select" />
                      <small
                        style={{
                          float: "right",
                          marginTop: "-20px",
                          cursor: "pointer",
                        }}
                        onClick={() => setTypePass(!typePass)}
                      >
                        {typePass ? "hide" : "show"}
                      </small>

                      {/* <label className="control-label" htmlFor="input">
                        Password
                      </label> */}
                      <i className="mtrl-select" />
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" defaultChecked="checked" />
                        <i className="check-box" />
                        Always Remember Me.
                      </label>
                    </div>
                    <a href="#" title className="forgot-pwd">
                      Forgot Password?
                    </a>
                    <div className="submit-btns">
                      <button
                        className="mtr-btn signin"
                        type="submit"
                        disabled={email && password ? false : true}
                      >
                        <span>Login</span>
                      </button>
                      &nbsp; &nbsp; &nbsp;
                      <button
                        className="mtr-btn "
                        type="button"
                        onClick={RedirectRegister}
                      >
                        <span>Register</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
