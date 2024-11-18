import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ThemeState {
    theme: 'light' | 'dark';
};

const storedTheme = (typeof window !== 'undefined' && localStorage.getItem('theme')) as 'light' | 'dark' | null;

const initialState: ThemeState = {
    theme: storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : 'light',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', state.theme);
        },
        setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
            state.theme = action.payload;
            localStorage.setItem('theme', state.theme);
        }
    },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;