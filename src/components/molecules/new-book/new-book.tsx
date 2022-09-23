import React from 'react'
import { Link } from 'react-router-dom'
import './new-book.scss'

function NewBook() {
  return (
    <section className="new-book">
      <h2>Tus Libros</h2>
      <Link className="new-book__button" to="/newbook">
        <b>Agregar Libro</b>
      </Link>
    </section>
  )
}

export { NewBook }
