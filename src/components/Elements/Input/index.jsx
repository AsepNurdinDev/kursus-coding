import Label from "./Label";
import Input from "./Input";

const InputForm = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}) => {
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default InputForm;
