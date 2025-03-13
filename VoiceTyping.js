import React, { useState, useEffect } from "react";
import { FaMicrophone, FaPause } from "react-icons/fa";
import "./VoiceTyping.css"; // Import external CSS

const VoiceTyping = () => {
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    if ("webkitSpeechRecognition" in window) {
      const newRecognition = new window.webkitSpeechRecognition();
      newRecognition.continuous = true;
      newRecognition.interimResults = true;
      newRecognition.lang = "en-US";

      newRecognition.onstart = () => {
        console.log("Speech recognition started");
        setListening(true);
      };

      newRecognition.onresult = (event) => {
        let transcript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        setText(transcript);
      };

      newRecognition.onspeechend = () => {
        console.log("Speech ended, stopping recognition");
        newRecognition.stop();
        setListening(false);
      };

      newRecognition.onerror = (event) => {
        console.error("Speech Recognition Error:", event.error);
        alert("Error: " + event.error);
        setListening(false);
      };

      setRecognition(newRecognition);
    } else {
      console.warn("Speech recognition not supported in this browser.");
      alert("Speech recognition is not supported in your browser. Please use Google Chrome.");
    }
  }, []);

  const startListening = () => {
    if (recognition) {
      recognition.start();
    } else {
      alert("Speech Recognition is not available. Try using Google Chrome.");
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
    }
  };

  return (
    <div className="voice-typing-container">
      <div className="voice-typing-box">
        <h3>🎙️ Voice Typing</h3>
        <p>Click the mic and start speaking.</p>
        <div className="buttons">
          <button
            className="mic-btn"
            onClick={startListening}
            disabled={listening}
          >
            <FaMicrophone />
          </button>
          <button
            className="stop-btn"
            onClick={stopListening}
            disabled={!listening}
          >
            <FaPause />
          </button>
        </div>
        <textarea
          className="text-output"
          value={text}
          readOnly
          placeholder="Your speech will appear here..."
        />
      </div>
    </div>
  );  
};


export default VoiceTyping;
