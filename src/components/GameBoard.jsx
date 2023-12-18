function GameBoard({ onSelectSquare, board }) {

  return (
    <ol id='game-board'>
      {board.map((row, rowIndex) => (
        <li key={rowIndex} className='row'>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  className='player-button'
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}

export default GameBoard
