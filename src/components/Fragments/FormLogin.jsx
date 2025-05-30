import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("token", data.token);
      navigate("/courses");
    } else {
      alert(data.msg);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <InputForm
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
      />
      <InputForm
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your password"
      />
      <Button
        className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 px-4 w-full rounded-lg transition duration-300"
        type="submit"
      >
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
