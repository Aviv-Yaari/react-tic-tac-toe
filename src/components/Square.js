import { useContext } from "react";
import classes from "./Square.module.css";
import { GameContext } from "../store/game-context";

const Square = (props) => {
  const context = useContext(GameContext);
  const locked = context.board[props.row][props.col] === undefined;
  const clickHandler = () => {
    if (!locked || context.isOver) {
      return;
    }
    const calcValue = context.p1sTurn ? "x" : "o";
    context.addMove(calcValue, props.row, props.col);
  };

  return (
    <div className={classes.square} onClick={clickHandler}>
      <span className={classes.value}>
        {context.board[props.row][props.col]}
      </span>
    </div>
  );
};

export default Square;
