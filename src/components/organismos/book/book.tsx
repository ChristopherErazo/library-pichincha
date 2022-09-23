import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../atoms/Button/Button'
import './book.scss'

type Props = {
  dataBook: any
}

function Book({ dataBook }: Props) {
  const navigate = useNavigate()
  const goBack = () => {
    navigate('/')
  }
  return (
    <section className="detail">
      <div className="detail__controls">
        <Button color="secondary" size="medium" onClick={goBack}>
          Volver
        </Button>
        <Button color="primary" size="medium">
          Editar
        </Button>
      </div>
      <div className="detail__book">
        <div className="detail__book__card">
          <img src={dataBook.image} alt="Libro" />
        </div>
        <article className="detail__book__article">
          <div className="detail__book__article__data">
            <p className="detail__book__article--title">
              <b>Titulo:</b>
            </p>
            <p>{dataBook.title}</p>
          </div>
          <div className="detail__book__article__data">
            <p className="detail__book__article--title">
              <b>Autor:</b>
            </p>
            <p>{dataBook.author}</p>
          </div>
          <div className="detail__book__article__data">
            <p className="detail__book__article--title">
              <b>URL:</b>
            </p>
            <a href={dataBook.url}>{dataBook.url}</a>
          </div>
          <div className="detail__book__article__data">
            <p className="detail__book__article--title">
              <b>Resumen:</b>
            </p>
            <p>{dataBook.resume}</p>
          </div>
          <div className="detail__book__article__data">
            <p className="detail__book__article--title">
              <b>Categorias:</b>
            </p>
            <p>{dataBook.category}</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export { Book }
