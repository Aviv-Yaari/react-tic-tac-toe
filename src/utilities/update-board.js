const updateBoard = (oldBoard, value, i, j) => {
  const newBoard = [];
  for (const row of oldBoard) {
    const newRow = [...row];
    newBoard.push(newRow);
  }
  newBoard[i][j] = value;
  return newBoard;
};

export default updateBoard;
