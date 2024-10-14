import "./toggleRequiredInput.css";

interface RequiredToggleInputProps{
    textValue: string,
    required: boolean,
    setRequired: (updatedRequired: boolean) => void
}

const ToggleButton = (props: RequiredToggleInputProps) => {
    const {textValue, required, setRequired} = props

    // Toggle the state on button click
    const handleToggle = () => {
        setRequired(!required);
    };

    return (
        <button
            className={`toggle-button ${required ? "required" : ""}`}
            onClick={handleToggle}
            >
            {required ? "On" : "Off"}
        </button>
    );
    };

export default ToggleButton;
