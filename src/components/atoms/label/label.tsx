import { FC } from 'react'

export interface LabelProps {
  forName?: string
  children?: React.ReactNode
  class?: string
}

export const Label: FC<LabelProps> = (props: LabelProps) => {
  return (
    <label htmlFor={props.forName} className={props.class}>
      {props.children}
    </label>
  )
}
