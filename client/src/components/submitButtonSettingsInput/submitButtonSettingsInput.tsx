import React from "react";
import "./submitButtonSettingsInput.css"

interface submitButtonSettingInputProps{
    buttonText: string,
    setButtonTex: (text: string) => void
    backgroundColor: string,
    setBackgroundColor: (text: string) => void
}

const SubmitButtonSettingInput = (props: submitButtonSettingInputProps) => {
  const {buttonText, backgroundColor, setButtonTex, setBackgroundColor} = props

  const handleColorInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBackgroundColor(e.target.value);
  };

    const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setButtonTex(e.currentTarget.value);
  };

  return (
    <div className="submit-button-input-container">
        <input
            className="submit-button-text-input"
            type="text"
            id="submitButtonText" 
            value={buttonText}
            placeholder={"Submit button text"}
            onChange={(e) => handleTextInput(e)}
        />
        <label>Choose a background color: </label>
        <input 
            className="submit-button-background-color-input"
            type="color" 
            id="submitButtonBackgroundColor" 
            value={backgroundColor} 
            onChange={handleColorInput} 
        />
    </div>
  );
};

export default SubmitButtonSettingInput;