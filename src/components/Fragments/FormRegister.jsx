import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "../Elements/Input";
import axios from "axios";

const FormRegister = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        fullname,
        email,
        password,
        confirmPassword,
      };
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );
      console.log(response.data);
      // redirect ke login
    } catch (error) {
      if (error.response) {
        console.error("Gagal registrasi:", error.response.data.message);
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <InputForm
        label="Fullname"
        name="fullname"
        type="text"
        placeholder="Enter your fullname"
        value={formData.fullname}
        onChange={handleChange}
      />
      <InputForm
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={handleChange}
      />
      <InputForm
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        placeholder="Confirm your password"
        value={formData.confirmPassword}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 px-4 w-full rounded-lg transition duration-300"
      >
        Register
      </button>
    </form>
  );
};

export default FormRegister;
