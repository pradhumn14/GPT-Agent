import React from "react";
import UseVoice from "../Hooks/UseVoice";

const InputBox = (props) => {
  const handleChange = (event) => {
    const inputValue = event.target.value;
    console.log(inputValue);
    props.onChange(inputValue);
  };

  return (
    <>
      <div>
        <input
          id="inputBox"
          placeholder="enter txt"
          value={props.name}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default InputBox;
