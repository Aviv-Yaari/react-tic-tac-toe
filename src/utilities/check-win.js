const checkWin = (board) => {
  const checkRows = board.find(
    (row) => row[0] === row[1] && row[1] === row[2] && row[0] !== undefined
  );
  if (checkRows) return true;
  const checkCols = board.find(
    (row, index) =>
      board[0][index] === board[1][index] &&
      board[1][index] === board[2][index] &&
      board[0][index] !== undefined
  );
  if (checkCols) return true;
  const checkDiagonals =
    (board[0][0] === board[1][1] && board[1][1] === board[2][2]) ||
    (board[0][2] === board[1][1] && board[1][1] === board[2][0]);

  if (checkDiagonals && board[1][1] !== undefined) return true;
  return false;
};

export default checkWin;
