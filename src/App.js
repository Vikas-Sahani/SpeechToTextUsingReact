// Todo => one clear button & one save button for saving the speech document
// Todo => side bar menu so that all the saved speech documents can comeup

// instead of "git push origin master" I have written "git push github master" then this cloned repository is went to my github account before I have copied 2 command from StackOverflow:-
// https://stackoverflow.com/questions/10904339/github-fatal-remote-origin-already-exists
// $ git remote set-url origin git@github.com:ppreyer/first_app.git
// git remote add github git@github.com:ppreyer/first_app.git

import "./App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";
import { useState } from "react";

const App = () => {
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy, {
    successDuration: 1000,
  });

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <>
      <div className="container">
        <h2>Speech to Text Converter</h2>
        <br />
        <p>
          A React hook that converts speech from the microphone to text and
          makes it available to your React components.
        </p>

        <div className="main-content" onClick={() => setTextToCopy(transcript)}>
          {transcript}
        </div>

        <div className="btn-style">
          <button onClick={setCopied}>
            {isCopied ? "Copied!" : "Copy to clipboard"}
          </button>
          <button onClick={startListening}>Start Listening</button>
          <button onClick={SpeechRecognition.stopListening}>
            Stop Listening
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
