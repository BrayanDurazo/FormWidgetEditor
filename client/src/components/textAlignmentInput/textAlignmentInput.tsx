import './textAlignmentInput.css';
interface TextAlignmentInputProps {
  textValue: string;
  alignment: 'left' | 'center' | 'right';
  setAlignment: (text: 'left' | 'center' | 'right') => void;
}

const TextAlignmentInput = (props: TextAlignmentInputProps) => {
  const { textValue, alignment, setAlignment } = props;

  const handleAlignmentChange = (
    updatedAlignment: 'left' | 'center' | 'right'
  ) => {
    setAlignment(updatedAlignment);
  };

  return (
    <div className="alignment-container">
      {/* Buttons for changing text alignment */}
      <div className="alignment-text" style={{ textAlign: alignment }}>
        Choose the {textValue} alignment:
      </div>
      <div className="alignment-buttons">
        <button
          data-testid={'left-alignment-button-' + textValue}
          onClick={() => handleAlignmentChange('left')}
          className={`align-btn ${alignment === 'left' ? 'active' : ''}`}
        >
          Left
        </button>
        <button
          data-testid={'center-alignment-button-' + textValue}
          onClick={() => handleAlignmentChange('center')}
          className={`align-btn ${alignment === 'center' ? 'active' : ''}`}
        >
          Center
        </button>
        <button
          data-testid={'right-alignment-button-' + textValue}
          onClick={() => handleAlignmentChange('right')}
          className={`align-btn ${alignment === 'right' ? 'active' : ''}`}
        >
          Right
        </button>
      </div>

      {/* Display text with dynamic alignment */}
    </div>
  );
};

export default TextAlignmentInput;
