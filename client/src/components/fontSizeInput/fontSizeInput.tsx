import './fontSizeInput.css';

interface fontSizeInputProps {
  fontSize: number;
  setFontSize: (text: number) => void;
}

const FontSizeInput = (props: fontSizeInputProps) => {
  const { fontSize, setFontSize } = props;

  const handleFontSizeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFontSize(Number(e.target.value));
  };

  return (
    <div className="font-size-container">
      <div className="font-size-input">
        <label htmlFor="fontSizeInput">Font Size (px): </label>
        <input
          type="number"
          id="fontSizeInput"
          value={fontSize}
          min="8"
          max="100"
          onChange={handleFontSizeInput}
        />
      </div>
    </div>
  );
};

export default FontSizeInput;
