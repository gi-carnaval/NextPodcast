import { createContext, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { dark, light } from '../styles/themes';
import { PlayerContextProvider } from './PlayerContext';

const themes = {
    light,
    dark
};

interface IAppContextProps {
    theme: string;
    toggleTheme: () => void;
}

const AppContext = createContext({} as IAppContextProps);

export function AppProvider({ children }) {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const toggleTheme = () => {
        setTheme((state) => (state !== 'light' ? 'light' : 'dark'));
    };

    return (
        <AppContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={themes[theme]}>
                <PlayerContextProvider>{children}</PlayerContextProvider>
            </ThemeProvider>
        </AppContext.Provider>
    );
}

export const useApp = () => useContext(AppContext);