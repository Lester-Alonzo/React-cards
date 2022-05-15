import {useContext, useState} from 'react'
import {ContextData} from '../context/contextData'
import {Toaster, toast} from 'react-hot-toast';
import styles from '../styles/Challenge.module.css';
import Marcador from './Marcador';

const Chalenge = () => {
    const {Data} = useContext(ContextData)
    const [current, setCurrent] = useState(0)
    const [Ganadas, setGanadas] = useState(0)
    const [Perdidas, setPerdidas] = useState(0)

    function handleBlur(e) {
        let respuesta = e.target.value 
        respuesta == Data[current].respuesta ? toast.success(`Correcto! : ${Data[current].respuesta}`) : toast.error(`Incorrecto! es: ${Data[current].respuesta}`)
        respuesta == Data[current].respuesta && current !== (Data.length - 1) ? setCurrent(current + 1) : (current !== (Data.length - 1)?setCurrent(current + 1): setCurrent(current))
        respuesta == Data[current].respuesta ? setGanadas(Ganadas + 1) : setPerdidas(Perdidas + 1)
        e.target.value = ''
    }

    return (
        <div className={styles.questionContainer}>
            {Data.length > 0 ?(
                <>
                <section className={styles.tarjeta}>
                    <h3>
                        ¿{Data[current].pregunta}?
                    </h3>
                        <input type="text" onBlur={handleBlur} placeholder="ingresa la respuesta"/>
                    <span hidden={true}>{Data[current].respuesta}</span>
                </section>
            <nav className={styles.navegacion}>
                <button onClick={() => current <= 0 ? console.log('no hay mas') : setCurrent(current - 1)}><span className="material-icons">navigate_before</span></button>
                <button onClick={() => current >= (Data.length - 1) ?console.log('tope'):setCurrent(current + 1)}><span className="material-icons">navigate_next</span></button>
            </nav>
            </>
            ) : <h2>No hay preguntas aun</h2>}
            <Toaster position='top-right'/>
            <Marcador ganadas={Ganadas} perdidas={Perdidas}/>
        </div>
    )
}
export default Chalenge;
