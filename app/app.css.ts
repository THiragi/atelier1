import { globalStyle, keyframes } from '@vanilla-extract/css';
import { vars } from './theme.css';

globalStyle('html', {
  margin: 0,
});

globalStyle('body', {
  margin: 0,
  minHeight: '100vh',
  fontFamily: vars.font.body,
  backgroundColor: vars.color.lightness1,
  color: vars.color.darkness1,
});

globalStyle('p', {
  lineHeight: '1.8rem',
});

globalStyle('a', {
  transition: vars.transition.default,
  color: 'inherit',
  textDecoration: 'none',
});

globalStyle('pre', {
  fontSize: 16,
  fontFamily: vars.font.mono,
  backgroundColor: 'rgba(255, 255, 255, 0.45)',
  borderRadius: vars.borderRadius.sm,
  boxShadow: '2px 2px 6px rgb(255 255 255 / 0.25)',
  padding: '0.5rem',
  overflowX: 'auto',
  color: vars.color.darkness1,
});

globalStyle('blockquote', {
  fontSize: '0.9rem',
  margin: '1rem 0',
  padding: '2rem 36px',
  borderRadius: vars.borderRadius.md,
  color: vars.color.darkness1,
  backgroundColor: vars.color.lightness2,
});

globalStyle('code', {
  padding: '0 8px',
  backgroundColor: vars.color.lightness2,
});

globalStyle('input, button, textarea, select', {
  boxSizing: 'border-box',
  padding: 0,
  fontFamily: 'inherit',
  backgroundColor: 'inherit',
  color: 'inherit',
  borderWidth: 0,
  borderRadius: 0,
  outline: 'none',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  appearance: 'none',
  transition: vars.transition.default,
});

const bggradient = keyframes({
  '0%': {
    backgroundPosition: '100% 100%',
  },
  '100%': {
    backgroundPosition: '0% 0%',
  },
});

globalStyle('img', {
  background: `linear-gradient(
    90deg,
    ${vars.color.lightness1},
    ${vars.color.lightness3},
    ${vars.color.lightness1}
  )`,
  backgroundSize: '500% 500%',
  animationName: bggradient,
  animationDuration: '2s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'ease-out',
});
