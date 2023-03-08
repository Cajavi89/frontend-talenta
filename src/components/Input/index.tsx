import styles from './input.module.css'

export interface IInput {
  type: 'text' | 'email' | 'password'
  labelText: string
  inputId: string
  isRequired: boolean
  placeholder?: string
  inputValue: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({
  labelText,
  inputId,
  isRequired = false,
  type = 'text',
  placeholder,
  onChange,
  inputValue,
}: IInput) => {
  return (
    <section className={styles.inputWrapper}>
      <label className={styles.myLabel} htmlFor={inputId}>
        {labelText}:{' '}
      </label>
      <input
        id={inputId}
        className={styles.inputText}
        type={type}
        required={isRequired}
        placeholder={placeholder}
        onChange={onChange}
        value={inputValue}
      />
    </section>
  )
}
