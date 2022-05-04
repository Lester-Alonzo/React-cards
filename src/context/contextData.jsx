import {createContext, useState} from 'react';

export const ContextData = createContext();


let pool =  localStorage.getItem('preguntas') ? JSON.parse(localStorage.getItem('preguntas')) : []

export default function ContextDataProvider({children}) {
    const [Data, setData] = useState(pool);
    function AddData(Pregunta){
        setData([...Data, Pregunta])
        pool.push(Pregunta);
        localStorage.setItem('preguntas', JSON.stringify(pool))
    }
    return(
        <ContextData.Provider value={{Data, AddData}}>
            {children}
        </ContextData.Provider>
    )
}