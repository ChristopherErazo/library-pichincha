export type DataInput = {
  name?: string
  id?: string
  label?: string
  labelCheckBox?: string[]
  placeholder?: string
  errorMessage?: {
    empty?: string
    emailFormat?: string
    upperCase?: string
    especialCharter?: string
    numberCharacter?: string
    minimumCharacter?: string
    checkedOptions?: string
    samePassword?: string
    existsUser?: string
  }
}

export const userInput: DataInput = {
  name: 'user',
  id: 'user',
  label: 'Nombre de usuario',
  placeholder: 'Ej. makoto',
  errorMessage: {
    empty: 'Nombre de usuario es requerido'
  }
}
export const emailInput: DataInput = {
  name: 'email',
  id: 'email',
  label: 'Correo electronico',
  placeholder: 'Ej. name@example.com',
  errorMessage: {
    empty: 'Correo es requerido',
    emailFormat: 'Ingrese un correo valido',
    existsUser: 'Usurio no existe'
  }
}
export const passwordInput: DataInput = {
  name: 'password',
  id: 'password',
  label: 'Contraseña',
  placeholder: '*****',
  errorMessage: {
    empty: 'Contraseña requerida',
    upperCase: 'Tener un carácter en mayúscula.\n',
    especialCharter: 'Tener un carácter especial.',
    numberCharacter: 'Tener un carácter numérico.\n',
    minimumCharacter: 'Mínimo de 8 caracteres.\n'
  }
}
export const samePasswordInput: DataInput = {
  name: 'samePass',
  id: 'samePass',
  label: 'Confirmar contraseña',
  placeholder: '*****',
  errorMessage: {
    empty: 'Confirmar contraseña requerida',
    samePassword: 'Contraseñas no coinsiden'
  }
}
export const checkBoxInput: DataInput = {
  name: 'user',
  id: 'user',
  labelCheckBox: ['Anime', 'Ciencia Ficcion', 'Novela', 'Drama', 'Inteligencia Artificial'],
  errorMessage: {
    checkedOptions: 'Debe seleccionar al menos 3 categorias'
  }
}
