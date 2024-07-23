import { useState, useEffect } from "react";

const emojis = ["🌍", "🖥️", "☁️", "🔒", "📦", "⚙️", "🔌", "🔧"];

function randomBoxes() {
  const intermediateArr = [...emojis, ...emojis].sort(() => {
    return 0.5 - Math.random();
  });

  return intermediateArr;
}

function Grid() {
  const [boxes, setBoxes] = useState([]);

  const [flipped, setFlipped] = useState([]);

  const [matched, setMatched] = useState([]);

  useEffect(() => {
    const array = randomBoxes();
    setBoxes(array);
  }, []);

  function handleClick(index) {
    if (flipped.length === 0) {
      console.log("clicked first time");
      setFlipped([index]);
    } else if (flipped.length === 1 && index !== flipped[0]) {
      console.log("clicked second time and on different index");
      const currentClickedEmoji = boxes[index];
      const previouslyClickedEmoji = boxes[flipped[0]];

      console.log("clicked second time and on different index after");
      if (currentClickedEmoji === previouslyClickedEmoji) {
        console.log("voila matched");
        setMatched((m) => [...m, index, flipped[0]]);

        setFlipped([]);
      }
    }
    if (flipped.length === 1) {
      console.log("clicked second time");
      setFlipped((f) => [f[0], index]);
      setTimeout(() => {
        setFlipped([]);
      }, 1000);
    }
  }

  const restartGame = () => {
    const arrayRestart = randomBoxes();
    setBoxes(arrayRestart);
    setFlipped([]);
    setMatched([]);
  };

  console.log({ flipped, matched });

  return (
    <>
      {" "}
      <div className="card-grid">
        {boxes.map((emoji, index) => (
          <div
            key={index}
            className={` card ${flipped.includes(index) ? "highlighted" : ""} ${
              matched.includes(index) ? "matched" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            {(flipped.includes(index) || matched.includes(index)) && emoji}
          </div>
        ))}
      </div>
      <div>
        <button className="button" onClick={restartGame}>
          Restart
        </button>
      </div>
    </>
  );
}

export default Grid;
