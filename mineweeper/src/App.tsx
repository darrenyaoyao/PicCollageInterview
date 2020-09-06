import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Block from "./components/Block";
import { Button, TextField } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { renewClickedMap, generateMinesMap } from "./utils";

/*
1. There is a bug about click 0 block
2. Unit Test
*/

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
  },
  utilContainer: {
    display: "flex",
    alignItems: "center",
  },
  input: {
    marginRight: 12,
    marginLeft: 12,
  },
  restartButton: {
    margin: 24,
  },
  blockContainer: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: 360,
  },
});

function App() {
  const classes = useStyles();
  const [fail, setFail] = useState(false);
  const [success, setSuccess] = useState(false);
  const [rowNumberInput, setRowNumberInput] = useState(9);
  const [mineNumberInput, setMineNumberInput] = useState(10);
  const [rowNumber, setRowNumber] = useState(9);
  const [mineNumber, setMineNumber] = useState(10);
  const [minesMap, setMinesMap] = useState<string[]>(
    Array.from(Array(rowNumber * rowNumber).keys()).map((n) => "")
  );
  const [clickedMap, setClickedMap] = useState(
    Array.from(Array(rowNumber * rowNumber).keys()).fill(0)
  );

  const init = () => {
    setMinesMap(generateMinesMap(0, rowNumberInput, mineNumberInput));
    setClickedMap(
      Array.from(Array(rowNumberInput * rowNumberInput).keys()).fill(0)
    );
    setFail(false);
    setSuccess(false);
    setRowNumber(rowNumberInput);
    setMineNumber(mineNumberInput);
  };

  useEffect(() => {
    init();
  }, []);

  const checkSuccess = () => {
    for (let i = 0; i < minesMap.length; i++) {
      if (minesMap[i] !== "X" && clickedMap[i] === 0) return false;
    }
    return true;
  };

  const onBlockClick = (i: number) => {
    let currentMinesMap = minesMap;
    // first click => generate mines map
    if (
      JSON.stringify(clickedMap) ===
      JSON.stringify(Array.from(Array(rowNumber * rowNumber).keys()).fill(0))
    ) {
      currentMinesMap = generateMinesMap(i, rowNumber, mineNumber);
      setMinesMap(currentMinesMap);
    }

    // click on mine => show fail information
    if (currentMinesMap[i] === "X") {
      setClickedMap(Array.from(Array(rowNumber * rowNumber).keys()).fill(1));
      setFail(true);
    } else {
      // not click on mine => renew clicked map
      setClickedMap(
        Array.from(renewClickedMap(currentMinesMap, clickedMap, i, rowNumber))
      );
      if (checkSuccess()) {
        setSuccess(true);
        setClickedMap(Array.from(Array(rowNumber * rowNumber).keys()).fill(1));
      }
    }
  };

  return (
    <div className={classes.container}>
      <Alert
        severity={fail ? "error" : "success"}
        style={{
          visibility: fail || success ? "visible" : "hidden",
          width: 40 * rowNumber,
        }}
      >
        {fail ? (
          <>
            <AlertTitle>Fail</AlertTitle>
            Bomb!!! You click on the mine!
          </>
        ) : (
          <>
            <AlertTitle>Success</AlertTitle>
            Wow!!! You win the game!
          </>
        )}
      </Alert>
      <div className={classes.utilContainer}>
        <TextField
          value={rowNumberInput}
          onChange={(e) => {
            if (parseInt(e.target.value) > 0)
              setRowNumberInput(parseInt(e.target.value));
            if (
              mineNumberInput >
              parseInt(e.target.value) * parseInt(e.target.value)
            )
              setMineNumberInput(parseInt(e.target.value));
          }}
          size="small"
          type="number"
          className={classes.input}
          label="Row Number"
          variant="outlined"
        />
        <TextField
          value={mineNumberInput}
          onChange={(e) => {
            if (
              parseInt(e.target.value) > 0 &&
              parseInt(e.target.value) < rowNumberInput * rowNumberInput
            )
              setMineNumberInput(parseInt(e.target.value));
          }}
          size="small"
          className={classes.input}
          type="number"
          label="Mine Number"
          variant="outlined"
        />
        <Button
          className={classes.restartButton}
          variant="contained"
          onClick={init}
        >
          {"Restart"}
        </Button>
      </div>
      <div
        className={classes.blockContainer}
        style={{ maxWidth: 40 * rowNumber }}
      >
        {minesMap.map((c, i) => (
          <Block
            key={i}
            index={i}
            contentMap={minesMap}
            click={Boolean(clickedMap[i])}
            onClick={onBlockClick}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
