import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "../Elements/Input";
import axios from "axios";

const FormRegister = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Submit data:", username, email, password);

    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();
      console.log("Server response:", data); // ✅ lihat isinya

      if (res.ok) {
        navigate("/login");
      } else {
        alert(data.msg || "Registrasi gagal");
      }
    } catch (err) {
      console.error("Fetch error:", err); // ✅ jika fetch-nya sendiri error
      alert("Terjadi kesalahan saat mengirim data");
    }
  };

  return (
    <form onSubmit={handleRegister} className="space-y-4">
      <InputForm
        label="Username"
        name="username"
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <InputForm
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
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
