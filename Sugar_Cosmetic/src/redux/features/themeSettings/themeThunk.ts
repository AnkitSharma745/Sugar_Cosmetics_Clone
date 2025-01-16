import { createAsyncThunk } from '@reduxjs/toolkit';

export const saveThemeToLocalStorage = createAsyncThunk(
  'theme/saveThemeToLocalStorage',
  async (themeState: {
    mode: 'light' | 'dark';
    fontFamily: string;
    direction: 'ltr' | 'rtl';
  }) => {
    localStorage.setItem('theme', JSON.stringify(themeState));
  }
);

export const loadThemeFromLocalStorage = createAsyncThunk(
  'theme/loadThemeFromLocalStorage',
  async () => {
    const themeState = localStorage.getItem('theme');
    return themeState ? JSON.parse(themeState) : null;
  }
);
