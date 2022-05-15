import {createContext, useState}  from 'react'

export const ContextPractice = createContext()


export default function ContextPracticeProvider ({children}) {
    const [Practice, setPractice] = useState(false)

    return (
        <ContextPractice.Provider value={{Practice, setPractice}}>
            {children}
        </ContextPractice.Provider>
    )
}
