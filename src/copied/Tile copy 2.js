function Tile({ tileId, levels, SIZE }) {
  const TREES_ID = levels.level_1.trees_id
  let tileClassName = 'field tile'
  if (TREES_ID.includes(tileId)) tileClassName = 'tree tile'

  const handleClick = tile => {
    toggleTile(tile)
    checkColumn(tile)
    checkRow(tile)
  }

  const toggleTile = tile => {
    if (tile.target.className === 'tree tile') return
    if (tile.target.className === 'field tile')
      tile.target.className = 'grass tile'
    else if (tile.target.className === 'grass tile')
      tile.target.className = 'tent tile'
    else if (tile.target.className === 'tent tile')
      tile.target.className = 'field tile'
  }

  const checkColumn = tile => {
    const BASE_ID = tile.target.id % SIZE
    const TILES_CHECKABLE = []
    const TILES_CHECKED = []
    const TENT_TILES = []
    const TENTS_AMOUNT = Number(
      document.getElementById(`col${BASE_ID}`).innerText
    )

    for (let i = BASE_ID; i < SIZE * SIZE; i += SIZE) {
      const tileInspected = document.getElementById(i)
      // check how many tiles are checkable in the column
      if (tileInspected !== null && tileInspected.className !== 'tree tile')
        TILES_CHECKABLE.push(i)

      // check how many tiles were checked by player
      if (
        tileInspected !== null &&
        tileInspected.className !== 'tree tile' &&
        tileInspected.className !== 'field tile'
      )
        TILES_CHECKED.push(i)

      // check how many tents player placed
      if (tileInspected !== null && tileInspected.className === 'tent tile')
        TENT_TILES.push(i)
    }

    // change colors of column's tents number
    if (TILES_CHECKABLE.length !== TILES_CHECKED.length) {
      document.getElementById(`col${BASE_ID}`).style.color = 'black'
      return
    }
    if (TENT_TILES.length === TENTS_AMOUNT)
      document.getElementById(`col${BASE_ID}`).style.color = 'gray'
    else document.getElementById(`col${BASE_ID}`).style.color = 'red'
  }

  const checkRow = tile => {
    const BASE_ID = Math.floor(tile.target.id / SIZE) * SIZE
    const TILES_CHECKABLE = []
    const TILES_CHECKED = []
    const TENT_TILES = []
    const TENTS_AMOUNT = Number(
      document.getElementById(`row${BASE_ID}`).innerText
    )

    for (let i = BASE_ID; i < BASE_ID + SIZE; i++) {
      const tileInspected = document.getElementById(i)
      // check how many tiles are checkable in the column
      if (tileInspected !== null && tileInspected.className !== 'tree tile')
        TILES_CHECKABLE.push(i)

      // check how many tiles were checked by player
      if (
        tileInspected !== null &&
        tileInspected.className !== 'tree tile' &&
        tileInspected.className !== 'field tile'
      )
        TILES_CHECKED.push(i)

      // check how many tents player placed
      if (tileInspected !== null && tileInspected.className === 'tent tile')
        TENT_TILES.push(i)
    }
    console.log(TILES_CHECKABLE)
    console.log(TILES_CHECKED)
    console.log(TENT_TILES)

    // change colors of column's tents number
    if (TILES_CHECKABLE.length !== TILES_CHECKED.length) {
      document.getElementById(`row${BASE_ID}`).style.color = 'black'
      return
    }
    if (TENT_TILES.length === TENTS_AMOUNT)
      document.getElementById(`row${BASE_ID}`).style.color = 'gray'
    else document.getElementById(`row${BASE_ID}`).style.color = 'red'
  }

  return <div id={tileId} className={tileClassName} onClick={handleClick}></div>
}

export default Tile
