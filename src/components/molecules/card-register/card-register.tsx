import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../atoms/Button/Button'
import { Input } from '../../atoms/input/input'
import { useRegister } from './use-register'
import '../card.css'

function CardRegister() {
  const formRef = useRef<any>()
  const {
    userName,
    setUserName,
    mail,
    setMail,
    password,
    setPassword,
    samePassword,
    setSamePassword,
    error,
    info,
    infoPassword
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
          error={error}
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
          error={error}
        />
        <Input
          type="password"
          id="pass"
          name="pass"
          placeholder="*****"
          label="Contraseña"
          value={password}
          onChange={passwordChange}
          errorPass={infoPassword}
          error={error}
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
          error={error}
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
          />
        </div>
      </section>
      <section className="card-footer">
        <Link to="/signin">Iniciar Sesion</Link>
        <Button color="primary" size="medium">
          Registrar
        </Button>
      </section>
    </form>
  )
}

export { CardRegister }
