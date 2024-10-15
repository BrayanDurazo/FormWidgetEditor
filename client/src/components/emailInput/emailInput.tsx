import './emailInput.css';

interface EmailInputProps {
  email: string;
  setEmail: (text: string) => void;
}

const EmailInput = (props: EmailInputProps) => {
  const { email, setEmail } = props;

  const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  return (
    <div className="email-group">
      <input
        data-testid={'email-input'}
        type="email"
        id="email"
        value={email}
        placeholder={'Email*'}
        onChange={(e) => handleTextInput(e)}
        required
      />
    </div>
  );
};

export default EmailInput;
