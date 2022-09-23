import React, { useContext, useEffect } from 'react'
import { StateContext } from '../../../context/use-context/use-context'
import './navbar.scss'

function Navbar() {
  const { token, user } = useContext(StateContext)
  return (
    <nav className="navbar">
      {user && (
        <>
          <h2>Biblioteca</h2>
          <p>{user}</p>
        </>
      )}
    </nav>
  )
}

export { Navbar }
