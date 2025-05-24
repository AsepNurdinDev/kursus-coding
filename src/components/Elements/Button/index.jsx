import React from "react";

const Button = ({
  children,
  className = "",
  onClick = () => {},
  type = "button",
  ...rest
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg text-white font-semibold ${className}`}
      type={type}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
