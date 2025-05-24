const Input = (props) => {
  const { type, placeholder, name, onChange, value } = props;

  return (
    <input
      type={type}
      className="text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      placeholder={placeholder}
      name={name}
      id={name}
      onChange={onChange}
      value={value} 
    />
  );
};

export default Input;
