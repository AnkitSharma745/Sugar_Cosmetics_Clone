import { Theme } from '@mui/material/styles';

export default function componentStyleOverrides(theme: Theme) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.background.default,
          boxShadow: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontSize: '14rem',
          border: `1px solid ${theme.palette.common.black}`,
          borderRadius: '5px',
          '& .MuiInputBase-root': {
            fontSize: '14px',
            padding: 0,
            height: '2.6rem',
          },
          '& .MuiFormHelperText-root': {
            color: theme.palette.error.main,
          },
          '& input:-webkit-autofill': {
            WebkitBoxShadow: `0 0 0 100px #f5f5f5 inset`,
            WebkitTextFillColor: theme.palette.secondary.main,
            transition: 'background-color 5000s ease-in-out 0s',
            fontSize: '0.8rem',
            borderRadius: '24px',
          },

          '& .MuiOutlinedInput-root': {
            overflow: 'hidden',
            '& fieldset': {
              borderColor: theme.palette.background.default,
              boxShadow: 'none',
            },
            '&:hover fieldset': {
              borderColor: theme.palette.divider,
            },
            '&.Mui-focused fieldset': {
              borderColor: theme.palette.divider,
              opacity: '1',
            },
          },
          '& .MuiFilledInput-root': {
            backgroundColor: theme.palette.background.default,
            borderRadius: '24px',
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            },
            '&.Mui-focused': {
              backgroundColor: theme.palette.background.paper,
            },
          },
          '& .MuiInput-root': {
            borderBottom: `2px solid ${theme.palette.secondary.main}`,
            '&:hover': {
              borderBottom: `2px solid ${theme.palette.divider}`,
            },
            '&.Mui-focused': {
              borderBottom: `2px solid ${theme.palette.divider}`,
            },
          },
        },

        label: {
          color: theme.palette.secondary.main,
          opacity: '0.6',
          '&.Mui-focused': {
            opacity: '1',
            color: theme.palette.secondary.main,
          },
          '&.MuiInputLabel-shrink': {
            color: theme.palette.secondary.main,
          },
        },
      },
    },

    // MuiButton: {
    //   styleOverrides: {
    //     root: {
    //       color: theme.palette.text.primary,
    //     },
    //   },
    // },
    // MuiButton: {
    //   styleOverrides: {
    //     root: {},
    //     contained: {
    //       fontWeight: 600,
    //       backgroundColor: 'transparent',
    //       color: theme.palette.primary.contrastText,
    //       borderRadius: '8.125rem',
    //       border: `1px solid ${theme.palette.text.primary}`,
    //       paddingLeft: '19px',
    //       paddingRight: '19px',
    //       height: '2.953125rem',
    //       boxShadow: 'none',
    //       '&:hover': {
    //         boxShadow: 'none',
    //         backgroundColor: theme.palette.primary.dark,
    //       },
    //     },
    //     outlined: {
    //       fontWeight: 600,
    //       backgroundColor: 'transparent',
    //       color: theme.palette.text.primary,
    //       borderRadius: '8.125rem',
    //       border: `1px solid ${theme.palette.text.primary}`,
    //       paddingLeft: '19px',
    //       paddingRight: '19px',
    //       height: '2.953125rem',
    //       boxShadow: 'none',
    //       '&:hover': {
    //         boxShadow: 'none',
    //         borderColor: theme.palette.primary.main,
    //       },
    //     },
    //     text: {
    //       color: theme.palette.text.primary,
    //     },
    //     startIcon: {
    //       marginRight: '0.5rem',
    //       color: theme.palette.primary.main,
    //       backgroundColor: theme.palette.text.primary,
    //       fontSize: '1.15rem',
    //       borderRadius: '1rem',
    //     },
    //     endIcon: {
    //       marginLeft: '0.5rem',
    //     },
    //   },
    // },

    // MuiSvgIcon: {
    //   styleOverrides: {
    //     root: {
    //       fontSize: '1.5rem',
    //       color: theme.palette.text.primary,
    //       transition: 'color 0.3s ease, transform 0.3s ease',
    //       '&:hover': {
    //         transform: 'scale(1)',
    //       },
    //       '&.Mui-disabled': {},
    //     },
    //     fontSizeSmall: {
    //       fontSize: '1.25rem',
    //     },
    //     fontSizeLarge: {
    //       fontSize: '2rem',
    //     },
    //     fontSizeInherit: {
    //       fontSize: 'inherit',
    //     },
    //     success: {
    //       color: theme.palette.success.light,
    //     },
    //     error: {
    //       color: theme.palette.error.light,
    //     },
    //     warning: {
    //       color: theme.palette.warning.light,
    //     },
    //     info: {
    //       color: theme.palette.info.light,
    //     },
    //     custom: {
    //       color: theme.palette.orange.light,
    //     },
    //     clickable: {
    //       cursor: 'pointer',
    //       '&:hover': {},
    //     },
    //   },
    // },
  };
}
