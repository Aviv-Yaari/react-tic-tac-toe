import React, { useEffect, useState } from "react";
import initBoard from "../utilities/init-board";
import updateBoard from "../utilities/update-board";
import checkWin from "../utilities/check-win";

export const GameContext = React.createContext({
  p1sTurn: true,
  board: [],
  history: [],
  addMove: () => {},
  replaceBoard: () => {},
  isOver: false,
  checkWin: () => {},
});

const GameContextProvider = (props) => {
  const [p1sTurn, setP1sTurn] = useState(true);
  const [board, setBoard] = useState(initBoard());
  const [history, setHistory] = useState([]);
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    setIsOver(checkWin(board));
  }, [board]);

  const addMove = (value, i, j) => {
    setP1sTurn(!p1sTurn);
    setBoard((oldBoard) => {
      const newBoard = updateBoard(oldBoard, value, i, j);
      setHistory((history) => [...history, newBoard]);
      return newBoard;
    });
  };

  const replaceBoard = (newBoard, moveIndex) => {
    setP1sTurn(moveIndex % 2 !== 0); // player1 has the even moves, and player2 has the odd moves
    setBoard((oldBoard) => [...newBoard]);
    setHistory((history) => history.slice(0, moveIndex + 1));
  };

  return (
    <GameContext.Provider
      value={{
        p1sTurn,
        board,
        history,
        addMove,
        replaceBoard,
        isOver,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
export default GameContextProvider;
