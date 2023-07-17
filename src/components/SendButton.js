import React, { useState } from "react";
import GptBox from "./GptBox";
import UseGptRes from "../Hooks/UseGptRes";
import UserBox from "./UserBox";

const SendButton = ({ onClick, copy }) => {
  const [setUserText, addUserHandler] = UseGptRes();
  const [userInputValue, setUserInputValue] = useState([]);

  // const [ifAvail, setAvail] = useState(false);

  const add = (e) => {
    e.preventDefault();
    if (userInputValue === "") {
      alert("All fields are mandatory: Name and Email");
      return;
    }

    addUserHandler({ userInputValue });
    setUserInputValue("");
  };

  const separateMethod = () => {
    // copy();
    onClick();
  };

  return (
    <>
      <button
        id="sendBtn"
        onClick={separateMethod}
        className="btn btn-primary"
        type="submit"
      >
        Send
      </button>
    </>
  );
};

export default SendButton;
