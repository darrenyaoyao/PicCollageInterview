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

  const color = (content: string) => {
    switch (content) {
      case "X":
        return <div className={classes.mine}>{content}</div>;
      case "1":
        return (
          <div className={classes.mine} style={{ color: "#2196f3" }}>
            {content}
          </div>
        );
      case "2":
        return (
          <div className={classes.mine} style={{ color: "#009688" }}>
            {content}
          </div>
        );
      case "3":
        return (
          <div className={classes.mine} style={{ color: "#8bc34a" }}>
            {content}
          </div>
        );
      case "4":
        return (
          <div className={classes.mine} style={{ color: "#ff9800" }}>
            {content}
          </div>
        );
      case "5":
        return (
          <div className={classes.mine} style={{ color: "#795548" }}>
            {content}
          </div>
        );
      case "6":
        return (
          <div className={classes.mine} style={{ color: "#673ab7" }}>
            {content}
          </div>
        );
      case "7":
        return (
          <div className={classes.mine} style={{ color: "#f44336" }}>
            {content}
          </div>
        );
      case "8":
        return (
          <div className={classes.mine} style={{ color: "#607d8b" }}>
            {content}
          </div>
        );
      default:
        break;
    }
  };

  return (
    <div
      className={classes.container}
      onClick={() => onClick(index)}
      style={{ backgroundColor: click ? "#DDD" : "#FFF" }}
    >
      {click ? color(contentMap[index]) : ""}
    </div>
  );
};

export default Block;
