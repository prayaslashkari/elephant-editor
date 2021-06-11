import { useContext } from 'react';
import ThemeContext from '../../themes/ThemeContext';

//Icons
import { BsPlayFill } from 'react-icons/bs';
import { FaSave } from 'react-icons/fa';
import { BsFillBrightnessHighFill } from 'react-icons/bs';
import { MdBrightness3 } from 'react-icons/md';

//Styles
import styles from './Toolbar.module.css';

import cx from 'classnames';

import { motion } from 'framer-motion';

const DARK_ICON = '#3d9cf5';
const BRIGHT_ICON = 'black';

function Toolbar({ handleRun, handleEditorStyle, outputCode }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  //Download text file into .txt
  let downloadTxtFile = () => {
    const element = document.createElement('a');
    /* 
    const file = new Blob([document.getElementById('myInput').value], {type: 'text/plain'}); */

    const file = new Blob([outputCode], {
      type: 'text/plain',
    });
    element.href = URL.createObjectURL(file);
    element.download = 'myFile.txt';
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  return (
    <div
      className={cx(
        styles.container,
        theme === 'light' ? styles.bright_theme : styles.dark_theme
      )}
    >
      <div className={styles.inner}>
        <div className={styles.inner_left}>
          <div
            className={cx(
              styles.toolbar_button,
              theme === 'light'
                ? styles.toolbar_button_bright
                : styles.toolbar_button_dark
            )}
            onClick={handleRun}
          >
            <p>Run</p>
            <BsPlayFill
              style={{ marginLeft: '3px' }}
              color={theme === 'light' ? BRIGHT_ICON : DARK_ICON}
              size={16}
            />
          </div>

          <div
            className={cx(
              styles.toolbar_button,
              theme === 'light'
                ? styles.toolbar_button_bright
                : styles.toolbar_button_dark
            )}
            onClick={downloadTxtFile}
          >
            <p>Save</p>
            <FaSave
              style={{ marginLeft: '3px' }}
              color={theme === 'light' ? BRIGHT_ICON : DARK_ICON}
              size={16}
            />
          </div>

          <div
            className={cx(
              styles.toolbar_button,
              theme === 'light'
                ? styles.toolbar_button_bright
                : styles.toolbar_button_dark
            )}
            onClick={handleEditorStyle}
          >
            <p>Toggle Editor Style</p>
          </div>
        </div>

        <div className={styles.inner_right}>
          <motion.div
            initial={{ rotate: 30, borderRadius: 100 }}
            whileHover={{ rotate: 390, origin: 'center' }}
            transition={{ duration: 0.5 }}
            className={cx(
              styles.toolbar_button,
              theme === 'light'
                ? styles.toolbar_button_bright
                : styles.toolbar_button_dark
            )}
            onClick={toggleTheme}
          >
            {theme === 'light' ? (
              <MdBrightness3 color={'#FCC119'} size={24} />
            ) : (
              <BsFillBrightnessHighFill color={'#FCC119'} size={24} />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Toolbar;
