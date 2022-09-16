import { FC } from 'react'
import './input.scss'

export type InputType = 'text' | 'password' | 'email' | 'checkbox'

export interface InputProps {
  type?: InputType
  disabled?: boolean
  id?: string
  name?: string
  placeholder?: string
  value?: string
  info?: string
  errorPass?: string[]
  error?: boolean
  label?: string
  label_checkbox?: string[]
  onChange?: (event: any) => void
}

/*const data: () => string = () => {
  return 5
}*/

export const Input: FC<InputProps> = (props: InputProps) => {
  let inputClass = 'input__container'
  let inputInfoClass = 'input__info'
  let inputLabel = 'input__label'

  if (props.error) {
    inputClass += ' input__container--error'
    inputInfoClass += ' input__info--error'
  }

  if (props.type === 'checkbox') {
    inputLabel += ' input__label--checkbox'
    return (
      <>
        {props.label_checkbox?.map((data) => (
          <div className="input-checkbox">
            <input
              className="input__checkbox"
              type={props.type}
              disabled={props.disabled}
              id={props.id}
              name={props.name}
              value={props.value}
            />
            <label className={inputLabel} htmlFor={props.id}>
              {data}
            </label>
          </div>
        ))}
        {props.info && <span className={inputInfoClass}>{props.info}</span>}
      </>
    )
  } else {
    return (
      <div className="input">
        <label className={inputLabel} htmlFor={props.id}>
          {props.label}
        </label>
        <section className={inputClass}>
          <input
            className="input__container__text-area"
            type={props.type}
            disabled={props.disabled}
            id={props.id}
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
          />
        </section>
        {props.info && <span className={inputInfoClass}>{props.info}</span>}
        {props.errorPass?.map((infoPass) => (
          <span className={inputInfoClass}>{infoPass}</span>
        ))}
      </div>
    )
  }
}
