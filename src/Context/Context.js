import { createContext, useState } from "react";

export const Meneger = createContext()


export const MenegerProvider = ({ children }) => {
    const [model, setModel] = useState(false)


    return <Meneger.Provider value={{ setModel, model }}> {children}</Meneger.Provider >
}