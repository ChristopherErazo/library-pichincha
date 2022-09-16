import React, { useState, useEffect } from 'react'

function useRegister() {
  //Estados
  const [userName, setUserName] = useState<string>('')
  const [mail, setMail] = useState<string>(' ')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const [samePassword, setSamePassword] = useState<string>('')
  const [info, setInfo] = useState<any[]>(['', '', '', '', ''])
  const [infoPassword, setInfoPassword] = useState<string[]>(['', '', '', '', ''])
  //const [openModal, setOpenModal] = useState([false, ''])
  const dataInfo: string[] = ['', '', '', '', '']
  let dataPassword: string[] = ['', '', '', '', '']

  useEffect(() => {
    //Validar Usuario
    if (userName.length > 0) {
      setError(false)
      dataInfo[0] = ''
      setInfo(dataInfo)
    } else {
      setError(true)
      dataInfo[0] = 'Nombre de usuario es requerido'
      setInfo(dataInfo)
    }

    //Validar Correo
    if (!(mail.length > 0)) {
      setError(true)
      dataInfo[1] = 'Correo es requerido'
      setInfo(dataInfo)
    } else if (
      !mail.match(
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
      )
    ) {
      setError(true)
      dataInfo[1] = 'Ingrese un correo valido'
      setInfo(dataInfo)
    } else {
      setError(false)
      dataInfo[1] = ''
      setInfo(dataInfo)
    }

    //Validar Password
    if (!(password.length >= 8)) {
      setError(true)
      dataPassword[0] = 'Tener un mínimo de 8 caracteres.\n'
      setInfoPassword(dataPassword)
    }

    if (!password.match(/[A-Z]/)) {
      setError(true)
      dataPassword[1] += 'Tener un carácter en mayúscula.\n'
      setInfoPassword(dataPassword)
    }

    if (!password.match(/[0-9]$/)) {
      setError(true)
      dataPassword[2] += 'Tener un carácter numérico.\n'
      setInfoPassword(dataPassword)
    }

    if (!password.match(/[^\w]/)) {
      setError(true)
      dataPassword[3] += 'Tener un carácter especial.'
      setInfoPassword(dataPassword)
    } else {
      setError(false)
      dataPassword = ['', '']
      setInfoPassword(dataPassword)
    }

    if (!(samePassword.length > 0)) {
      setError(true)
      dataInfo[3] = 'Confirmar contraseña requerida'
      setInfo(dataInfo)
    } else if (samePassword === password) {
      setError(true)
      dataInfo[3] = 'Contraseñas no coinsiden'
      setInfo(dataInfo)
    } else {
      setError(false)
      dataInfo[3] = ''
      setInfo(dataInfo)
    }
  }, [userName, mail, password, samePassword])

  console.log(infoPassword)

  return {
    userName,
    setUserName,
    mail,
    setMail,
    password,
    setPassword,
    samePassword,
    setSamePassword,
    error,
    info,
    infoPassword
  }
}

export { useRegister }
