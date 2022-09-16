import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../atoms/Button/Button'
import { Input } from '../../atoms/input/input'
import { useRegister } from './use-register'
import '../card.css'

function CardRegister() {
  const formRef = useRef<any>()
  let categoriesSelected: any = {}
  let item
  const {
    userName,
    setUserName,
    mail,
    setMail,
    password,
    setPassword,
    samePassword,
    setSamePassword,
    setCategories,
    error,
    info,
    active
  } = useRegister()

  const userNameChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setUserName(event.target.value)
  }
  const mailChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setMail(event.target.value)
  }
  const passwordChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setPassword(event.target.value)
  }
  const samePasswordChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setSamePassword(event.target.value)
  }

  function getLocalStorage() {
    item = localStorage.getItem('categories')

    if (item) {
      categoriesSelected = JSON.parse(item)
    } else {
      categoriesSelected = {}
    }

    return categoriesSelected
  }

  const checkedChange = (event: {
    target: { checked: any; value: React.SetStateAction<string> }
  }) => {
    if (event.target.checked) {
      if (!getLocalStorage()[event.target.value.toString()]) {
        categoriesSelected[event.target.value.toString()] = event.target.value
      }
      localStorage.setItem('categories', JSON.stringify(categoriesSelected))
    } else {
      if (getLocalStorage()[event.target.value.toString()]) {
        categoriesSelected[event.target.value.toString()] = undefined
      }
      localStorage.setItem('categories', JSON.stringify(categoriesSelected))
    }
    setCategories(localStorage.getItem('categories'))
  }

  return (
    <form ref={formRef}>
      <section className="card-body">
        <h2>Registrarse</h2>
        <hr />
        <Input
          type="text"
          id="user"
          name="user"
          placeholder="Ej. makoto"
          label="Nombre de usuario"
          value={userName}
          onChange={userNameChange}
          info={info[0]}
          error={error[0]}
        />
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Ej. name@example.com"
          label="Correo electronico"
          value={mail}
          onChange={mailChange}
          info={info[1]}
          error={error[1]}
        />
        <Input
          type="password"
          id="pass"
          name="pass"
          placeholder="*****"
          label="Contraseña"
          value={password}
          onChange={passwordChange}
          info={info[2]}
          error={error[2]}
        />
        <Input
          type="password"
          id="samePass"
          name="samePass"
          placeholder="*****"
          label="Confirmar contraseña"
          value={samePassword}
          onChange={samePasswordChange}
          info={info[3]}
          error={error[3]}
        />
        <h2>Categorias</h2>
        <div className="card-body__categories">
          <Input
            type="checkbox"
            label_checkbox={[
              'Anime',
              'Ciencia Ficcion',
              'Novela',
              'Drama',
              'Inteligencia Artificial'
            ]}
            onChange={checkedChange}
            info={info[4]}
            error={error[4]}
          />
        </div>
      </section>
      <section className="card-footer">
        <Link to="/signin">Iniciar Sesion</Link>
        <Button color="primary" size="medium" disabled={active}>
          Registrar
        </Button>
      </section>
    </form>
  )
}

export { CardRegister }
