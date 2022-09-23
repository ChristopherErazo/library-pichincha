import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { CardRegister } from './card-register'

describe('Input', () => {
  it('Should find mail input', () => {
    render(
      <BrowserRouter>
        <CardRegister />
      </BrowserRouter>
    )
    const labeluser = screen.getByLabelText('Nombre de usuario')
    expect(labeluser).toBeInTheDocument()
    const inputmail = screen.getByPlaceholderText('Ej. name@example.com')
    expect(inputmail).toBeInTheDocument()
    const inputFound = screen.getByPlaceholderText('Ej. makoto')
    //siempre tener un expect
    expect(inputFound).toBeInTheDocument()
  })
})
