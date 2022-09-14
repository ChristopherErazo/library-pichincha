import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../atoms/Button/Button'
import { Input } from '../../atoms/input/input'
import { Label } from '../../atoms/label/label'
import '../card.css'

function CardRegister() {
  const formRef = useRef<any>()
  return (
    <form ref={formRef}>
      <section className="card-body">
        <h2>Registrarse</h2>
        <hr />
        <Label forName="user" class="card-body--first-input">
          Nombre de usuario
        </Label>{' '}
        <br />
        <Input type="text" id="user" name="user" placeholder="Ej. makoto" /> <br />
        <Label forName="email">Correo electronico</Label> <br />
        <Input type="email" id="email" name="email" placeholder="Ej. name@example.com" /> <br />
        <Label forName="pass">Contraseña</Label> <br />
        <Input type="password" id="pass" name="pass" placeholder="*****" /> <br />
        <Label forName="samePass">Confirmar contraseña</Label> <br />
        <Input type="password" id="samePass" name="samePass" placeholder="*****" /> <br />
        <h2>Categorias</h2>
        <div className="card-body__categories">
          <Input type="checkbox" />
          <Label>Anime</Label> <br />
          <Input type="checkbox" />
          <Label>Ciencia Ficcion</Label> <br />
          <Input type="checkbox" />
          <Label>Novela</Label> <br />
          <Input type="checkbox" />
          <Label>Drama</Label> <br />
          <Input type="checkbox" />
          <Label>Inteligencia Artificial</Label> <br />
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
