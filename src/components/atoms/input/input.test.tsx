import { render, screen, fireEvent } from '@testing-library/react'
import { Input } from './input'

describe('Input', () => {
  it('Se muestra el input', async () => {
    const { container } = render(<Input />)
    expect(container).toBeDefined()
  })

  it('Should find input by placeholder', () => {
    render(<Input placeholder="Test PlaceHolder" />)
    const inputFound = screen.getByPlaceholderText('Test PlaceHolder')
    //siempre tener un expect
    expect(inputFound).toBeInTheDocument()
  })

  /*it('Should find Label Nombre de Usuario', () => {
    render(<Input label="Nombre de usuario" />)
    const labelFound = screen.getByLabelText('Nombre de usuario')
    expect(labelFound).toBeInTheDocument()
  })

  it('Should find user input', () => {
    render(<Input placeholder="Ej. makoto" />)
    const inputFound = screen.getByPlaceholderText('Ej. makoto')
    //siempre tener un expect
    expect(inputFound).toBeInTheDocument()
  })

  it('Should find Label Correo electronico', () => {
    render(<Input label="Correo electronico" />)
    const labelFound = screen.getByLabelText('Correo electronico')
    expect(labelFound).toBeInTheDocument()
  })

  it('Should find mail input', () => {
    render(<Input placeholder="Ej. name@example.com" />)
    const inputFound = screen.getByPlaceholderText('Ej. name@example.com')
    expect(inputFound).toBeInTheDocument()
  })

  it('Should find type input', () => {
    render(<Input placeholder="Ej. name@example.com" />)
    const inputFound = screen.getByPlaceholderText('Ej. name@example.com')
    expect(inputFound).toBeInTheDocument()
  })*/

  it('Should eject onchange function', () => {
    const mockFunction = jest.fn()
    render(<Input placeholder="Ej. name@example.com" onChange={mockFunction} />)
    const inputFound = screen.getByPlaceholderText('Ej. name@example.com')
    fireEvent.change(inputFound, { target: { value: 'chis@gmail.com' } })
    expect(mockFunction).toBeCalled()
  })
})
