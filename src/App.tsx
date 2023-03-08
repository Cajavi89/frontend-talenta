import styles from './App.module.css'
import { MyForm } from './components/myForm'
import { ShowTexts } from './components/ShowTexts'

function App() {
  return (
    <section className={styles.generalWrapper}>
      <MyForm />
      <ShowTexts />
    </section>
  )
}

export default App
