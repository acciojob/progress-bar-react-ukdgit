import React, { useState, useEffect } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(intervalId);
          return 100;
        }

        return prevProgress + 10;
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1>Progress Bar</h1>
      <div id='barOuter'
        style={{ width: "500px", height: "20px", backgroundColor: "lightgray" }}
      >
        <div
          id='barInner'
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "blue",
            transition: "width 0.5s ease-in-out",
          }}
        />
      </div>
      <p>{progress}%</p>
    </div>
  );
};

export default ProgressBar;