import {useRef, useContext, useState} from 'react';
import {ContextData} from '../context/contextData';
import styles from '../styles/Add.module.css';
import {toast, Toaster} from 'react-hot-toast';


const Add = () => {
    const input1 = useRef(null);
    const input2 = useRef(null);
    const {AddData} = useContext(ContextData);
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

    
    return(
        <section className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.Form}>
                <input ref={input1} onChange={handleChange} name='pregunta' type="text" placeholder="Ingrese la pregunta?"/>
                <input ref={input2} onChange={handleChange} name='respuesta' type="text" placeholder='Ingrese la respuesta directa'/>
                <button type='submit'><span className="material-icons">add</span></button>
            </form>
            <Toaster position='top-right'/>
        </section>
    )
}

export default Add; // export default Add;
