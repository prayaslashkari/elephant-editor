import React from 'react';

export const appInitialState = {
  fontSize: '12px',
  lightTheme: 'github',
  darkTheme: 'dracula',
  codeEditor: 'w3schools', //w3schools/codepen
};

const AppContext = React.createContext(appInitialState);

export default AppContext;
