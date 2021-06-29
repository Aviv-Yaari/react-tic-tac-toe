import { Fragment, useContext } from "react";
import { GameContext } from "../store/game-context";

const Move = (props) => {
  const context = useContext(GameContext);
  const clickHandler = () => {
    context.replaceBoard(props.move, props.index);
  };
  return (
    <Fragment>
      <button onClick={clickHandler}>{props.index}</button>
    </Fragment>
  );
};

export default Move;
