import React from 'react'

function Loader(): JSX.Element {
  return (
    <div className="lds-ring">
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}

export default Loader