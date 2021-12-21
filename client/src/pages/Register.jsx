import React, { useState } from "react";
import logo from "../assets/logo.png";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions/authAction";

const Register = () => {
  const { auth, alert } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const initialState = {
    fullname: "",
    username: "",
    email: "",
    password: "",
    cf_password: "",
    sex: "male",
  };
  const [userData, setUserData] = useState(initialState);
  const { fullname, username, email, password, cf_password } = userData;

  const [typePass, setTypePass] = useState(false);
  const [typeConfirmPass, setTypeConfirmPass] = useState(false);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    dispatch(register(userData));
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
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
              <div className="log-reg-area">
                <h2 className="log-title">Register</h2>
                <p>Don’t use Horizon Yet?</p>
                <form onSubmit={handleSubmitRegister}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="fullname"
                      value={fullname}
                      onChange={handleChangeInput}
                      placeholder={alert.fullname ? alert.fullname : ""}
                      style={{
                        marginTop: "5px",
                        background: `${alert.fullname ? "#fd2d6a14" : ""}`,
                      }}
                    />
                    <label className="control-label" htmlFor="input">
                      First &amp; Last Name{" "}
                    </label>
                    <i className="mtrl-select" />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="username"
                      value={username}
                      onChange={handleChangeInput}
                      placeholder={alert.username ? alert.username : ""}
                      style={{
                        marginTop: "5px",
                        background: `${alert.username ? "#fd2d6a14" : ""}`,
                      }}
                    />
                    <label className="control-label" htmlFor="input">
                      User Name
                    </label>
                    <i className="mtrl-select" />
                  </div>
                  <div className="form-group">
                    <input
                      type={typePass ? "text" : "password"}
                      name="password"
                      value={password}
                      onChange={handleChangeInput}
                      placeholder={alert.password ? alert.password : ""}
                      style={{
                        marginTop: "5px",
                        background: `${alert.password ? "#fd2d6a14" : ""}`,
                      }}
                    />
                    <label className="control-label" htmlFor="input">
                      Password
                    </label>
                    <small
                      style={{
                        float: "right",
                        marginTop: "-25px",
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() => setTypePass(!typePass)}
                    >
                      {typePass ? "hide" : "show"}
                    </small>
                    <i className="mtrl-select" />
                  </div>
                  <div className="form-group">
                    <input
                      type={typeConfirmPass ? "text" : "password"}
                      name="cf_password"
                      value={cf_password}
                      onChange={handleChangeInput}
                      placeholder={alert.cf_password ? alert.cf_password : ""}
                      style={{
                        marginTop: "5px",
                        background: `${alert.cf_password ? "#fd2d6a14" : ""}`,
                      }}
                    />
                    <label className="control-label" htmlFor="input">
                      Confirm Password
                    </label>
                    <small
                      style={{
                        float: "right",
                        marginTop: "-25px",
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() => setTypeConfirmPass(!typeConfirmPass)}
                    >
                      {typeConfirmPass ? "hide" : "show"}
                    </small>
                    <i className="mtrl-select" />
                  </div>
                  <div className="form-radio">
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          defaultChecked="checked"
                          name="male"
                          value="male"
                          onChange={handleChangeInput}
                        />
                        <i className="check-box" />
                        Male
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          name="female"
                          value="female"
                          onChange={handleChangeInput}
                        />
                        <i className="check-box" />
                        Female
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="email"
                      value={email}
                      onChange={handleChangeInput}
                      placeholder={alert.email ? alert.email : ""}
                      style={{
                        marginTop: "5px",
                        background: `${alert.email ? "#fd2d6a14" : ""}`,
                      }}
                    />
                    <label className="control-label" htmlFor="input">
                      <a
                        href="https://wpkixx.com/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="6c29010d05002c"
                      >
                        [email&nbsp;protected]
                      </a>
                    </label>
                    <i className="mtrl-select" />
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" defaultChecked="checked" />
                      <i className="check-box" />
                      Accept Terms &amp; Conditions ?
                    </label>
                  </div>
                  <Link to="/login" title className="already-have">
                    Already have an account
                  </Link>
                  <div className="submit-btns">
                    <button className="mtr-btn" type="submit">
                      <span>Register</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
