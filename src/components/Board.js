import { Fragment, useContext } from "react";
import "./Board.css";
import { GameContext } from "../store/game-context";
import Square from "./Square";

const Board = () => {
  const context = useContext(GameContext);
  const board = context.board;
  return (
    <Fragment>
      <div className="board">
        <div className="row">
          {board[0].map((square, index) => (
            <Square key={0 + index} row={0} col={index} value={square} />
          ))}
        </div>
        <div className="row">
          {board[1].map((square, index) => (
            <Square key={10 + index} row={1} col={index} value={square} />
          ))}
        </div>
        <div className="row">
          {board[2].map((square, index) => (
            <Square key={20 + index} row={2} col={index} value={square} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Board;
