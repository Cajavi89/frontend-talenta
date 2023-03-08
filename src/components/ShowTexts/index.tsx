import { useEffect, useState } from 'react'
import { getAllTexts } from '../../services/text.services'
import styles from './showTexts.module.css'
import { IText } from '../../types/text'
import { Loader } from '../Loader'
import { useReloadContext } from '../../context/ReloadContext'

export const ShowTexts = () => {
  const { reload } = useReloadContext()
  const [texts, setTexts] = useState<IText[]>([])

  //efecto cuando se monta el componente y/o se crea un texto
  useEffect(() => {
    const fetchTexts = async () => {
      const texts = await getAllTexts()
      // if (texts.length) return
      setTexts(texts)
    }
    fetchTexts()
  }, [reload])

  return (
    <ul className={styles.textsWrapper}>
      {!texts.length ? (
        <h3>No hay textos guardados</h3>
      ) : (
        texts?.map((text) => {
          return (
            <li className={styles.textItem} key={text.id}>
              {text.text}
            </li>
          )
        })
      )}
    </ul>
  )
}
