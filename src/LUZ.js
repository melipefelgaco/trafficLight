import React, { useState, useEffect } from "react";

let contador = 0;
const colors = ["green", "yellow", "red"];
const tempos = [5000, 2000, 4000];

const LUZ = () => {
  // setTimeout(setColor("green"), 1000);
  // setTimeout(setColor("yellow"), 1000);
  // setTimeout(setColor("red"), 1000);

  // const green = () => setTimeout(() => (setColor("green"), 1000));
  // const yellow = () => setTimeout(() => (setColor("yellow"), 2000));
  // const red = () => setTimeout((setColor("red"), 3000));

  const [color, setColor] = useState("green");

  useEffect(() => {
    let intervalo = tempos[contador % colors.length];
    const timer = setTimeout(() => {
      contador++;
      console.log(contador, intervalo);
      setColor(colors[contador % colors.length]);
    }, intervalo);
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="traffic-light">
      <div
        style={{
          backgroundColor: color,
          width: "10rem",
          height: "10rem",
          borderRadius: "100%",
        }}
      ></div>
      <p>
        Build a traffic light component with three stages/colors green lasting 5
        seconds, yellow lasting 2 seconds, and red lasting 4 seconds.
      </p>
    </div>
  );
};

export default LUZ;
