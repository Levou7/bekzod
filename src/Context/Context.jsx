import { useState } from "react";
import { createContext } from "react";

const Context = createContext()

function Provider({children}) {
    const [login, setLogin] = useState('')

    const [ism2, setIsm2] = useState('Bekzad Ergashev')
    const [vaz2, setVaz2] = useState('Kompyuter Mutahassisi')
    const [ish2, setIsh2] = useState('Men Bekzod Ergashev Hozirda Kompyuterlarni tuzatish bilan shugullanaman')
    const [tel2, setTel2] = useState('998 93 425 26 23')
    const [tg2, settg2] = useState('https://t.me/bekzadergashev')
    console.log(children);
    return (
        <Context.Provider value={{login, setLogin, ism2, setIsm2, vaz2, setVaz2, ish2, setIsh2, tel2, setTel2, tg2, settg2}}>
            {children}
        </Context.Provider>
    )
}

export {
    Context,
    Provider
}