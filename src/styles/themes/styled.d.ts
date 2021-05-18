import 'styled-components';

type TTextColors = {
    heading: string;
    default: string;
    complement: string;
    inColors: string;
};

type TItemsColors = {
    complement: string;
    background: string;
};

type TPrimaryColors = {
    lighter: string;
    light: string;
    default: string;
    dark: string;
};

declare module 'styled-components' {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    export interface DefaultTheme {
        title: 'light' | 'dark';
        text: TTextColors;
        item: TItemsColors;
        background: string;
        primary: TPrimaryColors;
        secondary: string;
    }
}