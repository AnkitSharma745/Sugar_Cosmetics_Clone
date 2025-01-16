import { Theme } from '@mui/material/styles';
import { TypographyOptions } from '../interfaces/modal';

const Typography = (theme: Theme, fontFamily: string): TypographyOptions => ({
  fontFamily,
  h1: {
    fontSize: '2.125rem',
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.05em',
    color: theme.palette.text.primary,
  },
  h2: {
    fontSize: '1.5rem',
    fontWeight: 700,
    lineHeight: 1.3,
    letterSpacing: '-0.04em',
    color: theme.palette.text.primary,
  },
  h3: {
    fontSize: '1.25rem',
    fontWeight: 600,
    lineHeight: 1.4,
    letterSpacing: '-0.03em',
    color: theme.palette.text.primary,
  },
  h4: {
    fontSize: '1rem',
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: '-0.02em',
    color: theme.palette.text.primary,
  },
  h5: {
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: 1.6,
    letterSpacing: '-0.01em',
    color: theme.palette.text.primary,
  },
  h6: {
    fontSize: '0.75rem',
    fontWeight: 500,
    lineHeight: 1.7,
    letterSpacing: '0em',
    color: theme.palette.text.primary,
  },
  subtitle1: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.75,
    color: theme.palette.text.secondary,
  },
  subtitle2: {
    fontSize: '0.75rem',
    fontWeight: 400,
    lineHeight: 1.6,
    color: theme.palette.text.secondary,
  },
  body1: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
    color: theme.palette.text.primary,
  },
  body2: {
    fontSize: '0.75rem',
    fontWeight: 400,
    lineHeight: 1.43,
    color: theme.palette.text.primary,
  },
  caption: {
    fontSize: '0.75rem',
    fontWeight: 400,
    lineHeight: 1.25,
    color: theme.palette.text.secondary,
  },
  button: {
    fontSize: '0.875rem',
    fontWeight: 500,
    textTransform: 'uppercase',
    lineHeight: 1.75,
  },
  overline: {
    fontSize: '0.75rem',
    fontWeight: 400,
    textTransform: 'uppercase',
    lineHeight: 2,
    color: theme.palette.text.secondary,
  },
});

export default Typography;
