import { useState } from "react";
import "./SoothingSounds.css";

const soothingSounds = [
  { name: "Birds Chirping", url: "/sounds/birds.mp3" },
  { name: "Ocean Waves", url: "/sounds/ocean.mp3" },
  { name: "Om Chanting", url: "/sounds/om.mp3" },
  { name: "Relaxing Music", url: "/sounds/relaxing.mp3" },
];

const SoothingSoundsPage = () => {
  const [playingAudio, setPlayingAudio] = useState(null);

  const playSound = (soundUrl) => {
    if (playingAudio) {
      playingAudio.pause();
    }
    
    const audio = new Audio(soundUrl);
    audio.loop = true;
    audio.play().catch((error) => console.error("Audio error:", error));
    setPlayingAudio(audio);
  };

  const stopSound = () => {
    if (playingAudio) {
      playingAudio.pause();
      setPlayingAudio(null);
    }
  };

  return (
    <div className="ssbody">
        <div className="sounds-container">
        <h2>🌿 Soothing Sounds</h2>
        <p>Relax and focus with calming sounds.</p>
        <div className="sound-buttons">
            {soothingSounds.map(({ name, url }) => (
            <button key={name} onClick={() => playSound(url)}>
                {name}
            </button>
            ))}
        </div>
        {playingAudio && (
            <button className="stop-button" onClick={stopSound}>
            Stop Sound
            </button>
        )}
        </div>
    </div>
  );
};

export default SoothingSoundsPage;
