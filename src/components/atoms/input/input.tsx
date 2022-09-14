import { FC } from 'react'

export type InputType = 'text' | 'password' | 'email' | 'checkbox'

export interface InputProps {
  type?: InputType
  disabled?: boolean
  id?: string
  name?: string
  placeholder?: string
  value?: string
}

export const Input: FC<InputProps> = (props: InputProps) => {
  return (
    <input
      type={props.type}
      disabled={props.disabled}
      id={props.id}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
    />
  )
}
