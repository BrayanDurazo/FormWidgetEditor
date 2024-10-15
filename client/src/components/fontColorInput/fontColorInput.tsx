import React from 'react';
import './fontColorInput.css';

interface FontColorInputProps {
  textValue: string;
  fontColor: string;
  setFontColor: (text: string) => void;
}

const FontColorInput = (props: FontColorInputProps) => {
  const { textValue, fontColor, setFontColor } = props;

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFontColor(e.target.value);
  };

  return (
    <div className="font-color-input-container">
      <label>Choose a {textValue} font color: </label>
      <input
        type="color"
        id="colorPicker"
        value={fontColor}
        onChange={handleColorChange}
      />
    </div>
  );
};

export default FontColorInput;
