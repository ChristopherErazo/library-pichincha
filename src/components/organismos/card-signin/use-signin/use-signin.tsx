import React, { useState, useEffect } from 'react'
import { emailInput, passwordInput } from '../../../../utils/texts'
import { UserService } from '../../../../services/user.service'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

interface InputValue {
  value?: string
  isError?: boolean
  info?: string
}

function useSignIn() {
  const [mail, setMail] = useState<InputValue>({ value: '' })
  const [password, setPassword] = useState<InputValue>({ value: '' })
  const [user, setUser] = useState<boolean>(false)
  const [infoError, setInfoError] = useState<boolean>(false)
  const [active, setActive] = useState<boolean>(true)
  const navigate = useNavigate()

  const verifyUser = (isExistsUser: boolean) => {
    const newEmailValue: InputValue = {
      value: mail.value,
      isError: !isExistsUser,
      info: !isExistsUser ? emailInput.errorMessage?.existsUser : undefined
    }
    setMail(newEmailValue)
  }

  const getExistUser = async (userNameValue: string | undefined) => {
    try {
      //console.log(userNameValue)
      const result = await UserService.existUsers(userNameValue)
      const isExists = result.exists
      verifyUser(isExists)
      setUser(isExists)
    } catch (error) {
      verifyUser(false)
    }
  }

  const login = async (value: { username: string; password: string }) => {
    try {
      const responseLoginUser = await UserService.loginUsers(value)
      sessionStorage.setItem('token', responseLoginUser.access_token)
      sessionStorage.setItem('user', responseLoginUser.user.username)
      navigate('/')
    } catch (error) {
      //console.log('1234')
      const newPassword: InputValue = {
        isError: true,
        info: 'Contraseña incorrecta'
      }
      setPassword(newPassword)
    }
  }

  function validateEmptyStrings(anyValue = '') {
    return anyValue.length === 0
  }

  // Funcion Validar Correo
  const validateEmail = (anyValue: string | undefined): InputValue => {
    if (validateEmptyStrings(anyValue)) {
      return {
        isError: true,
        info: emailInput.errorMessage?.empty
      }
    }

    return {
      isError: false,
      info: undefined
    }
  }

  //Funcion Validar Password
  const validatePassword = (anyValue: string): InputValue => {
    //console.log(anyValue)
    if (validateEmptyStrings(anyValue)) {
      return {
        isError: true,
        info: passwordInput.errorMessage?.empty
      }
    }

    return {
      isError: false,
      info: undefined
    }
  }

  const onChangeEmail = (event: { target: { value: string } }) => {
    //const result = validateEmail(event.target.value.toString())
    const newEmailValue: InputValue = {
      value: event.target.value.toString()
    }
    setMail(newEmailValue)
  }

  const onChangePassword = (event: { target: { value: string } }) => {
    const result = validatePassword(event.target.value.toString())
    const newPassword: InputValue = {
      value: event.target.value.toString(),
      isError: result.isError,
      info: result.info
    }
    setPassword(newPassword)
  }

  const loginProcess = () => {
    verifyUser(user)
    if (user) {
      login({
        username: mail.value!,
        password: password.value!
      })
    }
  }

  useEffect(() => {
    //console.log(name.isError, mail.isError, password.isError, samePassword.isError, options.isError)
    if (
      mail.isError ||
      mail.isError === undefined ||
      password.isError ||
      password.isError === undefined
    ) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [mail, password])

  useEffect(() => {
    if (mail.value) {
      getExistUser(mail.value)
    } else {
      validateEmail(mail.value)
    }
  }, [mail.value])

  useEffect(() => {
    const accessToken = sessionStorage.getItem('token')
    if (accessToken) {
      navigate('/')
    }
  }, [])

  return {
    action: {
      onChangeEmail,
      onChangePassword,
      loginProcess
    },
    values: {
      mail,
      password,
      user,
      active
    }
  }
}

export { useSignIn }
