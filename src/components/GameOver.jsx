function GameOver({ winner, onRestart }) {
  return (
    <div id='game-over'>
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It&apos;s a draw</p>}
      <span>
        <button onClick={onRestart}>Rematch!</button>
      </span>
    </div>
  )
}

export default GameOver
