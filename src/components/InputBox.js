import React from "react";

const InputBox = (props) => {
  return (
    <>
      <div>
        <div id="inputBox" onClick={props.copy(props.name)}>
          {props.name ? props.name : "Enter your text"}
        </div>
      </div>
    </>
  );
};

export default InputBox;
