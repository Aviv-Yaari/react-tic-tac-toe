const initBoard = () => {
  const board = [];
  for (let i = 0; i < 3; i++) {
    const line = [];
    for (let j = 0; j < 3; j++) {
      line.push(undefined);
    }
    board.push(line);
  }
  return board;
};

export default initBoard;
