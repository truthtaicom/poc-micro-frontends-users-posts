import React from 'react'
import { useFela } from 'react-fela'
import { clearBtn, inputContainerStyle, inputStyle } from './Input.styles'
import CloseIcon from '../../images/close.svg'

interface InputProps {
  onChange(x: React.FormEvent<HTMLInputElement>): void;
  value?: string;
  onClear(): void;
  disabled?: boolean;
}

export default function Input({ onClear, ...props}: InputProps): JSX.Element {
  const { css } = useFela()
  
  return (
    <div className={css(inputContainerStyle)}>
      <input className={css(inputStyle)} placeholder="Search your text" {...props}/>
      { !!props.value && <button className={css(clearBtn)} onClick={onClear}><CloseIcon /></button> }
    </div>
  )
}