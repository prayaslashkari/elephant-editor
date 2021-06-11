import { useContext } from 'react';

import AceEditor from 'react-ace';

//languages
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
//themes
import 'ace-builds/src-noconflict/theme-dracula'; //dark theme
import 'ace-builds/src-noconflict/theme-github'; // bright theme

//additional plugins
import 'ace-builds/src-min-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/snippets/javascript';
import 'ace-builds/src-noconflict/snippets/html';
import 'ace-builds/src-noconflict/snippets/css';

//context imports
import ThemeContext from '../../themes/ThemeContext';
//styles
import styles from './Editor.module.css';

import { useMediaQuery } from 'react-responsive';
import { defaultW3HTML } from '../../constants/defaultCode';

function Editor({ onHTML, onCSS, onJS }) {
  const { theme } = useContext(ThemeContext);
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
        theme={theme === 'light' ? 'github' : 'dracula'}
        defaultValue={defaultW3HTML}
        onChange={onHTMLChange}
        name='HTML_EDITOR'
        height={'100%'}
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
