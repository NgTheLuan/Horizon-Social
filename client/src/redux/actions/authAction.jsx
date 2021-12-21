import { postData } from "../../utils";
import { valid } from "../../utils";

export const TYPES = {
  AUTH: "AUTH",
};

export const login = (data) => async (dispatch) => {
  try {
    dispatch({ type: "NOTIFY", payload: { loading: true } });
    const res = await postData("login", data);
    dispatch({
      type: "AUTH",
      payload: {
        token: res.data.access_token,
        user: res.data.user,
      },
    });
    localStorage.setItem("firstLogin", true);
    dispatch({
      type: "NOTIFY",
      payload: {
        sucess: res.data.msg,
      },
    });
  } catch (err) {
    dispatch({
      type: "NOTIFY",
      payload: {
        error: err.response.data.msg,
      },
    });
  }
};

export const refreshToken = (data) => async (dispatch) => {
  // const firstLogin = localStorage.getItem("firstLogin");
  // if (firstLogin) {
  //   dispatch({ type: "NOTIFY", payload: { loading: true } });
  // }
  // try {
  //   const res = await postData("refresh_token");
  //   dispatch({
  //     type: "AUTH",
  //     payload: {
  //       token: res.data.access_token,
  //       user: res.data.user,
  //     },
  //   });
  //   dispatch({ type: "NOTIFY", payload: {} });
  // } catch (err) {
  //   dispatch({
  //     type: "NOTIFY",
  //     payload: {
  //       error: err.response.data.msg,
  //     },
  //   });
  // }
};

export const register = (data) => async (dispatch) => {
  try {
    const check = valid(data);
    // dispatch({ type: "NOTIFY", payload: { loading: true } });
    // const res = await postData("login", data);
    // dispatch({
    //   type: "AUTH",
    //   payload: {
    //     token: res.data.access_token,
    //     user: res.data.user,
    //   },
    // });
    // localStorage.setItem("firstLogin", true);
    // dispatch({
    //   type: "NOTIFY",
    //   payload: {
    //     sucess: res.data.msg,
    //   },
    // });
    console.log(check);
  } catch (err) {
    dispatch({
      type: "NOTIFY",
      payload: {
        error: err.response.data.msg,
      },
    });
  }
};
