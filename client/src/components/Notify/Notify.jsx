import React from "react";
import Loading from "./Loading.jsx";
import Toast from "./Toast.jsx";

import { useDispatch, useSelector } from "react-redux";

const Notify = () => {
  const { notify } = useSelector((state) => state);

  const dispatch = useDispatch();

  return (
    <>
      {notify.loading && <Loading />}

      {notify.error && (
        <Toast
          msg={{ title: "Failure", body: notify.error }}
          handleShow={() => dispatch({ type: "NOTIFY", payload: {} })}
          bgColor="bg-danger"
        />
      )}

      {notify.sucess && (
        <Toast
          msg={{ title: "Success", body: notify.sucess }}
          handleShow={() => dispatch({ type: "NOTIFY", payload: {} })}
          bgColor="bg-success"
        />
      )}
    </>
  );
};

export default Notify;
