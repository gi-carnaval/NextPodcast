import { DefaultTheme } from 'styled-components';

export const light: DefaultTheme = {
    title: 'light',
    background: '#F5F6FA',
    text: {
        heading: '#494D4B',
        default: '#808080',
        complement: '#AFB2B1',
        inColors: '#FFFFFF'
    },
    item: {
        background: '#FFFFFF',
        complement: '#E6E8EB'
    },
    primary: {
        lighter: '#8F278C',
        light: '#822B80',
        default: '#6B0B69',
        dark: '#490047'
    },
    secondary: '#03D8E5'
};
export const dark: DefaultTheme = {
    title: 'dark',
    background: '#494C4B',
    text: {
        heading: '#FFFFFF',
        default: '#E6E8EB',
        complement: '#AFB2B1',
        inColors: '#FFFFFF'
    },
    item: {
        background: '#383B3A',
        complement: '#7F7F7F'
    },
    primary: {
        lighter: '#8F278C',
        light: '#822B80',
        default: '#6B0B69',
        dark: '#490047'
    },
    secondary: '#03D8E5'
};