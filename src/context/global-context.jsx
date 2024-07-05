import {createContext, useState} from 'react';

export const GlobalContext = createContext(null)


export default function GlobalContextProvider ({children}) {

    const [razas, setRazas] = useState([])
    const [subRazas, setsubRazas] = useState([])
    const [stateFilter, setStateFilter] = useState([]);
    const [urlImagenes, setUrlImagenes] = useState([])
    const [selectedRaza, setSelectedRaza] = useState(null);
    const [selectedSubRaza, setSelectedSubRaza] = useState(null);
    




    return(
        <GlobalContext.Provider value={
            {   razas, setRazas,
                stateFilter, setStateFilter,
                urlImagenes, setUrlImagenes,
                selectedRaza, setSelectedRaza,
                selectedSubRaza, setSelectedSubRaza,
                subRazas, setsubRazas
            }}>
            {children}
        </GlobalContext.Provider>
    )
}