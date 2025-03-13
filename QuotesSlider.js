import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./QuotesSlider.css";

const quotes = [
  { text: "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.", author: "Dr. APJ Abdul Kalam" },
  { text: "Courage is not the absence of fear, but the triumph over it.", author: "Ratan Tata" },
  { text: "Believe you can, and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "The best way to find yourself is to lose yourself in the service of others.", author: "Mahatma Gandhi" },
  { text: "Doubt kills more dreams than failure ever will.", author: "Suzy Kassem" },
  { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
  { text: "A person who is afraid of asking is ashamed of learning.", author: "Chanakya" },
  { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
  { text: "If you salute your duty, you do not have to salute anybody. But if you pollute your duty, you have to salute everybody.", author: "Dr. A.P.J. Abdul Kalam" },
  { text: "Happiness depends upon ourselves.", author: "Aristotle" },
  { text: "An eye for an eye will only make the whole world blind.", author: "Mahatma Gandhi" }
];

export default function QuotesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const nextQuote = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextQuote, 6000);
    return () => clearInterval(interval);
  }, [nextQuote, isPaused]);

  return (
    <div
      className="quotes-slider-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Quote Card with Animation */}
      <div className="quotes-card">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            initial={{ x: direction === 1 ? "100%" : "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction === 1 ? "-100%" : "100%", opacity: 0 }}
            transition={{ type: "tween", duration: 0.6 }}
            className="quote-content"
          >
            <p className="quote-text">"{quotes[currentIndex].text}"</p>
            <p className="quote-author">- {quotes[currentIndex].author}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
