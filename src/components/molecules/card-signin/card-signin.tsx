import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../atoms/Button/Button'
import { Input } from '../../atoms/input/input'
import '../card.css'

function CardSignIn() {
  //const [data, setData] = React.useState<string | null>(5)
  const formRef = useRef<any>()
  return (
    <form ref={formRef}>
      <section className="card-body">
        <h2>Iniciar Sesion</h2>
        <hr />
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Ej. name@example.com"
          label="Correo electronico"
        />
        <Input type="password" id="pass" name="pass" placeholder="*****" label="Contraseña" />
        <br />
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
