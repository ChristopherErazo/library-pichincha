import { render, screen, fireEvent } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'
import { useSignIn } from './use-signin'
import { userInput } from '../../../../utils/texts'
import { BrowserRouter } from 'react-router-dom'
import { UserService } from '../../../../services/user.service'

describe('Test custom Hook useSignIn', () => {
  const renderCustomHook = () =>
    renderHook(() => useSignIn(), {
      wrapper: ({ children }: { children: JSX.Element }) => (
        <BrowserRouter>{children}</BrowserRouter>
      )
    })

  it.only('Should  change  userState = false if user do not exists', async () => {
    jest.spyOn(UserService, 'existUsers').mockResolvedValue({ exists: false })

    const { result, waitForNextUpdate } = renderCustomHook()
    act(() => {
      result.current.action.onChangeEmail({ target: { value: 'User Email' } })
    })
    //await waitForNextUpdate()
    expect(result.current.values.mail.value).toBe('User Email')
    expect(result.current.values.mail.isError).toBeFalsy()
    expect(result.current.values.mail.info).toBeUndefined()
    expect(result.current.values.user).toBeFalsy()
  })
  it('Should  change  userState = true  if user exists', async () => {
    const { result } = renderCustomHook()
    act(() => {
      result.current.action.onChangeEmail({ target: { value: 'ksuarez' } })
    })
    /*expect(result.current.values.mail.value).toBe('')
    expect(result.current.values.mail.isError).toBeTruthy()
    expect(result.current.values.mail.info).toBe(userInput.errorMessage?.empty)*/
    expect(result.current.values.mail).toEqual({
      value: 'ksuarez',
      isError: true,
      info: userInput.errorMessage?.empty
    })
    expect(result.current.values.user).toBeTruthy()
  })
})
