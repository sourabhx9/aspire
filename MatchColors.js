import { useState } from "react";
import { motion } from "framer-motion";
import "./MatchColors.css"; // Import external CSS

const colors = [
  { name: "Red", id: 1 },
  { name: "Blue", id: 2 },
  { name: "Green", id: 3 },
  { name: "Yellow", id: 4 },
  { name: "Pink", id: 5 },
  { name: "Purple", id: 6 },
  { name: "Orange", id: 7 },
  { name: "Teal", id: 8 },
  { name: "Indigo", id: 9 },
  { name: "Gray", id: 10 },
  { name: "Lime", id: 11 },
  { name: "Rose", id: 12 }
];

export default function MatchColorsGame() {
  const [score, setScore] = useState(0);
  const [draggedColor, setDraggedColor] = useState(null);
  const [shake, setShake] = useState(false);
  const [placedColors, setPlacedColors] = useState({});

  const handleDragStart = (color) => {
    setDraggedColor(color);
  };

  const handleDrop = (targetColor) => {
    if (draggedColor && draggedColor.id === targetColor.id) {
      setScore(score + 1);
      setPlacedColors((prev) => ({ ...prev, [targetColor.id]: draggedColor }));
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
    setDraggedColor(null);
  };

  return (
    <motion.div
      className={`game-container ${shake ? "shake" : ""}`}
      animate={{ x: shake ? [0, -10, 10, -10, 10, 0] : 0 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="title">Match the Colors Game</h1>
      <p className="score">Score: {score}</p>
      <div className="color-palette">
        {colors.map((color) => (
          !placedColors[color.id] && (
            <motion.div
              key={color.id}
              className={`color-box ${color.name.toLowerCase()}`}
              draggable
              onDragStart={() => handleDragStart(color)}
            >
              {color.name}
            </motion.div>
          )
        ))}
      </div>
      <h2 className="drop-title">Drop Here:</h2>
      <div className="drop-area">
        {colors.map((color) => (
          <div
            key={color.id}
            className={`drop-box ${placedColors[color.id] ? placedColors[color.id].name.toLowerCase() : ""}`}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(color)}
          >
            {color.name}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
