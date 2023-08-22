import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    red: 'rgb(170, 33, 83)',
    shadow: 'rgb(0, 0, 0)',
    darkness1: 'rgb(13, 26, 60)',
    darkness2: 'rgb(68, 68, 68)',
    darkness3: 'rgb(108, 108, 108)',
    lightness1: 'rgb(249, 250, 251)',
    lightness2: 'rgb(231, 237, 243)',
    lightness3: 'rgb(226, 226, 226)',
  },
  font: {
    body: `Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
		Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
    mono: `ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',
    'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',
    'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace`,
  },
  maxWidth: {
    md: '768',
    lg: '992',
  },
  space: {
    side: '16px',
  },
  transition: {
    default: '0.4s',
  },
  borderRadius: {
    sm: '0.2rem',
    md: '0.5rem',
    lg: '0.8rem',
  },
});
