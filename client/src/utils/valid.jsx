const valid = ({ fullname, username, email, password, confirmpassword }) => {
  const err = {};

  if (!fullname) {
    err.fullname = "Please input your FullName.";
  } else if (fullname.lenght > 25) {
    err.fullname = "FullName is up to 25 characters.";
  }

  if (!username) {
    err.username = "Please input your UserName.";
  } else if (fullname.toLowerCase().replace(/ /g, "").lenght > 25) {
    err.fullname = "UserName is up to 25 characters.";
  }

  if (!email) {
    err.email = "Please input your Email.";
  } else if (!validateEmail(email)) {
    err.email = "Email format is incorrect.";
  }

  if (!password) {
    err.password = "Please input your Password.";
  } else if (password.lenght < 6) {
    err.password = "Password must be at least 6 characters.";
  }

  if (!confirmpassword !== password) {
    err.confirmpassword = "Confirm Password didn't match";
  }

  return {
    errMsg: err,
    errLength: Object.keys(err).length,
  };
};

function validateEmail(email) {
  // eslint-disable-next-line
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
