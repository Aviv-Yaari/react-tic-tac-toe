import Board from "./components/Board";
import "./App.css";
import Moves from "./components/Moves";
import { GameContext } from "./store/game-context";
import { useContext, useEffect, useState } from "react";
import Restart from "./components/Restart";

function App() {
  const context = useContext(GameContext);
  const turn = context.p1sTurn ? "Player 1" : "Player 2";
  const winner = turn === "Player 1" ? "Player 2" : "Player 1";
  const [p1score, setP1Score] = useState(
    parseInt(localStorage.getItem("Player 1"))
  );
  const [p2score, setP2Score] = useState(
    parseInt(localStorage.getItem("Player 2"))
  );

  useEffect(() => {
    if (context.isOver) {
      if (winner === "Player 1") {
        setP1Score((p1score) => p1score + 1);
      } else {
        setP2Score((p2score) => p2score + 1);
      }
    }
  }, [context.isOver, winner]);

  useEffect(() => {
    localStorage.setItem("Player 1", p1score);
    localStorage.setItem("Player 2", p2score);
  }, [p1score, p2score]);

  return (
    <main style={{ textAlign: "center" }}>
      <h1>Tic-Tac-Toe</h1>
      <p>
        P1 SCORE: {p1score}, P2 SCORE: {p2score}
      </p>
      {!context.isOver && <h2>{turn}'s turn</h2>}
      <h2>{context.isOver && `GAME OVER! ${winner} is the winner!`}</h2>
      <Board />
      <Restart />
      <Moves />
    </main>
  );
}

export default App;
