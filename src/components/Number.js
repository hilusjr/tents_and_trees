import React from 'react'

function Number({ numId, number }) {
  return (
    <div id={numId} className="number">
      {number}
    </div>
  )
}

export default Number
