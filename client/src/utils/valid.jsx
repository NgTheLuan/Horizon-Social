export const valid = ({ fullname, username, email, password, cf_password }) => {
  const err = {};

  if (!fullname) {
    err.fullname = "Please input your full name.";
  } else if (fullname.length > 25) {
    err.fullname = "Full name is up to 25 characters long.";
  }

  if (!username) {
    err.username = "Please input your user name.";
  } else if (username.replace(/ /g, "").length > 25) {
    err.username = "User name is up to 25 characters long.";
  }

  if (!email) {
    err.email = "Please input your email.";
  } else if (!validateEmail(email)) {
    err.email = "Email format is incorrect.";
  }

  if (!password) {
    err.password = "Please input your password.";
  } else if (password.length < 6) {
    err.password = "Password must be at least 6 characters.";
  }

  if (password !== cf_password) {
    err.cf_password = "Confirm password did not match.";
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
