import React from "react";
import "../../styles/loading.css";

function Loading() {
  return (
    <div
      style={{ backgroundColor: "#0005", top: 0, left: 0, zIndex: 50 }}
      className="position-fixed w-100 h-100 text-center loading"
    >
      <svg
        class="spinner"
        width="65px"
        height="65px"
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          class="path"
          fill="none"
          stroke-width="6"
          stroke-linecap="round"
          cx="33"
          cy="33"
          r="30"
        ></circle>
      </svg>
    </div>
  );
}

export default Loading;
