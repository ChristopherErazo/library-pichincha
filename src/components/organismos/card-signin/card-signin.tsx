import React, { useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../atoms/Button/Button'
import { Input } from '../../atoms/input/input'
import { useSignIn } from './use-signin/use-signin'
import { emailInput, passwordInput } from '../../../utils/texts'
import '../card.scss'

function CardSignIn() {
  //const [data, setData] = React.useState<string | null>(5)
  const formRef = useRef<any>()
  const { action, values } = useSignIn()
  const navigate = useNavigate()
  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify({}))
  }, [])
  const redirect = () => {
    localStorage.setItem('categories', JSON.stringify({}))
    return navigate('/signin')
  }
  return (
    <form ref={formRef}>
      <section className="card-body">
        <h2>Iniciar Sesion</h2>
        <hr />
        <Input
          type="email"
          id={emailInput.id}
          name={emailInput.name}
          placeholder={emailInput.placeholder}
          label={emailInput.label}
          value={values.mail.value}
          onChange={action.onChangeEmail}
          info={values.mail.info}
          error={values.mail.isError}
        />

        <Input
          type="password"
          id={passwordInput.id}
          name={passwordInput.name}
          placeholder={passwordInput.placeholder}
          label={passwordInput.label}
          value={values.password.value}
          onChange={action.onChangePassword}
          info={values.password.info}
          error={values.password.isError}
        />
        <br />
      </section>
      <section className="card-footer">
        <Link to="/register">Registrate aqui</Link>
        <Button
          color="primary"
          size="medium"
          onClick={action.loginProcess}
          disabled={values.active}
        >
          Iniciar Sesion
        </Button>
      </section>
    </form>
  )
}

export { CardSignIn }
