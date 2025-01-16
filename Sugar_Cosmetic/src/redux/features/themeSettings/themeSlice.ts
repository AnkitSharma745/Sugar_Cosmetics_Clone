import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeState } from './themeTypes';
import { themeSliceName } from './themeConstant';

const initialState: ThemeState = {
  mode: 'light',
  presetColor: 'default',
  fontFamily: 'sans-serif',
  direction: 'ltr',
};

const themeSlice = createSlice({
  name: themeSliceName,
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<'light' | 'dark'>) => {
      const myState = state;
      myState.mode = action.payload;
    },
    setThemePresetColor: (state, action: PayloadAction<string>) => {
      const myState = state;
      myState.presetColor = action.payload;
    },
    setFontFamily: (state, action: PayloadAction<string>) => {
      const myState = state;

      myState.fontFamily = action.payload;
    },
    setDirection: (state, action: PayloadAction<'ltr' | 'rtl'>) => {
      const myState = state;

      myState.direction = action.payload;
    },
  },
});

export const {
  setThemeMode,
  setThemePresetColor,
  setFontFamily,
  setDirection,
} = themeSlice.actions;

export const themeReducer = themeSlice.reducer;

export default themeSlice.reducer;
