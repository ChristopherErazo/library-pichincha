import React, { useState, useEffect } from 'react'

function useRegister() {
  const dataInfo: string[] = ['', '', '', '', '']
  const errorInputs: boolean[] = [false, false, false, false, false]
  //Estados
  const [userName, setUserName] = useState<string>('')
  const [mail, setMail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<boolean[]>(errorInputs)
  const [samePassword, setSamePassword] = useState<string>('')
  const [info, setInfo] = useState<string[]>(dataInfo)
  const [categories, setCategories] = useState<any>('{}')
  const [active, setActive] = useState<boolean>(true)

  useEffect(() => {
    //Validar Usuario
    if (userName.length > 0) {
      dataInfo[0] = ''
      errorInputs[0] = false
      setError(errorInputs)
      setInfo(dataInfo)
    } else {
      dataInfo[0] = 'Nombre de usuario es requerido'
      errorInputs[0] = true
      setError(errorInputs)
      setInfo(dataInfo)
    }

    //Validar Correo
    if (!(mail.length > 0)) {
      dataInfo[1] = 'Correo es requerido'
      errorInputs[1] = true
      setError(errorInputs)
      setInfo(dataInfo)
    } else if (
      !mail.match(
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
      )
    ) {
      dataInfo[1] = 'Ingrese un correo valido'
      errorInputs[1] = true
      setError(errorInputs)
      setInfo(dataInfo)
    } else {
      dataInfo[1] = ''
      errorInputs[1] = false
      setError(errorInputs)
      setInfo(dataInfo)
    }

    //Validar Password
    if (!(password.length >= 8)) {
      dataInfo[2] = 'Tener un mínimo de 8 caracteres.\n'
      errorInputs[2] = true
      setError(errorInputs)
      setInfo(dataInfo)
    } else if (!password.match(/[A-Z]/)) {
      dataInfo[2] += 'Tener un carácter en mayúscula.\n'
      errorInputs[2] = true
      setError(errorInputs)
      setInfo(dataInfo)
    } else if (!password.match(/[0-9]$/)) {
      dataInfo[2] += 'Tener un carácter numérico.\n'
      errorInputs[2] = true
      setError(errorInputs)
      setInfo(dataInfo)
    } else if (!password.match(/[^\W]/)) {
      dataInfo[2] += 'Tener un carácter especial.'
      errorInputs[2] = true
      setError(errorInputs)
      setInfo(dataInfo)
    } else {
      dataInfo[2] = ''
      errorInputs[2] = false
      setError(errorInputs)
      setInfo(dataInfo)
    }

    if (!(samePassword.length > 0)) {
      dataInfo[3] = 'Confirmar contraseña requerida'
      errorInputs[3] = true
      setError(errorInputs)
      setInfo(dataInfo)
    } else if (samePassword !== password) {
      dataInfo[3] = 'Contraseñas no coinsiden'
      errorInputs[3] = true
      setError(errorInputs)
      setInfo(dataInfo)
    } else {
      dataInfo[3] = ''
      errorInputs[3] = false
      setError(errorInputs)
      setInfo(dataInfo)
    }

    const dataCategories = JSON.parse(categories)
    const arrayCategories = Object.values(dataCategories)
    //console.log(arrayCategories)

    if (arrayCategories.length >= 3) {
      dataInfo[4] = ''
      errorInputs[4] = false
      setError(errorInputs)
      setInfo(dataInfo)
    } else {
      dataInfo[4] = 'Debe seleccionar al menos 3 categorias'
      errorInputs[4] = true
      setError(errorInputs)
      setInfo(dataInfo)
    }

    const viewError = error.some((value) => {
      return value
    })
    console.log(error)

    if (viewError) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [userName, mail, password, samePassword, categories])

  return {
    userName,
    setUserName,
    mail,
    setMail,
    password,
    setPassword,
    samePassword,
    setSamePassword,
    setCategories,
    error,
    info,
    active
  }
}

export { useRegister }
