import {useState} from 'react'
import Add from './components/Add'
import Chalenge from './components/Chalenge'
import styles from './styles/App.module.css';

function App() {
  const [Active, setActive] = useState(false)

  return (
      <>
        {Active ? <Chalenge /> : <Add />}
        <button className={`${styles.btnGlobal} ${Active? styles.inactive: styles.active}`} onClick={() => setActive(!Active)}>{Active? <span className="material-icons">close</span> : <span className="material-icons">play_arrow</span>}</button>
      </>
  )
}

export default App
