import React from 'react';

export const themes = {
  light: 'light',
  dark: 'dark',
};

const ThemeContext = React.createContext(themes.light);

export default ThemeContext;
