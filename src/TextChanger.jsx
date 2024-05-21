import React, { useState, useEffect } from "react";

const TextChanger = () => {
  const texts = ["FULL STACK  ", "MERN STACK  ", "FRONT END  ", "BACK END  "];

  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(1);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));

      if (isForward) {
        setEndValue((prev) => prev + 1);
      } else {
        setEndValue((prev) => prev - 1);
      }

      if (endValue > texts[index].length + 20) {
        setIsForward(false);
      }

      if (endValue < 2.2) {
        setIsForward(true);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  return (
    <div>
      <p id="change-text" className="transition ease duration-300">
        {currentText}
      </p>
    </div>
  );
};

export default TextChanger;
