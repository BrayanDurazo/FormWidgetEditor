import "./textInput.css"

interface TextInputProps {
  textValue: string,
  textContent: string,
  isRequired?: boolean,
  setTextContent: (text: string) => void
}



const TextInput = (props: TextInputProps) => {
  const {textValue, textContent, isRequired, setTextContent} = props

  const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextContent(e.currentTarget.value);
  };

  if (isRequired) {
    return (
      <div className="text-group">
        <input
            type="text"
            id={textValue}
            value={textContent}
            placeholder={textValue+"*"}
            onChange={(e) => handleTextInput(e)}
            required
        />
      </div>
    );
  }else{
    return (
      <div className="text-group">
        <input
            type="text"
            id={textValue}
            value={textContent}
            placeholder={textValue}
            onChange={(e) => handleTextInput(e)}
        />
      </div>
    );
  }
}

export default TextInput
