import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Grid from "./Grid";
import Button from "./components/Button";

const App = () => {
  const [widthAndHigth, setWidthAndHigth] = useState(16);
  const [color, setColor] = useState("#000");
  const [random, setRandom] = useState(0);
  const [randomColorIsOn, setRandomColorIsOn] = useState(false);

  useEffect(() => {
    setRandom(Date.now());
  }, []);

  const sizeBoardHandler = () => {
    let enteredNumber = parseInt(
      prompt("Enter number of squeres ( range 16-100)", 16)
    );

    if (
      enteredNumber > 15 &&
      enteredNumber <= 100 &&
      enteredNumber.length !== 0
    ) {
      setWidthAndHigth(enteredNumber);
      setRandom(Date.now());

      setRandomColorIsOn(false);
      setColor("#fff");
    } else {
      alert("You have to enter number between 16 and 100");
    }
  };

  const blackBoardHandler = () => {
    setColor("#000");
    setRandomColorIsOn(false);
  };

  const clearBoardHandler = () => {
    setRandom(Date.now());
    setRandomColorIsOn(false);
    setWidthAndHigth(widthAndHigth);

    setColor("#fff");
  };

  const randomColorHandler = () => {
    setRandomColorIsOn(true);
  };

  return (
    <div className="container">
      <Header />
      <div className="buttons">
        <Button className="btn" onClick={sizeBoardHandler}>
          Reset Board
        </Button>
        <Button className="btn" onClick={blackBoardHandler}>
          Black
        </Button>
        <Button className="btn" onClick={randomColorHandler}>
          Random Color
        </Button>
        <Button className="btn" onClick={clearBoardHandler}>
          Clear Board
        </Button>
      </div>

      <div className="grid">
        <Grid
          key={random}
          width={widthAndHigth}
          color={color}
          randomColorIsOn={randomColorIsOn}
        ></Grid>
      </div>
    </div>
  );
};

export default App;
