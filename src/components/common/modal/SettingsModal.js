import React, { useState, useContext, useEffect } from 'react';
import Modal from 'react-modal';
import Select from 'react-select';
import AppContext from '../../../store/AppContext';

const fontOptions = [
  { value: '10px', label: '10px' },
  { value: '12px', label: '12px' },
  { value: '16px', label: '16px' },
  { value: '18px', label: '18px' },
];

const lightThemeOptions = [
  { value: 'chrome', label: 'Chrome' },
  { value: 'github', label: 'Github' },
  { value: 'eclipse', label: 'Eclipse' },
  { value: 'tomorrow', label: 'Tomorrow' },
  { value: 'xcode', label: 'Xcode' },
];

const darkThemeOptions = [
  { value: 'ambiance', label: 'Ambiance' },
  { value: 'chaos', label: 'Chaos' },
  { value: 'monokai', label: 'Monokai' },
  { value: 'clouds_midnight', label: 'Clouds Midnight' },
  { value: 'dracula', label: 'Dracula' },
];

const CodeEditorOptions = [
  { value: 'w3schools', label: 'w3schools' },
  { value: 'codepen', label: 'Codepen' },
];

const customStyles = {
  overlay: {
    zIndex: 1000,
  },
  content: {
    height: '50vh',
    width: '50vw',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    overflow: 'visible',
  },
};

function SettingsModal({ isOpen, handleClose, afterOpenModal = null }) {
  const {
    appConfig,
    handleFontChange,
    handleLightTheme,
    handleDarkTheme,
    handleEditorType,
  } = useContext(AppContext);

  const [selectedFontSize, setSelectedFontSize] = useState({
    value: appConfig.fontSize,
    label: appConfig.fontSize,
  });

  const [selectedLightTheme, setSelectedLightTheme] = useState({
    value: 'chrome',
    label: 'Chrome',
  });
  const [selectedDarkTheme, setSelectedDarkTheme] = useState({
    value: 'ambiance',
    label: 'Ambiance',
  });

  const [selectedEditorTheme, setSelectedEditorTheme] = useState({
    value: 'w3schools',
    label: 'w3schools',
  });

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={handleClose}
      style={customStyles}
      contentLabel='Example Modal'
    >
      <div
        style={{
          width: '100%',
          height: 'fit-content',
        }}
      >
        <div>
          <div>Font Size</div>
          <div>
            <Select
              maxMenuHeight={150}
              value={selectedFontSize}
              onChange={(selectedOption) => {
                setSelectedFontSize(selectedOption);
                handleFontChange(selectedOption.value);
              }}
              options={fontOptions}
            />
          </div>
        </div>

        <div>
          <div>Light Theme</div>
          <div>
            <Select
              maxMenuHeight={150}
              value={selectedLightTheme}
              onChange={(selectedOption) => {
                setSelectedLightTheme(selectedOption);
                handleLightTheme(selectedOption.value);
              }}
              options={lightThemeOptions}
            />
          </div>
        </div>

        <div>
          <div>Dark Theme</div>
          <div>
            <Select
              maxMenuHeight={150}
              value={selectedDarkTheme}
              onChange={(selectedOption) => {
                setSelectedDarkTheme(selectedOption);
                handleDarkTheme(selectedOption.value);
              }}
              options={darkThemeOptions}
            />
          </div>
        </div>

        <div>
          <div>Code Editor</div>
          <div>
            <Select
              maxMenuHeight={150}
              options={CodeEditorOptions}
              value={selectedEditorTheme}
              onChange={(selectedOption) => {
                setSelectedEditorTheme(selectedOption);
                handleEditorType(selectedOption.value);
              }}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default SettingsModal;
