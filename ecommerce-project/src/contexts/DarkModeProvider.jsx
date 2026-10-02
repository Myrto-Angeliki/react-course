import { useState, useEffect, use } from "react"
import { DarkModeContext } from './DarkModeContext.jsx'

export function DarkModeProvider({children}){
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('darkMode') == 'true'
    });

    useEffect(() => {
        localStorage.setItem('darkMode', String(isDarkMode))
    }, [isDarkMode]);

    return (
        <DarkModeContext.Provider value={{isDarkMode, setIsDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    );
}