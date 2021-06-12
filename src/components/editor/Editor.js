import { useContext } from 'react';

import AceEditor from 'react-ace';

//languages
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';

//themes
import 'ace-builds/src-noconflict/theme-monokai'; //dark theme
import 'ace-builds/src-noconflict/theme-clouds_midnight'; //dark theme
import 'ace-builds/src-noconflict/theme-ambiance'; //dark theme
import 'ace-builds/src-noconflict/theme-chaos'; //dark theme
import 'ace-builds/src-noconflict/theme-dracula'; //dark theme

import 'ace-builds/src-noconflict/theme-github'; // bright theme
import 'ace-builds/src-noconflict/theme-eclipse'; // bright theme
import 'ace-builds/src-noconflict/theme-chrome'; // bright theme
import 'ace-builds/src-noconflict/theme-tomorrow'; // bright theme
import 'ace-builds/src-noconflict/theme-xcode'; // bright theme

//additional plugins
import 'ace-builds/src-min-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/snippets/javascript';
import 'ace-builds/src-noconflict/snippets/html';
import 'ace-builds/src-noconflict/snippets/css';

//context imports
import ThemeContext from '../../store/ThemeContext';
import AppContext from '../../store/AppContext';

//styles
import styles from './Editor.module.css';

import { useMediaQuery } from 'react-responsive';

import { defaultHTML, defaultCSS } from '../../constants/defaultCode';

function Editor({ onHTML, onCSS, onJS }) {
  const { theme } = useContext(ThemeContext);
  const { appConfig } = useContext(AppContext);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  function onHTMLChange(newValue) {
    onHTML(newValue);
  }

  function onCSSChange(newValue) {
    onCSS(newValue);
  }

  function onJSChange(newValue) {
    onJS(newValue);
  }

  return (
    <div className={styles.container}>
      <AceEditor
        mode='html'
        theme={theme === 'light' ? appConfig.lightTheme : appConfig.darkTheme}
        defaultValue={defaultHTML}
        onChange={onHTMLChange}
        fontSize={appConfig.fontSize}
        name='HTML_EDITOR'
        height={isMobile ? '100%' : '33.3%'}
        width='100%'
        highlightActiveLine={true}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
        editorProps={{ $blockScrolling: true }}
      />
      <AceEditor
        mode='css'
        theme={theme === 'light' ? appConfig.lightTheme : appConfig.darkTheme}
        onChange={onCSSChange}
        fontSize={appConfig.fontSize}
        defaultValue={defaultCSS}
        name='CSS_EDITOR'
        className='generic_editor'
        height={isMobile ? '100%' : '33.3%'}
        width='100%'
        highlightActiveLine={true}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
        editorProps={{ $blockScrolling: true }}
      />
      <AceEditor
        mode='javascript'
        theme={theme === 'light' ? appConfig.lightTheme : appConfig.darkTheme}
        onChange={onJSChange}
        fontSize={appConfig.fontSize}
        defaultValue={`//Add your Javascript Code here`}
        name='JS_EDITOR'
        height={isMobile ? '100%' : '33.3%'}
        width='100%'
        highlightActiveLine={true}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  );
}

export default Editor;
