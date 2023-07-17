import React, { useState, useEffect } from "react";
import RecordButton from "./RecordButton";
import StopButton from "./StopButton";
import InputBox from "./InputBox";
import UserBox from "./UserBox";
import GptBox from "./GptBox";
import SendButton from "./SendButton";
import UseVoice from "../Hooks/UseVoice";
import OpenAi from "./OpenAi";
import UseGptRes from "../Hooks/UseGptRes";

const Voice2Text = () => {
  const [transcript, printText, startListening, stopListening] = UseVoice();

  const [handleClick, gptRes] = OpenAi();

  let text = transcript;

  const [inputBoxValue, setInputBoxValue] = useState("");
  const [userBoxValue, setUserBoxValue] = useState("");

  const [gptResponseBoxValue, setGptResponseBoxValue] = useState("");

  const handleSendButtonClick = async () => {
    console.log("send button");
    setUserBoxValue(text);
    setGptResponseBoxValue(text);
    setInputBoxValue("");
  };

  const handleInputChange = (value) => {
    setInputBoxValue(value);
    setGptResponseBoxValue(value);
    console.log(inputBoxValue);
  };

  const setGptValue = (value) => {
    setGptResponseBoxValue(value);
  };

  // setInputBoxValue(transcript)

  return (
    <>
      <UserBox value={userBoxValue} />
      <GptBox value={gptResponseBoxValue} />

      <SendButton
        name={transcript}
        value={gptResponseBoxValue}
        onClick={handleSendButtonClick}
        // copy={() => {
        //   handleClick(transcript);
        // }}
      />
      <RecordButton name={startListening} />
      <StopButton name={stopListening} />
      <InputBox
        name={text}
        value={inputBoxValue}
        onChange={handleInputChange}
      />
      <OpenAi Function={setGptValue} />
    </>
  );
};

export default Voice2Text;
