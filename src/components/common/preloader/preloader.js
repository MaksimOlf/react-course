import React from "react";
import preloader from "../../../assets/images/preloader.gif";

let Preloader = () => {
  return (
    <img
      style={{ width: "80px", height: "80px" }}
      src={preloader}
      alt="Loading..."
    />
  );
};

export default Preloader;
