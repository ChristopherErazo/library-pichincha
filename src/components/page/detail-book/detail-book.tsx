import React, { useContext } from 'react'
import { StateContext } from '../../../context/use-context/use-context'
import { Navbar } from '../../molecules/navbar/navbar'
import { Book } from '../../organismos/book/book'

function DetailBook() {
  const { selectBook } = useContext(StateContext)
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <br />
      <Book dataBook={selectBook} />
    </div>
  )
}

export { DetailBook }
