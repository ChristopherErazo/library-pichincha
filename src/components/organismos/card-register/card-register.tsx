import React, { useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../atoms/Button/Button'
import { Input } from '../../atoms/input/input'
import { useRegister } from './use-register/use-register'
import {
  userInput,
  emailInput,
  passwordInput,
  samePasswordInput,
  checkBoxInput
} from '../../../utils/texts'
import '../card.scss'

function CardRegister() {
  const formRef = useRef<any>()
  const { action, values } = useRegister()
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
        <h2>Registrarse</h2>
        <hr />
        <Input
          type="text"
          id={userInput.id}
          name={userInput.name}
          placeholder={userInput.placeholder}
          label={userInput.label}
          value={values.name.value}
          onChange={action.onChangeUserName}
          info={values.name.info}
          error={values.name.isError}
        />

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
        <Input
          type="password"
          id={samePasswordInput.id}
          name={samePasswordInput.name}
          placeholder={samePasswordInput.placeholder}
          label={samePasswordInput.label}
          value={values.samePassword.value}
          onChange={action.onChangeSamePassword}
          info={values.samePassword.info}
          error={values.samePassword.isError}
        />
        <h2>Categorias</h2>
        <div className="card-body__categories">
          <Input
            type="checkbox"
            label_checkbox={checkBoxInput.labelCheckBox}
            onChange={action.onChangesCheckbox}
            info={values.options.info}
            error={values.options.isError}
          />
        </div>
      </section>
      <section className="card-footer">
        <Link to="/signin">Iniciar Sesion</Link>
        <Button color="primary" size="medium" disabled={values.active} onClick={redirect}>
          Registrar
        </Button>
      </section>
    </form>
  )
}

export { CardRegister }
