import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { CardSignIn } from './card-signin'

describe('Input', () => {
  it('Should find mail input', () => {
    render(
      <BrowserRouter>
        <CardSignIn />
      </BrowserRouter>
    )
    const labeluser = screen.getByLabelText('Correo electronico')
    expect(labeluser).toBeInTheDocument()
    const inputmail = screen.getByPlaceholderText('Ej. name@example.com')
    expect(inputmail).toBeInTheDocument()

    const labelPassword = screen.getByLabelText('Contraseña')
    expect(labelPassword).toBeInTheDocument()
    const inputPassword = screen.getByPlaceholderText('*****')
    expect(inputPassword).toBeInTheDocument()
  })
})
