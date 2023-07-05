import "./App.css";
import GptBox from "./components/GptBox";
import InputBox from "./components/InputBox";
import RecordButton from "./components/RecordButton";
import SendButton from "./components/SendButton";
import StopButton from "./components/StopButton";
import UserBox from "./components/UserBox";

function App() {
  return (
    <div>
      <UserBox />
      <GptBox />
      <InputBox />
      <SendButton />
      <RecordButton />
      <StopButton />
    </div>
  );
}

export default App;
