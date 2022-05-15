import {useContext, useState}  from 'react'
import {ContextPractice}  from '../context/contextPractice.jsx'
import {ContextData}  from '../context/contextData.jsx'
import Styles  from '../styles/Tarjet.module.css'

const Tarjet = () => {
    const {Practice, setPractice} = useContext(ContextPractice)
    const {Data} = useContext(ContextData)
    const [Current, setCurrent] = useState(0)
    const [Sentence, setSentence] = useState('respuesta')
    const next = () => {
        if (Current >= Data.length - 1) {
             
        }else{
            setSentence('respuesta')
            setCurrent(Current + 1)
            console.log(Current)
        }
    }
    const back = () => {
        if (Current <= 0) {
             
        }else{
            setSentence('respuesta')
            setCurrent(Current - 1)
            console.log(Current)
        }
    }
    const changeTarjet = () => {
        if (Sentence == 'respuesta') {
            setSentence('pregunta') 
        }else{
            setSentence('respuesta')
        }
    }
    return (
        <>
            <section className={Styles.container}>
            <div className={Styles.tarjeta}  onClick={changeTarjet}>
                <h2 style={{fontSize:"2rem"}}>{Data[Current][Sentence]}</h2>
                <span style={{opacity:"0.7", cursor:"pointer"}} className="material-icons">refresh</span>
            </div>
            <div className={Styles.btns}>
                <button onClick={back}><span className="material-icons">navigate_before</span></button>
                <button onClick={next}><span className="material-icons">navigate_next</span></button>
            </div>

            <button className={Styles.cls}  onClick={() => setPractice(!Practice)}><span className="material-icons">close</span></button>
            </section>
        </>
    )
}

export default Tarjet
