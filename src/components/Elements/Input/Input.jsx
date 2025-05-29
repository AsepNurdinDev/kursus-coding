const Input = ({ type, placeholder, name, onChange, value, required }) => {
  return (
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    />
  );
};

export default Input;
