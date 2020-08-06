import React from 'react'

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="header--container">
        <p className="header--text">Welcome to the subscribe application!</p>
        <div className="header--react-logo">
          <span className="header--react-logo--icon icon-react" />
          <small>Powered by React</small>
        </div>
      </div>
    </header>
  )
}

export default Header