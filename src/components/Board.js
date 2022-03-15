import Tile from './Tile'
import Number from './Number'
import levels from '../json/levels.json'

function Board() {
  const SIZE = levels.level_2.column_numbers.length
  const tiles = []
  for (let i = 0; i < SIZE * SIZE; i++) {
    tiles.push(i)
  }
  const gridSize = {
    gridTemplateColumns: `repeat(${SIZE}, 1fr)`,
    gridTemplateRows: `repeat(${SIZE}, 1fr)`,
  }
  return (
    <div className="board" style={gridSize}>
      <RowNumbers SIZE={SIZE} />
      <ColNumbers />
      {tiles.map(i => (
        <Tile key={i} tileId={i} levels={levels} SIZE={SIZE} />
      ))}
    </div>
  )
}

export default Board

export function ColNumbers() {
  return (
    <div className="col num">
      {levels.level_2.column_numbers.map((number, i) => (
        <Number key={i} numId={`col${i}`} number={number} />
      ))}
    </div>
  )
}

export function RowNumbers({ SIZE }) {
  return (
    <div className="row num">
      {levels.level_2.row_numbers.map((number, i) => (
        <Number key={i} numId={`row${i * SIZE}`} number={number} />
      ))}
    </div>
  )
}
