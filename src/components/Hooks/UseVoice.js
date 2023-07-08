import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useState } from 'react';

const UseVoice = () => {

    const [textToCopy, setTextToCopy] = useState();

    const startListening = () => {
        
        SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
        console.log("start listening");
    }

    const stopListening = () => {
        SpeechRecognition.stopListening()
    }

    const { transcript } =
      useSpeechRecognition();

    const printText = (fun) => {
        console.log("Transcript:", fun);
        
        setTextToCopy(fun);
    }
    
    // const checkSupport = () => {
    //     if (!browserSupportsSpeechRecognition) {
    //         return null;
    //     }
    // }    
    

    return [transcript, printText, startListening, stopListening]
}

export default UseVoice