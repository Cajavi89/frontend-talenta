import styles from './button.module.css'

export interface IButton {
  styled: 'primary' | 'secondary'
  btnText?: string
  type: 'submit' | 'reset' | 'button'
  onClickHandler?: () => void
}

export const Button = ({
  styled = 'primary',
  type = 'button',
  btnText = 'Click me',
  onClickHandler,
}: IButton) => {
  return (
    <button className={styles[styled]} type={type} onClick={onClickHandler}>
      {btnText}
    </button>
  )
}
