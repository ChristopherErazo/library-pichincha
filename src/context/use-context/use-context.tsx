import React, { createContext, useState } from 'react'
import { Books } from '../../services/user.service'

type GlobalContent = {
  token: string | undefined
  user: string | undefined
  selectBook: Books | undefined
  setSelectBook: (c: Books) => void
}
const StateContext = createContext<GlobalContent>({
  token: '',
  user: '',
  selectBook: {
    id: '',
    public: false,
    author: '',
    resume: '',
    title: '',
    subtitle: '',
    image: '',
    url: '',
    category: [],
    userRegister: ''
  },
  setSelectBook: () => {}
})
type Props = { children: JSX.Element }

function DataProvider({ children }: Props) {
  //const [token, setToken] = useState<any>('')
  //const [user, setUser] = useState<any>('')
  const token = sessionStorage.getItem('token')?.toString()
  const user = sessionStorage.getItem('user')?.toString()
  const [selectBook, setSelectBook] = useState<Books>()
  //setToken(authToken)
  //setUser(userName)

  return (
    <StateContext.Provider
      value={{
        token,
        user,
        selectBook,
        setSelectBook
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export { StateContext, DataProvider }
