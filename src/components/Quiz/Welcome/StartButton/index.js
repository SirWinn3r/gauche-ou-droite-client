import React from 'react'

export default ({ onClickFn }) => (
  <div>
    <button onClick={e => onClickFn()}>Test me, bro!</button>
  </div>
)
