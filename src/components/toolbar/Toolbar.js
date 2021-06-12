import { useEffect, useContext, useState } from 'react';
import AppContext from '../../store/AppContext';
import ThemeContext from '../../store/ThemeContext';

import SettingsModal from '../common/modal/SettingsModal';

//Icons
import { BsPlayFill } from 'react-icons/bs';
import { FaSave } from 'react-icons/fa';
import { BsFillBrightnessHighFill } from 'react-icons/bs';
import { MdBrightness3 } from 'react-icons/md';
import { RiSettings3Fill } from 'react-icons/ri';

//Styles
import styles from './Toolbar.module.css';

import cx from 'classnames';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const DARK_ICON = '#3d9cf5';
const BRIGHT_ICON = 'black';
const variants = {
  rotate: { rotate: 390, transition: { duration: 0.5 } },
  stop: { rotate: 30, transition: { duration: 0.5 } },
};

function Toolbar({ handleRun, handleEditorStyle, outputCode }) {
  const [settingDialog, setSettingDialog] = useState(false);

  const { theme, toggleTheme } = useContext(ThemeContext);
  const {
    appConfig,
    handleFontChange,
    handleLightTheme,
    handleDarkTheme,
    handleEditorType,
  } = useContext(AppContext);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  //Download text file into .txt
  let handleSaveTxtFile = () => {
    const element = document.createElement('a');
    const file = new Blob([outputCode], {
      type: 'text/plain',
    });
    element.href = URL.createObjectURL(file);
    element.download = 'myFile.txt';
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  let handleSettingOpen = () => {
    setSettingDialog(true);
  };

  let handleSettingClose = () => {
    setSettingDialog(false);
  };

  return (
    <div
      className={cx(
        styles.container,
        theme === 'light' ? styles.bright_theme : styles.dark_theme
      )}
    >
      <SettingsModal isOpen={settingDialog} handleClose={handleSettingClose} />
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
            onClick={handleSaveTxtFile}
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
            variants={variants}
            animate={theme === 'light' ? 'rotate' : 'stop'}
            initial={{ rotate: 30, borderRadius: 100, origin: 'center' }}
            className={cx(
              styles.toolbar_button,
              theme === 'light'
                ? styles.toolbar_button_bright
                : styles.toolbar_button_dark
            )}
            onClick={() => {
              toggleTheme();
            }}
          >
            {theme === 'light' ? (
              <MdBrightness3 color={'#FCC119'} size={24} />
            ) : (
              <BsFillBrightnessHighFill color={'#FCC119'} size={24} />
            )}
          </motion.div>

          <motion.div
            variants={variants}
            animate={settingDialog ? 'rotate' : 'stop'}
            className={cx(
              styles.toolbar_button,
              theme === 'light'
                ? styles.toolbar_button_bright
                : styles.toolbar_button_dark
            )}
            style={{ borderRadius: '50%' }}
            onClick={() => handleSettingOpen()}
          >
            <RiSettings3Fill
              color={theme === 'light' ? BRIGHT_ICON : DARK_ICON}
              size={24}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Toolbar;
