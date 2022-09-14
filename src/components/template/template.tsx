import React from 'react'
import './template.css'

type Props = { children: JSX.Element }

function Layout({ children }: Props) {
  return (
    <>
      <main className="main-container">{children}</main>
    </>
  )
}

export { Layout }
