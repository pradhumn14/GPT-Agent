import React from "react";
import RecordButton from "./RecordButton";
import StopButton from "./StopButton";
import InputBox from "./InputBox";
import UserBox from "./UserBox";
import GptBox from "./GptBox";
import SendButton from "./SendButton";
import UseVoice from "./Hooks/UseVoice";

const Voice2Text = () => {

  const [transcript, printText, startListening, stopListening] = UseVoice();

  return (
    <>
      <UserBox />
      <GptBox />
      <SendButton />
      <RecordButton name={startListening} />
      <StopButton name={stopListening} />
      <InputBox name={transcript} copy={printText} />
    </>
  );
};

export default Voice2Text;
