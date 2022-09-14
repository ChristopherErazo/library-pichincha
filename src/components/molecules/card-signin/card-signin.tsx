import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../atoms/Button/Button'
import { Input } from '../../atoms/input/input'
import { Label } from '../../atoms/label/label'
import '../card.css'

function CardSignIn() {
  const formRef = useRef<any>()
  return (
    <form ref={formRef}>
      <section className="card-body">
        <h2>Inisiar Sesion</h2>
        <hr />
        <Label forName="email" class="card-body--first-input">
          Correo electronico
        </Label>{' '}
        <br />
        <Input type="email" id="email" name="email" placeholder="Ej. name@example.com" /> <br />
        <Label forName="pass">Contraseña</Label> <br />
        <Input type="password" id="pass" name="pass" placeholder="*****" /> <br />
      </section>
      <section className="card-footer">
        <Link to="/register">Registrate aqui</Link>
        <Button color="primary" size="medium">
          Iniciar Sesion
        </Button>
      </section>
    </form>
  )
}

export { CardSignIn }
