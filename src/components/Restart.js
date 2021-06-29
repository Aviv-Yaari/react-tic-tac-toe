import { GameContext } from "../store/game-context";
import { useContext } from "react";
import initBoard from "../utilities/init-board";
const Restart = () => {
  const context = useContext(GameContext);
  const restartHandler = () => {
    context.replaceBoard(initBoard());
  };
  return <button onClick={restartHandler}>Restart</button>;
};

export default Restart;
