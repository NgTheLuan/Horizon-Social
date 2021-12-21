import React, { useState } from "react";
import logo from "../assets/logo.png";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions/authAction";

const Register = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const initialState = {
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    sex: "male",
  };
  const [userData, setUserData] = useState(initialState);
  const { fullname, username, email, password, confirmpassword } = userData;

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
                      required="required"
                      name="fullname"
                      value={fullname}
                      onChange={handleChangeInput}
                    />
                    <label className="control-label" htmlFor="input">
                      First &amp; Last Name
                    </label>
                    <i className="mtrl-select" />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      required="required"
                      name="username"
                      value={username}
                      onChange={handleChangeInput}
                    />
                    <label className="control-label" htmlFor="input">
                      User Name
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
                  </div>
                  <div className="form-group">
                    <input
                      type={typeConfirmPass ? "text" : "password"}
                      required="required"
                      name="confirmpassword"
                      value={confirmpassword}
                      onChange={handleChangeInput}
                    />
                    <label className="control-label" htmlFor="input">
                      Confirm Password
                    </label>
                    <i className="mtrl-select" />
                    <small
                      style={{
                        float: "right",
                        marginTop: "-20px",
                        cursor: "pointer",
                      }}
                      onClick={() => setTypeConfirmPass(!typeConfirmPass)}
                    >
                      {typeConfirmPass ? "hide" : "show"}
                    </small>
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
                      required="required"
                      name="email"
                      value={email}
                      onChange={handleChangeInput}
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
                    <button className="mtr-btn signup" type="submit">
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
