import { useState } from 'react'

function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName)
  const [isEditing, setisEditing] = useState(false)

  const handleEditClick = () => {
    setisEditing((isEditing) => !isEditing)
    onChangeName(symbol, playerName)
  }

  const handleChange = (event) => {
    setPlayerName(event.target.value)
  }

  return (
    <li
      onClick={handleEditClick}
      style={isEditing ? { outline: '1px solid gray' } : {}}
      className={isActive ? 'active' : undefined}
    >
      {!isEditing && <span className='player-name'>{playerName}</span>}
      {isEditing && (
        <input
          type='text'
          required
          value={playerName}
          onChange={handleChange}
          autoFocus
        />
      )}
      <span className='player-symbol'>{symbol}</span>
    </li>
  )
}

export default Player
