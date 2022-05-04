import {useState} from 'react'
import Add from './components/Add'
import Chalenge from './components/Chalenge'
import ContextDataProvider from './context/contextData';
import styles from './styles/App.module.css';

function App() {
  const [Active, setActive] = useState(false)

  return (
    <ContextDataProvider>
      {Active ? <Chalenge /> : <Add />}
      <button className={`${styles.btnGlobal} ${Active? styles.inactive: styles.active}`} onClick={() => setActive(!Active)}>{Active? <span className="material-icons">close</span> : <span className="material-icons">play_arrow</span>}</button>
    </ContextDataProvider>
  )
}

export default App
