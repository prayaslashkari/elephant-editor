import { useState, useEffect } from 'react';

//Components
import Editor from './components/editor/Editor'; //Codepenstyle editor
import Editor2 from './components/editor/Editor2'; //w3 style editor
import Output from './components/output/Output';
import Toolbar from './components/toolbar/Toolbar';

import styles from './App.module.css';
import ThemeContext, { themes } from './store/ThemeContext';
import AppContext, { appInitialState } from './store/AppContext';

import {
  defaultCSS,
  defaultHTML,
  defaultW3HTML,
} from './constants/defaultCode';

function App() {
  const [htmlCode, setHtmlCode] = useState(defaultHTML);
  const [cssCode, setCSSCode] = useState(defaultCSS);
  const [jsCode, setJSCode] = useState('');
  const [outputCode, setOutputCode] = useState('');
  const [editorStyle, setEditorStyle] = useState('codepen'); //codepen/w3schools

  let handleToggleEditorStyle = () => {
    if (editorStyle === 'codepen') {
      setHtmlCode(defaultW3HTML);
      setEditorStyle('w3schools');
      handleDefaultRun();
    } else {
      setHtmlCode(defaultHTML);
      setEditorStyle('codepen');
      handleDefaultRun();
    }
  };

  let handleDefaultRun = () => {
    if (editorStyle === 'codepen') {
      setOutputCode(defaultW3HTML);
    } else {
      setOutputCode(`<html> 
      <body>${defaultHTML}</body>
      <style>${defaultCSS}</style>
      <script>${jsCode}</script>
      </html>`);
    }
  };

  let handleRun = () => {
    if (editorStyle === 'codepen') {
      setOutputCode(`<html> 
    <body>${htmlCode}</body>
    <style>${cssCode}</style>
    <script>${jsCode}</script>
    </html>`);
    } else {
      setOutputCode(htmlCode);
    }
  };

  //Theme Context, App Context
  const [theme, setTheme] = useState(themes.light); //default light
  const [appConfig, setAppConfig] = useState(appInitialState);

  //handle theme toggle
  let toggleTheme = () => {
    if (theme === themes.light) setTheme(themes.dark);
    else setTheme(themes.light);
  };

  //handle app settings
  let handleFontChange = (size) => {
    setAppConfig({ ...appConfig, fontSize: size });
  };
  let handleLightTheme = (lightTheme) => {
    setAppConfig({ ...appConfig, lightTheme: lightTheme });
  };
  let handleDarkTheme = (darkTheme) => {
    setAppConfig({ ...appConfig, darkTheme: darkTheme });
  };

  let handleEditorType = (editorType) => {
    setAppConfig({ ...appConfig, codeEditor: editorType });
  };

  return (
    <AppContext.Provider
      value={{
        appConfig,
        handleFontChange,
        handleLightTheme,
        handleDarkTheme,
        handleEditorType,
      }}
    >
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className={styles.container}>
          <Toolbar
            handleRun={handleRun}
            handleEditorStyle={handleToggleEditorStyle}
            outputCode={outputCode}
          />
          <div className={styles.inner}>
            <div className={styles.inner_editor}>
              {editorStyle === 'codepen' ? (
                <Editor
                  onHTML={setHtmlCode}
                  onCSS={setCSSCode}
                  onJS={setJSCode}
                />
              ) : (
                <Editor2 onHTML={setHtmlCode} />
              )}
            </div>

            <div className={styles.inner_output}>
              <Output
                outputCode={outputCode}
                htmlCode={htmlCode}
                cssCode={cssCode}
                jsCode={jsCode}
              />
            </div>
          </div>
        </div>
      </ThemeContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
