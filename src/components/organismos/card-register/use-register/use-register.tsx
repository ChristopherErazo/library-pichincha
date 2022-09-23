import React, { useState, useEffect } from 'react'
import {
  userInput,
  emailInput,
  passwordInput,
  samePasswordInput,
  checkBoxInput
} from '../../../../utils/texts'

interface InputValue {
  value?: string
  isError?: boolean
  info?: string
}

function useRegister() {
  const [name, setName] = useState<InputValue>({ value: '' })
  const [mail, setMail] = useState<InputValue>({ value: '' })
  const [password, setPassword] = useState<InputValue>({ value: '' })
  const [samePassword, setSamePassword] = useState<InputValue>({ value: '' })
  const [options, setOptions] = useState<InputValue>({ value: '' })
  const [categories, setCategories] = useState<any>('{}')
  const [active, setActive] = useState<boolean>(true)

  function validateEmptyStrings(anyValue: string) {
    return anyValue.length === 0
  }

  // Funcion Validar Correo
  const validateEmail = (anyValue: string): InputValue => {
    if (validateEmptyStrings(anyValue)) {
      return {
        isError: true,
        info: emailInput.errorMessage?.empty
      }
    }

    if (
      !anyValue.match(
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
      )
    ) {
      return {
        isError: true,
        info: emailInput.errorMessage?.emailFormat
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

    if (!(anyValue.length >= 8)) {
      return {
        isError: true,
        info: passwordInput.errorMessage?.minimumCharacter
      }
    }
    if (!anyValue.match(/[A-Z]/)) {
      return {
        isError: true,
        info: passwordInput.errorMessage?.upperCase
      }
    }
    if (!anyValue.match(/[0-9]/)) {
      return {
        isError: true,
        info: passwordInput.errorMessage?.numberCharacter
      }
    }
    if (!anyValue.match(/[\W]/)) {
      return {
        isError: true,
        info: passwordInput.errorMessage?.especialCharter
      }
    }

    return {
      isError: false,
      info: undefined
    }
  }

  //Funcion Validar samePassword
  const validateSamePassword = (anyValue: string): InputValue => {
    //console.log(password, anyValue)
    if (validateEmptyStrings(anyValue)) {
      return {
        isError: true,
        info: samePasswordInput.errorMessage?.empty
      }
    }

    if (!(anyValue === password.value)) {
      return {
        isError: true,
        info: samePasswordInput.errorMessage?.samePassword
      }
    }

    return {
      isError: false,
      info: undefined
    }
  }

  //Function Validar Options
  const validateOptions = (anyValue: string): InputValue => {
    const dataCategories = JSON.parse(anyValue)
    const arrayCategories = Object.values(dataCategories)
    //console.log(arrayCategories)

    if (arrayCategories.length >= 3) {
      return {
        isError: false,
        info: undefined
      }
    }

    return {
      isError: true,
      info: checkBoxInput.errorMessage?.checkedOptions
    }
  }

  const onChangeUserName = (event: { target: { value: string } }) => {
    const isError = validateEmptyStrings(event.target.value.toString())
    const newNameValue: InputValue = {
      value: event.target.value.toString(),
      isError,
      info: isError ? userInput.errorMessage?.empty : undefined
    }
    setName(newNameValue)
  }

  const onChangeEmail = (event: { target: { value: string } }) => {
    const result = validateEmail(event.target.value.toString())
    const newEmailValue: InputValue = {
      value: event.target.value.toString(),
      isError: result.isError,
      info: result.info
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

  const onChangeSamePassword = (event: { target: { value: string } }) => {
    const result = validateSamePassword(event.target.value.toString())
    const newSamePassword: InputValue = {
      value: event.target.value.toString(),
      isError: result.isError,
      info: result.info
    }
    setSamePassword(newSamePassword)
  }

  let categoriesSelected: { [x: string]: string | undefined }
  let item
  function getLocalStorage() {
    item = localStorage.getItem('categories')

    if (item) {
      categoriesSelected = JSON.parse(item)
    } else {
      categoriesSelected = {}
    }

    return categoriesSelected
  }

  const onChangesCheckbox = (event: { target: { checked: any; value: string } }) => {
    if (event.target.checked) {
      if (!getLocalStorage()[event.target.value.toString()]) {
        categoriesSelected[event.target.value.toString()] = event.target.value
      }
      localStorage.setItem('categories', JSON.stringify(categoriesSelected))
    } else {
      if (getLocalStorage()[event.target.value.toString()]) {
        categoriesSelected[event.target.value.toString()] = undefined
      }
      localStorage.setItem('categories', JSON.stringify(categoriesSelected))
    }
    setCategories(localStorage.getItem('categories'))
  }
  useEffect(() => {
    const result = validateOptions(categories)
    const newCheckBox: InputValue = {
      value: categories,
      isError: result.isError,
      info: result.info
    }
    setOptions(newCheckBox)
  }, [categories])

  useEffect(() => {
    //console.log(name.isError, mail.isError, password.isError, samePassword.isError, options.isError)
    if (
      name.isError ||
      name.isError === undefined ||
      mail.isError ||
      mail.isError === undefined ||
      password.isError ||
      password.isError === undefined ||
      samePassword.isError ||
      samePassword.isError === undefined ||
      options.isError ||
      options.isError === undefined
    ) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [name, mail, password, samePassword, options])
  /**/

  return {
    action: {
      onChangeUserName,
      onChangeEmail,
      onChangePassword,
      onChangeSamePassword,
      onChangesCheckbox
    },
    values: {
      name,
      mail,
      password,
      samePassword,
      options,
      active
    }
  }
}

export { useRegister }
