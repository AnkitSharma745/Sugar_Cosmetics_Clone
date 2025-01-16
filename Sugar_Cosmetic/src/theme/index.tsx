import {
  CssBaseline,
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material'; // Using createTheme from @mui/material
import { useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setDirection,
  setFontFamily,
  setThemeMode,
  setThemePresetColor,
} from '@/redux/features/themeSettings/themeSlice';
import { RootState } from '@/redux/rootStore';
import { ThemeCustomizationProps } from '@/interfaces/modal';
import Palette from './palettes';
import Typography from './typography';
import componentStyleOverrides from './componentStyleOverride';

export default function ThemeCustomization({
  children,
}: ThemeCustomizationProps) {
  const dispatch = useDispatch();

  // Get the current theme state from Redux store
  const { mode, presetColor, fontFamily, direction } = useSelector(
    (state: RootState) => state.theme
  );

  // Dispatch actions only if these values change in Redux store (to prevent unnecessary dispatches)
  useEffect(() => {
    dispatch(setThemeMode(mode));
  }, [dispatch, mode]);

  useEffect(() => {
    dispatch(setThemePresetColor(presetColor));
  }, [dispatch, presetColor]);

  useEffect(() => {
    dispatch(setFontFamily(fontFamily));
  }, [dispatch, fontFamily]);

  useEffect(() => {
    dispatch(setDirection(direction));
  }, [dispatch, direction]);

  // Create theme using the mode, direction, and palette
  const theme = useMemo(() => Palette('default', mode), [mode]);
  const themeTypography = useMemo(
    () => Typography(theme, fontFamily),
    [theme, fontFamily]
  );

  // Generate theme options
  const themeOptions = useMemo(
    () => ({
      direction,
      palette: theme.palette,
      mixins: {
        toolbar: {
          minHeight: '2rem',
          padding: '1rem',
          '@media (min-width: 600px)': {
            minHeight: '2rem',
          },
        },
      },
      typography: themeTypography,
    }),
    [theme, themeTypography, direction]
  );

  // Generate final theme with component overrides
  const themes = useMemo(() => createTheme(themeOptions), [themeOptions]);
  themes.components = useMemo(() => componentStyleOverrides(theme), [theme]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
