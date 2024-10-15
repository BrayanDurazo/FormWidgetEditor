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
        <div className="submit-button-input">
            <label className="submit-button-label">Submit button text:</label>
            <input
                className="submit-button-text-input"
                type="text"
                id="submitButtonText" 
                value={buttonText}
                placeholder={"Submit"}
                onChange={(e) => handleTextInput(e)}
            />
        </div>
        <div className="submit-button-input">
            <label className="submit-button-color-label">Submit button background color:</label>
            <input
                className="submit-button-color-input"
                type="color" 
                id="submitButtonBackgroundColor" 
                value={backgroundColor} 
                onChange={handleColorInput} 
            />
        </div>

    </div>
  );
};

export default SubmitButtonSettingInput;