import React from 'react'
import Header from './Header'

interface LayoutProps {
  children: JSX.Element[] | JSX.Element
}

function Layout(props: LayoutProps): JSX.Element {
  return (
    <main className="main-layout">
      <Header />
      { props.children }
    </main>
  )
}

export default Layout