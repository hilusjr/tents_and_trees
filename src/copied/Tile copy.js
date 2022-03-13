import { useState } from 'react'

function Tile({ className, tileId, tentsAmount, setTentsAmount, SIZE }) {
  const [state, setState] = useState('field')
  const handleClick = tile => {
    if (tile.target.className === 'tree tile') return
    if (tile.target.dataset.state === 'field') {
      setState('grass')
      return
    }
    if (tile.target.dataset.state === 'grass') {
      setState('tent')
      setTentsAmount(tentsAmount + 1)
      return
    }
    if (tile.target.dataset.state === 'tent') {
      setState('field')
      setTentsAmount(tentsAmount - 1)
      return
    }
  }

  const checkColumn = tile => {
    if (tile.target.className === 'tree tile') return
    const BASE_ID = tile.target.id % SIZE
    const LEVEL_COLUMN_TENTS = Number(
      document.getElementById(`num${BASE_ID}`).innerText
    )
    const PLAYER_COLUMN_TENTS = []
    if (tile.target.dataset.state === 'grass')
      PLAYER_COLUMN_TENTS.push(Number(tile.target.id))

    const COLUMN_CHECKABLE = []
    let COLUMN_CHECKED = []
    let currentlyInspected = BASE_ID

    for (let i = 0; i < SIZE * SIZE; i++) {
      const tileInspected = document.getElementById(currentlyInspected)
      if (tileInspected !== null && tileInspected.className !== 'tree tile') {
        COLUMN_CHECKABLE.push(currentlyInspected)
      }

      if (tileInspected !== null && tileInspected.dataset.state !== 'field') {
        COLUMN_CHECKED.push(currentlyInspected)
      }

      if (tileInspected !== null && tileInspected.dataset.state === 'tent') {
        PLAYER_COLUMN_TENTS.push(currentlyInspected)
      }

      currentlyInspected += SIZE
    }
    // console.log(PLAYER_COLUMN_TENTS)
    // console.log(tile.target.dataset.state)
    if (tile.target.dataset.state === 'tent') {
      PLAYER_COLUMN_TENTS.filter(elem => {
        return elem !== Number(tile.target.id)
      })
      console.log(PLAYER_COLUMN_TENTS)
    }
    console.log(PLAYER_COLUMN_TENTS)
    // console.log(PLAYER_COLUMN_TENTS.length)
    COLUMN_CHECKED.push(Number(tile.target.id))
    COLUMN_CHECKED = [...new Set(COLUMN_CHECKED)]
    if (COLUMN_CHECKED.length < COLUMN_CHECKABLE.length) {
      document.getElementById(`num${BASE_ID}`).style.color = 'black'
      return
    }
    document.getElementById(`num${BASE_ID}`).style.color = 'gray'
  }

  return (
    <div
      id={tileId}
      className={`${className} tile`}
      onClick={tile => {
        handleClick(tile)
        checkColumn(tile)
      }}
      data-state={state}
    ></div>
  )
}

export default Tile
