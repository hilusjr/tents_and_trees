import { useState } from 'react'
import Tile from '../components/Tile'
import Number from '../components/Number'
import level from '../levels/level_1.json'

function Board() {
  const [tentsAmount, setTentsAmount] = useState(0)
  const SIZE = level.info.size
  const gridSize = {
    gridTemplateColumns: `repeat(${SIZE}, 1fr)`,
    gridTemplateRows: `repeat(${SIZE}, 1fr)`,
  }
  return (
    <div className="board" style={gridSize}>
      <RowNum />
      <ColNum />
      {level.tiles.map(tile => (
        <Tile
          key={tile.id}
          tileId={tile.id}
          className={tile.className}
          tentsAmount={tentsAmount}
          setTentsAmount={setTentsAmount}
          SIZE={SIZE}
        />
      ))}
    </div>
  )
}

export default Board

export function RowNum() {
  return (
    <div className="row num">
      {level.info.row_numbers.map((number, i) => (
        <Number key={i} numId={i} number={number} />
      ))}
    </div>
  )
}

export function ColNum() {
  return (
    <div className="col num">
      {level.info.column_numbers.map((number, i) => (
        <Number key={i} numId={i} number={number} />
      ))}
    </div>
  )
}
