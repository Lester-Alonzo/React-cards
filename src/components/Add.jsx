import {useRef, useContext, useState} from 'react';
import {ContextData} from '../context/contextData';
import {ContextPractice}  from '../context/contextPractice.jsx'
import styles from '../styles/Add.module.css';
import {toast, Toaster} from 'react-hot-toast';
import Tarjet  from './Tarjet.jsx'


const Add = () => {
    const input1 = useRef(null);
    const input2 = useRef(null);
    const {AddData} = useContext(ContextData);
    const {Practice, setPractice} = useContext(ContextPractice)
    const [Pregunta, setPregunta] = useState({
        pregunta: '',
        respuesta: '',
    })
    function handleChange(e){
        setPregunta({
            ...Pregunta,
            [e.target.name]: e.target.value
        })
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (Pregunta.pregunta.length > 0 && Pregunta.respuesta.length > 0) {
            AddData(Pregunta)
            input1.current.value = ''
            input2.current.value = ''
        }else{
            toast.error('Por favor llena todos los campos')
        }
            
        }

   const handleClick = () => {
       setPractice(!Practice)
   }
    return(
        <section className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.Form}>
                <input ref={input1} onChange={handleChange} name='pregunta' type="text" placeholder="Ingrese la pregunta?"/>
                <input ref={input2} onChange={handleChange} name='respuesta' type="text" placeholder='Ingrese la respuesta directa'/>
                <div style={{display:"flex", gap:"1rem"}}>
                    <button type='submit'><span className="material-icons">add</span></button>
                    <button type='button' onClick={handleClick}><span className="material-icons">edit_note</span></button>
                </div>
            </form>
            <Toaster position='top-right'/>
            {Practice? <Tarjet/> : null}
            
        </section>
    )
}

export default Add; // export default Add;
