import React, { useContext, useEffect, useState } from 'react'
import { StateContext } from '../../../../context/use-context/use-context'
import { UserService, Books } from '../../../../services/user.service'

function useHome() {
  const { token, user } = useContext(StateContext)
  const [books, setBooks] = useState<any>()

  const getBooksUser = async () => {
    console.log(token)
    const result = await UserService.userBooks(token)
    console.log(result.author)
    setBooks(result)
  }
  useEffect(() => {
    getBooksUser()
  }, [])

  return {
    books
  }
}

export { useHome }
