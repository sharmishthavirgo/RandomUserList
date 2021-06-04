import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const Spinner = () => {
  return (
    <div className="spinner">
      <CircularProgress color={"inherit"} />
    </div>
  );
};

export default Spinner;
