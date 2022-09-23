import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../atoms/Button/Button'
import { Navbar } from '../../molecules/navbar/navbar'
import { NewBook } from '../../molecules/new-book/new-book'
import { ListBook } from '../../organismos/list-book/list-book'
import './home.scss'
import { useHome } from './use-home/use-home'

function Home() {
  const navigate = useNavigate()
  const accessToken = sessionStorage.getItem('token')
  const { books } = useHome()
  useEffect(() => {
    if (!accessToken) {
      navigate('/signin')
    }
  }, [])

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <NewBook />
        <ListBook books={books} />
      </main>
    </div>
  )
}
export { Home }
