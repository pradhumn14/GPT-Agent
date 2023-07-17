import React, { useState, useEffect } from "react";
import OpenAi from "./OpenAi";
import UseText from "../Hooks/UseText";
import { useSpeechSynthesis } from "react-speech-kit";

const GptBox = (props) => {
  const { speak } = useSpeechSynthesis();
  const [gptRes, setGptRes] = useState("");
  const [handleClick] = OpenAi(setGptRes);
  const [isCalled, setisCalled] = useState(false);

  useEffect(() => {
    if (props.value !== "" && isCalled !== true) {
      handleClick(props.value);
      if (gptRes !== "") {
        speak({ text: gptRes });
        setisCalled(true);
        console.log(gptRes);
        console.log(isCalled);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleClick, props.value, isCalled, setisCalled]);

  return (
    <>
      <p id="gptbox">
        Gpt
        <br></br>
        {gptRes}
      </p>
    </>
  );
};

export default GptBox;
