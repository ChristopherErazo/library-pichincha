import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { StateContext } from '../../../context/use-context/use-context'
import { Books } from '../../../services/user.service'
import { Input } from '../../atoms/input/input'
import './list-book.scss'

type Props = {
  books: any
}

function ListBook({ books }: Props) {
  const navigate = useNavigate()
  const { selectBook, setSelectBook } = useContext(StateContext)
  const onClickSelectBook = (bookSelected: Books) => {
    setSelectBook(bookSelected)
    navigate(`/book/${bookSelected.id}`)
  }

  return (
    <section className="books">
      <div className="books__controls">
        <Input type="text" id="book" name="book" placeholder="Ej. Angular, React" />
        <select name="categories" id="categories">
          <option value="Anime">Anime</option>
          <option value="Drama">Drama</option>
          <option value="Comedia">Comedia</option>
          <option value="Educativo">Educativo</option>
          <option value="Ciencia">Ciencia</option>
        </select>
      </div>
      <div className="books__catalog">
        {books &&
          books.map((book: Books) => (
            <div
              key={book.id}
              className="books__catalog__card"
              onClick={() =>
                onClickSelectBook({
                  id: book.id,
                  public: book.public,
                  author: book.author,
                  resume: book.resume,
                  title: book.title,
                  subtitle: book.subtitle,
                  image: book.image,
                  url: book.url,
                  category: book.category,
                  userRegister: book.userRegister
                })
              }
            >
              <img src={book.image} alt="Libro" />
            </div>
          ))}
      </div>
    </section>
  )
}

export { ListBook }
