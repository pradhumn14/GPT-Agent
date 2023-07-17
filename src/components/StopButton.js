import React from "react";

const StopButton = (props) => {
  return (
    <>
      <button
        id="stopBtn"
        type="button"
        className="btn btn-danger"
        onClick={props.name}
      >
        Stop
      </button>
    </>
  );
};

export default StopButton;
