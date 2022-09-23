import { render, screen, fireEvent } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'
import { useRegister } from './use-register'
import { userInput } from '../../../../utils/texts'

describe('Test custom Hook useRegister', () => {
  it('Should  change userName if value is not empty, error and info', async () => {
    const { result } = renderHook(() => useRegister())
    act(() => {
      result.current.action.onChangeUserName({ target: { value: 'User name' } })
    })
    expect(result.current.values.name.value).toBe('User name')
    expect(result.current.values.name.isError).toBeFalsy()
    expect(result.current.values.name.info).toBeUndefined()
  })
  it('Should  change userName if value is empty, error and info', async () => {
    const { result } = renderHook(() => useRegister())
    act(() => {
      result.current.action.onChangeUserName({ target: { value: '' } })
    })
    /*expect(result.current.values.name.value).toBe('')
    expect(result.current.values.name.isError).toBeTruthy()
    expect(result.current.values.name.info).toBe(userInput.errorMessage?.empty)*/
    expect(result.current.values.name).toEqual({
      value: '',
      isError: true,
      info: userInput.errorMessage?.empty
    })
  })
})
