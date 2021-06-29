import { Fragment, useContext } from "react";
import { GameContext } from "../store/game-context";
import Move from "./Move";
const Moves = () => {
  const context = useContext(GameContext);
  return (
    <div>
      <h2>Moves History:</h2>
      {context.history.map((move, index) => (
        <Move key={index} move={move} index={index} />
      ))}
    </div>
  );
};

export default Moves;
