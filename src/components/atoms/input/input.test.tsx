import { render, screen } from '@testing-library/react'
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
})
