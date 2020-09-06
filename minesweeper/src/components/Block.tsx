import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    border: "1px solid #AAA",
    borderRadius: 1,
    width: 40,
    height: 40,
    boxSizing: "border-box",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mine: {
    color: "red",
  },
});

interface BlockProps {
  contentMap: string[];
  index: number;
  onClick: (i: number) => void;
  click: boolean;
}

const Block: React.FC<BlockProps> = ({ contentMap, index, onClick, click }) => {
  const classes = useStyles();

  return (
    <div
      className={classes.container}
      onClick={() => onClick(index)}
      style={{ backgroundColor: click ? "#DDD" : "#FFF" }}
    >
      {click ? (
        contentMap[index] === "X" ? (
          <div className={classes.mine}>{contentMap[index]}</div>
        ) : (
          contentMap[index]
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default Block;
