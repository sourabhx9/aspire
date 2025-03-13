import { useState } from "react";
import { motion } from "framer-motion";
import "./RhymingWords.css";

const words = [
  { word: "cat", rhyme: "hat" },
  { word: "dog", rhyme: "frog" },
  { word: "sun", rhyme: "fun" },
  { word: "tree", rhyme: "bee" },
  { word: "car", rhyme: "star" },
  { word: "boat", rhyme: "goat" },
  { word: "mouse", rhyme: "house" },
  { word: "ring", rhyme: "king" },
  { word: "light", rhyme: "night" },
  { word: "chair", rhyme: "bear" },
  { word: "phone", rhyme: "cone" },
  { word: "plane", rhyme: "train" },
  { word: "rock", rhyme: "sock" },
  { word: "fish", rhyme: "dish" },
  { word: "snake", rhyme: "cake" }
];

export default function RhymingWordsGame() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [message, setMessage] = useState("");
  const [showCelebration, setShowCelebration] = useState(false);

  const shuffledOptions = [...words.map((w) => w.rhyme)].sort(() => Math.random() - 0.5);

  const checkAnswer = (selectedWord) => {
    if (selectedWord === words[currentWordIndex].rhyme) {
      setShowCelebration(true);
      setMessage("Correct! 🎉");
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setShowCelebration(false);
        setMessage("");
      }, 5000);
    } else {
      setMessage("Try again! ❌\nLook closely and try another!");
      setTimeout(() => {
        setMessage("");
      }, 5000);
    }
  };

  return (
    <div className="rhybody">
      <h1 className="rhyming-title">Rhyming Words Game</h1>
      <div className="word-box">
        Find the word that rhymes with: {words[currentWordIndex].word}
      </div>
      <div className="options-grid row-1">
        {shuffledOptions.slice(0, 8).map((option, index) => (
          <motion.button
            key={index}
            onClick={() => checkAnswer(option)}
            whileTap={{ scale: 0.9 }}
            className="option-button"
          >
            {option}
          </motion.button>
        ))}
      </div>
      <div className="options-grid row-2">
        {shuffledOptions.slice(8).map((option, index) => (
          <motion.button
            key={index + 8}
            onClick={() => checkAnswer(option)}
            whileTap={{ scale: 0.9 }}
            className="option-button"
          >
            {option}
          </motion.button>
        ))}
      </div>
      {showCelebration && (
        <motion.div className="celebration-text">🎉✨ Great Job! ✨🎉</motion.div>
      )}
      {message && (
        <motion.div className="message-box">
          {message.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </motion.div>
      )}
    </div>
  );
}
