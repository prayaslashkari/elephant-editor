import { useContext } from 'react';

//context imports
import ThemeContext from '../../store/ThemeContext';
//Styles
import styles from './Output.module.css';

/* const divStyle = {
    color: 'blue',
};

function createMarkup() {
    return { __html: '<h1 style={divStyle}> Prayas </h1>' };
} */

function Output({ outputCode }) {
  return (
    <iframe
      srcDoc={outputCode}
      title='CodePreview'
      sandbox='allow-scripts'
      frameBorder='0'
      width='100%'
      height='100%'
    />
  );
}

export default Output;
