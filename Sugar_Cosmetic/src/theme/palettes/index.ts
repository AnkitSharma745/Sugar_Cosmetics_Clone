import { createTheme } from '@mui/material/styles';

import { lightDefault } from './paletteDefault/lightDefault';
import { darkDefault } from './paletteDefault/darkDefault';

import { lightPaletteOne } from './paletteOne/lightPaletteOne';
import { darkPaletteOne } from './paletteOne/darkPaletteOne';

import { lightPaletteTwo } from './paletteTwo/lightPaletteTwo';
import { darkPaletteTwo } from './paletteTwo/darkPaletteTwo';

declare module '@mui/material/styles' {
  interface TypeText {
    hint?: string;
  }
}

// ==============================|| THEME CREATION FUNCTION ||============================== //

const Palette = (presetColor: string, mode: 'light' | 'dark') => {
  let colors;
  if (presetColor === 'theme1') {
    colors = mode === 'dark' ? darkPaletteOne : lightPaletteOne;
  } else if (presetColor === 'theme2') {
    colors = mode === 'dark' ? darkPaletteTwo : lightPaletteTwo;
  } else {
    colors = mode === 'dark' ? darkDefault : lightDefault;
  }

  return createTheme({
    palette: {
      mode,
      common: {
        black: colors.commonBlack,
        white: colors.commonWhite,
      },
      primary: {
        light: colors.primaryLight,
        main: colors.primaryMain,
        dark: colors.primaryDark,
        contrastText: colors.primaryContrastText,
      },
      secondary: {
        light: colors.secondaryLight,
        main: colors.secondaryMain,
        dark: colors.secondaryDark,
        contrastText: colors.secondaryContrastText,
      },
      error: {
        light: colors.errorLight,
        main: colors.errorMain,
        dark: colors.errorDark,
        contrastText: colors.errorContrastText,
      },
      warning: {
        light: colors.warningLight,
        main: colors.warningMain,
        dark: colors.warningDark,
        contrastText: colors.warningContrastText,
      },
      info: {
        light: colors.infoLight,
        main: colors.infoMain,
        dark: colors.infoDark,
        contrastText: colors.infoContrastText,
      },
      success: {
        light: colors.successLight,
        main: colors.successMain,
        dark: colors.successDark,
        contrastText: colors.successContrastText,
      },
      text: {
        primary: colors.textPrimary,
        secondary: colors.textSecondary,
        disabled: colors.textDisabled,
        hint: colors.textHint,
      },
      background: {
        default: colors.backgroundDefault,
        paper: colors.backgroundPaper,
      },
      divider: colors.divider,
      action: {
        active: colors.actionActive,
        hover: colors.actionHover,
        hoverOpacity: colors.ActionHoverOpacity,
        selected: colors.actionSelected,
        selectedOpacity: colors.selectedOpacity,
        disabled: colors.actionDisabled,
        disabledBackground: colors.actionDisabledBackground,
        disabledOpacity: colors.actionDisabledOpacity,
        focus: colors.focus,
        focusOpacity: colors.focusOpacity,
        activatedOpacity: colors.activatedOpacity,
      },
    },
  });
};

export default Palette;
