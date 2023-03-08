import { useState } from 'react'
import styles from './myForm.module.css'
import { Button } from '../Button'
import { Input } from '../Input'
import { saveNewText } from '../../services/text.services'
import { ITextDTO } from '../../types/text'
import { useReloadContext } from '../../context/ReloadContext'
import { ModalSended } from '../ModalSended'

export const MyForm = () => {
  const [text, setText] = useState('')
  const { changeReload, reload } = useReloadContext()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const textDTO: ITextDTO = { text }
    await saveNewText(textDTO)
    setText('')
    changeReload()
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  return (
    <form className={styles.myForm} onSubmit={handleSubmit}>
      <Input
        type='text'
        labelText='Agregar un texto'
        inputId={'addText'}
        isRequired
        placeholder='Hacer la tarea de React'
        onChange={handleChange}
        inputValue={text}
      />
      {/* <Loader /> */}
      <Button styled='primary' btnText='Enviar' type='submit' />
      {reload && <ModalSended />}
    </form>
  )
}
